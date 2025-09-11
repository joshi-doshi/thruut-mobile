<script lang="ts">
const {
    messages
} = $props();
import Message from "./Message.svelte";
</script>

{#each messages as messageData}
<Message {messageData} />
{/each}
