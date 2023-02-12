import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/setting';

export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions = {
	updateUser: async ({ request, locals }) => {
		const body = await request.formData();
		const formData = Object.fromEntries(body);
		try {
			const { name } = await locals.pb
				.collection('users')
				.update(locals?.user?.id, serializeNonPOJOs(formData));
			locals.user.name = name;
		} catch (err) {
			console.log('Error: ', err);
			throw error(400, 'Username already taken');
		}
		throw redirect(303, '/profile');	
	},
	updateIg: async ({ request, locals }) => {
		const body = await request.formData();
		const formData = Object.fromEntries(body);

		try {
			const { instagram } = await locals.pb
				.collection('users')
				.update(locals?.user?.id, serializeNonPOJOs(formData));
			locals.user.instagram = instagram;
		} catch (err) {
			console.log('Error: ', err);
			throw error(400, 'Something went wrong updating your profile');
		}
		return {
			success: true
		};
	}
};