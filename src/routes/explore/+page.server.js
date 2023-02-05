import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/setting';

 export const load = ({ locals, params }) => {
	const getTopic = async () => {
		try {
			const topic = serializeNonPOJOs(await locals.pb.collection('topic').getOne('dljwif9pjtmka5o'));
			return topic;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};
	return {
		topic: getTopic(params.collectionId)
	};
};
export const actions = {
        register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		let username = (body.name);

		try {
			await locals.pb.collection('users').create({ username, ...body });
			await locals.pb.collection('users').requestVerification(body.email);
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'bruh check your email and shii');
		}

		throw redirect(303, '/');
    },
	
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').authWithPassword(body.email, body.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return {
					notVerified: true
				};
			}
		} catch (err) {
			console.log('Error: ', err);
			throw error(500, 'Something went wrong logging in');
		}

		throw redirect(303, '/');
	}
};

