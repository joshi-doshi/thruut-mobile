<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowRight } from '@lucide/svelte';

	let { nextPage } = $props();
</script>

<div
	class="relative flex h-screen w-screen snap-center flex-col items-center justify-center gap-5 scroll-smooth"
>
	<img src="/wave.png" alt="waving hand emoji" />

	<div class="flex flex-col items-center gap-1">
		<div class="text-3xl">welcome!</div>
		<div class="text-xl">let's get you started.</div>
	</div>

	<Button variant="secondary" class="text-md" onclick={nextPage}
		><ArrowRight />create an account</Button
	>

	<div class="absolute bottom-6 text-center text-sm">
		by clicking "create an account",<br />
		you confirm that you're over 14 years old.
	</div>
</div>
