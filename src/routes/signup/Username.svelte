<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { ArrowRight } from '@lucide/svelte';
</script>

<div class="relative flex h-screen w-screen flex-col items-center justify-center gap-5">
	<img src="/wave.png" alt="waving hand emoji" />

	<div class="flex flex-col items-center gap-1">
		<div class="text-3xl">create a username</div>
		<div class="text-xl">you can always change it later</div>
	</div>

	<Button variant="secondary" class="text-md"><ArrowRight />confirm</Button>

	<div class="absolute bottom-6 text-center text-sm">it will be used so you can add friends</div>
</div>
