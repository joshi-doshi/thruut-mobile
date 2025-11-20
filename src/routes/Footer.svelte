<script>
	import { MessageCircle, Settings, Plus } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<footer class="sticky bottom-0 flex w-screen items-center justify-center gap-6 p-6">
	<Button variant="secondary" class="px-8 py-4 text-sm">
		<MessageCircle fill="1" /> chat
	</Button>

	<Plus />
	<Settings />
</footer>
