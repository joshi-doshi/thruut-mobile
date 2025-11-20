<script lang="ts">
	let requestURL: string = 'https://corsproxy.io/?url=https://thruut.chat/testing';

	async function fetchData(requestURL): Promise {
		const response = await fetch(requestURL);
		if (!response.ok) throw new Error(`${response.status}`);
		return await response.json();
	}

	let response: string = $state('');
	$effect(() => {
		response = fetchData(requestURL);
	});
</script>

<div>
	{JSON.stringify(response)}
</div>
