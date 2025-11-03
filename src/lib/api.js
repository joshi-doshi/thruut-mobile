// src/lib/api.js

import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';

export async function fetchData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error(`${response.status}`);
		return await response.json();
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function postData(url, payload) {
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});
		if (!response.ok) throw new Error(`${response.status}`);
		return await response.json();
	} catch (error) {
		console.error(error);
		throw error;
	}
}

async function generateKeyPair() {
	const { publicKey, privateKey } = await window.crypto.subtle.generateKey(
		{
			name: 'ECDSA',
			namedCurve: 'P-256'
		},
		true,
		['sign', 'verify']
	);
	return { publicKey, privateKey };
}

export async function initAccount() {
	const privateKey = (await generateKeyPair()).privateKey;
	const publicKey = (await generateKeyPair()).publicKey;

	SecureStoragePlugin.set({ key: 'privateKey', value: JSON.stringify(privateKey) });
	SecureStoragePlugin.set({ key: 'publicKey', value: JSON.stringify(publicKey) });
}

export async function getCapacitorHash() {}
