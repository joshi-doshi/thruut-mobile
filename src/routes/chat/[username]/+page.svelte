<script lang="js">
import {
    page
} from '$app/state';
import {
    ChevronLeft
} from 'lucide-svelte';
import {
    tick
} from 'svelte';

import UserOptions from './UserOptions.svelte';
import Messages from './Messages.svelte';
import Footer from './Footer.svelte';

let username = $state('');

$effect(() => {
    username = page.params.username;
});

const now = new Date();
const formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
});
const timeString = formatter.format(now);

let messages = $state([{
        id: 1,
        from: "alice",
        to: "bob",
        text: "Hello Bob!",
        timestamp: "2025-08-06T14:00:00Z",
        unread: true
    },
    {
        id: 2,
        from: "bob",
        to: "alice",
        text: "Hi Alice!",
        timestamp: "2025-08-06T14:05:00Z",
        unread: false
    }
]);

async function appendMessage(sender, content) {
    const newID = messages.length + 1;
    const newMessage = {
        id: newID,
        from: sender,
        to: "alice",
        text: content,
        timestamp: Date.now(),
        unread: true
    }

    messages.push(newMessage);

    const section = document.querySelector("section");
    await tick();
    section.scrollTo({
        top: section.scrollHeight,
        behavior: "smooth"
    });
}
</script>

<main class="h-screen flex flex-col">
    <header class="flex p-6 items-center gap-2 sticky top-0 left-0">
        <a href="/"><ChevronLeft /></a>
        <UserOptions {username} {timeString} />
    </header>

    <section class="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
        <div id="messages" class="flex flex-col gap-3 w-screen px-6 font-geist">
            <Messages {messages} />
        </div>
    </section>

    <footer class="w-screen p-6 flex items-center gap-3">
        <Footer {appendMessage} />
    </footer>
</main>
