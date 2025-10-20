<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import { Spinner } from "$lib/components/ui/spinner/index.js";

	let loading = $state(false);
	let launchAppButton;

	function switchToApp() {
		loading = true;
		window.location.href = '../';
	}
</script>

<div class="relative flex h-screen w-screen snap-center flex-col items-center justify-center gap-5">
	<img src="/check.png" alt="check emoji" />

	<div class="flex flex-col items-center gap-1">
		<div class="text-3xl">you're all set!</div>
	</div>

	<Button variant="default" class="text-md" onclick={switchToApp}
		><span bind:this={launchAppButton}
			>{#if !loading}start using the app{:else}<Spinner />{/if}</span
		></Button
	>
</div>