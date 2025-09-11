<script>
import {
    Input
} from "$lib/components/ui/input/index.js";

import {
    Send
} from 'lucide-svelte';

const {
    appendMessage
} = $props();
let value = $state("");

function sendMessage() {
    appendMessage("bob", value);
    value = "";
}
</script>

<Input bind:value={value} onkeydown={(event) => {
if (event.keyCode === 13) {
sendMessage();
}
}} autofocus />
<button onclick={() => sendMessage()}>
    <Send />
</button>
