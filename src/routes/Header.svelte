<script>
	import { Settings, Plus } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<header class="flex items-center justify-between p-6">
	<Button variant="ghost" size="icon" class="size-8">
		<Settings />
	</Button>
	<Button variant="ghost" size="icon" class="size-8">
		<Plus />
	</Button>
</header>
