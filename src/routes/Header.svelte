<script lang="ts">
import {
    Button
} from "$lib/components/ui/button/index.js";
import {
    Plus,
    Search
} from "@lucide/svelte";
import * as Dialog from "$lib/components/ui/dialog/index.js";
import {
    Input
} from "$lib/components/ui/input/index.js";
import {
    Label
} from "$lib/components/ui/label/index.js";

let useNewContact = $state(null);

function reset() {
    useNewContact = null;
}
</script>

<header class="flex items-center sticky top-0 w-dvw justify-between p-6 backdrop-blur-sm z-2">
    <h1 class="text-3xl font-semibold font-instrument">Nachrichten</h1>
    <div class="flex items-center gap-2">
        <Search />
        <Dialog.Root on:close={reset}>
            <Dialog.Trigger>
                <Button class="font-geist"><Plus />Neu</Button>
            </Dialog.Trigger>

            <Dialog.Content>
                <Dialog.Header>
                    <Dialog.Title>Erstelle einen neuen Chat</Dialog.Title>

                    {#if useNewContact === null}
                    <div class="flex flex-col gap-4 mt-4">
                        <Button onclick={() => useNewContact = true}>Neuer Kontakt</Button>
                        <Button onclick={() => useNewContact = false}>Existierender Kontakt</Button>
                    </div>
                    {:else if useNewContact}
                    <Dialog.Description class="flex flex-col gap-4 mt-4">
                        <div class="flex flex-col font-geist gap-2">
                            <Label for="username">Mit Benutzernamen</Label>
                            <Input type="text" placeholder="Benutzername" id="username" />
                        </div>
                    </Dialog.Description>
                    {:else}
                    <Dialog.Description class="flex flex-col gap-4 mt-4">
                        <div class="flex flex-col font-geist gap-2">
                            <Label for="existing">Wähle einen bestehenden Kontakt</Label>
                            <select id="existing">
                                <option>Max</option>
                                <option>Anna</option>
                                <option>Lukas</option>
                            </select>
                        </div>
                    </Dialog.Description>
                    {/if}
                </Dialog.Header>
            </Dialog.Content>
        </Dialog.Root>
    </div>
</header>
