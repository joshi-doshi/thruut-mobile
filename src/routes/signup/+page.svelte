<script lang="ts">
	import Welcome from './Welcome.svelte';
	import Username from './Username.svelte';
	import Finished from './Finished.svelte';

	let container;

	let currentScrollWidth = 0;

	function nextPage() {
		const children = container.children;
		currentScrollWidth -= 100;
		for (let child of children) {
			child.style.transform = `translateX(${currentScrollWidth}vw)`;
			child.style.transition = 'transform 0.5s ease';
		}
	}
</script>

<div
	class="scrollbar-hide flex h-screen w-screen snap-x snap-mandatory overflow-hidden"
	bind:this={container}
>
	<div class="h-screen w-screen flex-1 snap-center">
		<Welcome {nextPage} />
	</div>
	<div class="h-screen w-screen flex-1 snap-center">
		<Username {nextPage} />
	</div>
	<div class="h-screen w-screen flex-1 snap-center">
		<Finished />
	</div>
</div>
