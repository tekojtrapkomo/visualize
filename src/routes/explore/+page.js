import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/setting';

import PocketBase from 'pocketbase';

const pb = new PocketBase('https://hissing-machine.pockethost.io');
export const load = () => {
	const getTopic = async () => {
		try {
			const topic = serializeNonPOJOs(await pb.collection('topic').getFullList(200 /* batch size */, {
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
			const gallery = serializeNonPOJOs(await pb.collection('gallery').getFullList(200 /* batch size */,{
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