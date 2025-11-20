<script>
	import { Button } from '$lib/components/ui/button/index.js';

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

	<Button variant="secondary" class="text-md min-w-70" onclick={switchToApp}
		><span bind:this={launchAppButton}
			>{#if !loading}start using the app{:else}<div id="loader"></div>{/if}</span
		></Button
	>
</div>

<style>
	/* From Uiverse.io by Fernando-sv */
	#loader {
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-left-color: transparent;
		border-radius: 50%;
	}

	#loader {
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-left-color: transparent;
		width: 24px;
		height: 24px;
	}

	#loader {
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-left-color: transparent;
		width: 24px;
		height: 24px;
		animation: spin89345 1s linear infinite;
	}

	@keyframes spin89345 {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
