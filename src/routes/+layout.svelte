<script>
    import '../app.css'
    import { navigating } from '$app/stores';
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
{#if $navigating}
<div class="loading">
</div>
{/if}
</nav>
</Headroom>

{#if !data.user}
<Login show = {showModal.showmodalLogin || {show: false}} />
{/if}
<slot/>

<style>
    .loading {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        padding-bottom: 3px;
        transition:all 0.3s ease;
        animation: loading 1s linear;
        background: linear-gradient(
        45deg,
        hsl(194, 100%, 50%) 0%,
        hsl(180, 100%, 50%) 11%,
        hsl(199, 100%, 27%) 22%,
        hsl(329deg 100% 36%) 33%,
        hsl(337deg 100% 43%) 44%,
        hsl(357deg 91% 59%) 56%,
        hsl(17deg 100% 59%) 67%,
        hsl(34deg 100% 53%) 78%,
        hsl(45deg 100% 50%) 89%,
        hsl(55deg 100% 50%) 100%
    );
    }

    @keyframes loading {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }
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