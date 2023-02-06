import PocketBase from 'pocketbase';

const pb = new PocketBase('https://hissing-machine.pockethost.io');


export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
	return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
};


