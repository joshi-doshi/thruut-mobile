<script>
	import { Settings, Plus } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<header class="flex items-center justify-between p-6">
	<Button variant="link">
		<Settings /></Button
	>
	<Button variant="link"><Plus /></Button>
</header>
