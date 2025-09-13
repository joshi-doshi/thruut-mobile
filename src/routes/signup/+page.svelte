<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import Welcome from './Welcome.svelte';
	import Username from './Username.svelte';
	import Finished from './Finished.svelte';
</script>

<div class="h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
	<Welcome class="flex h-screen snap-center items-center justify-center" />
	<Username class="flex h-screen snap-center items-center justify-center" />
	<Finished class="flex h-screen snap-center items-center justify-center" />
</div>
