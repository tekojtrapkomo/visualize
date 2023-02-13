<script>
    import '../app.css'
    import Login from '$lib/login.svelte';
    let showModal = { showmodalLogin: false };
    const handleLoginClick = () => {
        showModal.showmodalLogin = !showModal.showmodalLogin;
    };
    export let data;
    import { fly } from 'svelte/transition';

    let monarkShow = false;

    function monark() {
    monarkShow = !monarkShow;
    }
    import Headroom from "svelte-headroom";
</script>
<Headroom duration="350ms" offset={50} tolerance={5} >

<nav>
<div class="homepage">
    <a on:mouseenter|preventDefault={monark} on:mouseleave|preventDefault={monark} href="/">VISUALIZE</a>
    {#if monarkShow}
    <span transition:fly="{{ y:30, duration: 300 }}" class="monark">by MONARK™</span>
    {/if}
</div>
<div class="left">
<div class="button"><a href="/explore">Explore</a></div>
{#if !data.user}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click|stopPropagation={handleLoginClick} class="login-modal">Login</div>
{:else}
<div>
    <a href="/submit">Submit</a>
</div>
<div class="user-profile">
        <a href="/profile">{data.user.username}</a>
    </div>
    <div class="logout">
        <form action="/logout" method="POST">
            <button type="submit" class="logout">Logout</button>
        </form>
        </div>
{/if}
</div>

</nav>
</Headroom>

{#if !data.user}
<Login show = {showModal.showmodalLogin || {show: false}} />
{/if}
<slot/>

<style>
    .logout{
        background: none;
        cursor: pointer;
        text-decoration: none;
        font-family: 'Grotesk-Bold', sans-serif;
        color: #f0ebe4;

    }
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 5rem;
        background-color: #151515;
        z-index:99999;
    }
    nav a{
        color: #f0ebe4;
    }
    .left {
        display: flex;
        margin: 0 50px;
        gap: 40px;
        flex-wrap: wrap;
        align-items: center;
    }
    .homepage {
        margin: 0 50px;
        color: #f0ebe4;
    }

    .login-modal {
        font-family: 'Grotesk-Bold', sans-serif;
        color: #f0ebe4;
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
    }


    .button {
    align-items: center;
    display: inline-flex;
    font-family: 'Grotesk-Bold', sans-serif;
    transition: background-color .1s ease,color .1s ease;
    white-space: nowrap;
}

.monark{
    font-family: 'Grotesk-Bold', sans-serif;
    color: #f0ebe4;
}

.user-profile{
    text-transform: capitalize;
}
</style>