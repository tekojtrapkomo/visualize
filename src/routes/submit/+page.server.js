import { error, invalid, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/setting.js';

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
			return invalid('No submission provided');
		}
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