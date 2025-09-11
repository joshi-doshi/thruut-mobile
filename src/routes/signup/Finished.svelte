<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<div class="relative flex h-screen w-screen snap-center flex-col items-center justify-center gap-5">
	<img src="/check.png" alt="check emoji" />

	<div class="flex flex-col items-center gap-1">
		<div class="text-3xl">you're all set!</div>
	</div>

	<Button variant="secondary" class="text-md">start using the app</Button>
</div>
