import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/setting.js';
import imageCompression from 'browser-image-compression';


export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	};
	const getTopic = async () => {
			try {
				const topic = serializeNonPOJOs(await locals.pb.collection('topic').getFullList(200 /* batch size */, {
					sort: '-created	',
				}));
				return topic;
			} catch (err) {
				console.log('Error: ', err);
				throw error(err.status, err.message);
			}
		};
		const getGallery = async () => {
			try {
				const gallery = serializeNonPOJOs(await locals.pb.collection('gallery').getFullList(200 /* batch size */,{
					expand: 'topicse,user'
				}));
				return gallery;
			} catch (err) {
				console.log('Error: ', err);
				throw error(err.status, err.message);
			}
	};
	return {
		topic: getTopic(),
		gallery: getGallery()
	};
};

export const actions = {
	create: async ({ locals, request }) => {
		const formData = await request.formData();
		const submission = formData.get('submission');

		if (submission.length === 0) {
			return error('No submission provided');
		}
		
		// Get the image file from the form data
		const imageFile = formData.get('submission');

		// Compress the image file
		const compressedImageFile = await compressImage(imageFile);

		// Append the compressed image file to the form data
		formData.set('submission', compressedImageFile);

		// Add user ID to form data
		formData.append('user', locals.user.id);

		try {
			await locals.pb.collection('gallery').create(formData);
		} catch (err) {
			console.log(err);
			throw error(err.status, err.message);
		}
		throw redirect(303, '/explore');
	}
};
