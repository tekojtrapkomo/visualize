<script>
    export let data;
</script>
<svelte:head>
    <title>VISUALIZE | HOME</title>
</svelte:head>

{#if data.user}
<h1>WELCOME BACK TO VISUALIZE 3.0</h1>
<h1>Welcome <span>{data.user.username}</span></h1>
{:else}
<h1>WELCOME TO VISUALIZE</h1>
{/if}
<div class="image-container">
</div>
<style>
    h1 {
        padding: 20px;
    }
    img {
        max-width: 100%;
        object-fit: cover;
    }
</style>