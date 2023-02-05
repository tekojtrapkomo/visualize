<script>
    import '../app.css'
    import Login from './login.svelte';
    let showModal = { showmodalLogin: false };
    import { getImageURL } from '$lib/setting.js';

    const handleLoginClick = () => {
        showModal.showmodalLogin = !showModal.showmodalLogin;
    };
    export let data;
    
</script>
<div class="homepage"><a href="/">VISUALIZE</a></div>
<div class="explore"><a href="/explore">Explore</a></div>
{#if !data.user}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click|stopPropagation={handleLoginClick} class="login-modal">LOGIN</div>
<Login show = {showModal.showmodalLogin || {show: false}} />
{:else}
<div class="logout">
<form action="/logout" method="POST">
    <button type="submit" class="w-full text-start">Logout</button>
</form>
</div>
<div class="user-profile">
        <a href="/profile"><img
            src={data.user?.avatar
                ? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
                : `https://ui-avatars.com/api/?name=${data.user?.name}`}
            alt="User avatar"
        /></a>
    </div>
{/if}



<slot/>

<style>
    .login-modal, .explore, .logout {
        padding: 10px;
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 5px;
        cursor: pointer;
        width: 5vw;
        text-align: center;
    }

    
</style>