<script lang="ts">
    let activeElement = $props();

    import { MessageCircle, Hash, User } from "@lucide/svelte";
    let elements = ["MessageCircle", "Hash", "User"];
</script>

<footer class="flex items-center justify-evenly sticky w-dvw bottom-0 py-5 backdrop-blur-xs">
    <MessageCircle fill="white" class="w-8 h-8" />
    <div class="relative">
        <Hash class="w-8 h-8" />
        <span class="absolute h-1 w-1 bg-red-500 rounded-full left-[50%] -translate-x-[50%] -bottom-3"></span>
    </div>
    <User class="w-8 h-8" />
</footer>