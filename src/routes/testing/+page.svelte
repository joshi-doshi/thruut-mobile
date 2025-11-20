<script lang="ts">
	let requestURL: string = 'http://192.168.1.114/testing';

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
