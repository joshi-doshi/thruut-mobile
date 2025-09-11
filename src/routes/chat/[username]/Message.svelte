<script lang="js">
import {
    CheckCheck
} from 'lucide-svelte';
const {
    messageData
} = $props();

import {
    fade
} from 'svelte/transition';
</script>

<div
    class:self-end={messageData.from === "bob"}
    class:text-right={messageData.from === "bob"}
    in:fade
    >
    <!-- RESERVED FOR GROUPS
      {#if messageData.from != "bob"}
        {messageData.from}
      {/if}
    -->
    <div class="py-2 px-4 rounded-[15px] break-all w-fit"
        class:bg-primary={messageData.from === "bob"}
        class:bg-secondary={messageData.from !== "bob"}
        class:text-black={messageData.from !== "bob"}
        >
        {messageData.text}
        <small>
            {new Date(messageData.timestamp).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
        </small>
        {#if !messageData.unread && messageData.from != "bob"}
        <CheckCheck />
        {/if}
    </div>
</div>
