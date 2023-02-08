<script>
    export let data;
</script>
<svelte:head>
    <title>VISUALIZE | HOME</title>
</svelte:head>

{#if data.user}
<div class="threeo">
<h1>WELCOME BACK TO VISUALIZE 3.0</h1>
</div>
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
    /* img {
        max-width: 100%;
        object-fit: cover;
    } */

    .threeo {
    border-radius: 8px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    top: -1px;
    background: conic-gradient(from 180deg at 50% 50%,#e8515c 0deg,#fe6ebd 45deg,#5cadfe 90deg,#75f5d8 150deg,#fdf175 225deg,#fe8564 290deg,#e8515c 1turn);
    }
</style>