<script>
    export let data;
</script>


{#if data.user}
<h1>WELCOME BACK TO VISUALIZE 3.0</h1>
<h1>Welcome <span>{data.user.username}</span></h1>
{:else}
<h1>WELCOME TO VISUALIZE</h1>
{/if}
<div class="image-container">
<img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/82917d151228255.6307efc0d9717.jpeg" alt="">
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