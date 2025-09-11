<script lang="ts">
    let { username, timeString } = $props();

    import { Dot, Ban, UserRoundPlus, Archive, MessageCircleOff } from 'lucide-svelte';
    import * as Drawer from "$lib/components/ui/drawer/index.js";
    import { Button, buttonVariants } from "$lib/components/ui/button/index.js";
    import { cubicInOut } from "svelte/easing";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import { Separator } from "$lib/components/ui/separator/index.js";
</script>

<Dialog.Root>
    <Dialog.Trigger><h3 class="text-xl font-instrument">{username}</h3></Dialog.Trigger>
    <Dialog.Content class="h-screen w-screen rounded-none border-none flex flex-col gap-6">
        <Dialog.Header>
            <Dialog.Title class="flex flex-col items-center gap-3">
                <img src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg" alt="placeholder pfp"
                class="h-24 w-24 rounded-full">
                <h1 class="text-3xl">{username}</h1>
            </Dialog.Title>
            <Dialog.Description class="flex items-center justify-center">
                Zuletzt online: {timeString}
            </Dialog.Description>
        </Dialog.Header>

        <div class="flex flex-col gap-3">
        
            <!-- ALT NAME -->
            <Button variant="outline"><UserRoundPlus /> Spitznamen hinzufügen</Button>



            <Separator />


            <!-- RESTRICT -->
            <Drawer.Root>
                <Drawer.Trigger><Button variant="outline" class="w-full"><Archive />Archivieren</Button></Drawer.Trigger>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Willst du {username} wirklich archivieren?</Drawer.Title>
                        <Drawer.Description>{username} wird in dein Archiv verschoben.</Drawer.Description>
                    </Drawer.Header>
                    <Drawer.Footer>
                        <Button variant="secondary" class="bg-red-500 text-white"><Archive />Archivieren</Button>
                        <Drawer.Close>Abbrechen</Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
            </Drawer.Root>

            <!-- MUTE -->
            <Drawer.Root>
                <Drawer.Trigger><Button variant="outline" class="w-full"><MessageCircleOff />Stummschalten</Button></Drawer.Trigger>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Willst du {username} wirklich stummschalten?</Drawer.Title>
                        <Drawer.Description>Du wirst danach keine Benachrichtigungen von {username} mehr sehen.</Drawer.Description>
                    </Drawer.Header>
                    <Drawer.Footer>
                        <Button variant="secondary" class="bg-red-500 text-white"><MessageCircleOff />Stummschalten</Button>
                        <Drawer.Close>Abbrechen</Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
            </Drawer.Root>
            


            <Separator />



            <!-- BLOCK -->
            <Drawer.Root>
                <Drawer.Trigger><Button variant="secondary" class="bg-red-500 text-white w-full"><Ban />Blockieren</Button></Drawer.Trigger>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Willst du {username} wirklich blockieren?</Drawer.Title>
                        <Drawer.Description>Du wirst danach nicht mehr mit {username} schreiben können.</Drawer.Description>
                    </Drawer.Header>
                    <Drawer.Footer>
                        <Button variant="secondary" class="bg-red-500 text-white"><Ban />Blockieren</Button>
                        <Drawer.Close>Abbrechen</Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
            </Drawer.Root>

        </div>
    </Dialog.Content>

</Dialog.Root>