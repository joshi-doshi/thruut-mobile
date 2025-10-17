<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { ArrowRight } from '@lucide/svelte';
	import { fetchData, postData } from '$lib/api';


	let { nextPage } = $props();

	/**/

	function submitUsernameRequest() {
		
	}
</script>

<div class="relative flex h-screen w-screen snap-center flex-col items-center justify-center gap-5">
	<img src="/shake.png" alt="shaking hands emoji" />

	<div class="flex flex-col items-center gap-1">
		<div class="text-3xl">create a username</div>
		<div class="text-xl">you can always change it later</div>
	</div>

	<div class="flex flex-col items-center gap-3">
		<Input placeholder="enter your username here" />
		<Button variant="secondary" class="text-md" onclick={submitUsernameRequest}
			><ArrowRight />confirm</Button
		>
	</div>

	<div class="absolute bottom-6 text-center text-sm">it will be used so you can add friends</div>
</div>
