<script lang="ts">
    let username = "hanspeter";
</script>

<div class="flex flex-col gap-5 px-7">
    <!--{#each users as user}
        <div class="flex gap-3 items-center relative">
            <img alt="profile picture for {user.uname}" class="rounded-full object-cover h-14 w-14" src={user.img_url}>

            <div class="flex flex-col gap-1 font-geist">
                <div class="text-base font-medium">
                    {user.uname}
                </div>
                <div class="text-sm text-gray-400 font-light">
                    je fais de baguette
                </div>
            </div>
            {#if users.indexOf(user)!=(users.length-1)}
                <div class="absolute bottom-0 bg-red h-3 w-screen left-0"></div>
            {/if}
        </div>
    {/each}-->
    <a class="flex gap-3 items-center relative" href={`/chat/${username}`} aria-label="go to chat">
        <img alt="profile for placeholder" class="rounded-full object-cover h-14 w-14" src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D">

        <div class="flex flex-col gap-1 font-geist">
            <div class="text-base font-medium">
                placeholder
            </div>
            <div class="text-sm text-gray-400 font-light">
                je fais de baguette
            </div>
        </div>
        <!--{#if users.indexOf(user)!=(users.length-1)}
            <div class="absolute bottom-0 bg-red h-3 w-screen left-0"></div>
        {/if}-->
    </a>
</div>