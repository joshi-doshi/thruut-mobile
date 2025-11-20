// src/lib/api.js

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
