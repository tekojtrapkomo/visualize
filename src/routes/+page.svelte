<script>
    export let data;
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';

    onMount(()=>{
        animate('.sticker1', {opacity: [0, 1], y: [-20, 0]},{duration: 1, transformOrigin: '50% 50%'}
		)
        animate('.login', {opacity: [0, 1], y: [100, 0]},{duration: 0.9, delay: stagger(0.3)})
    })

    const iconHover = () => {
        animate('.sticker1', {y: -20},{duration: 1 }
    )};
    const iconHoverOut = () => {    
        animate('.sticker1', {y: 0},{duration: 1 }
    )}; 

    let btns;

    const btnsHover = (e) => {
        btns = e.target;
        animate(btns, {scale: 1.08, zIndex: 55, border: '1px solid whitesmoke'},{duration: 0.3,easing: "ease-in-out" }
    )};

    const btnsHoverOut = (e) => {
        btns = e.target;
        animate(btns, {scale: 1, zIndex: 0, border: 'none'},{duration: 0.3, easing: "ease-in-out" }
    )};
</script>
<svelte:head>
    <title>VISUALIZE | HOME</title>
</svelte:head>
<section id="home">
    <div class="homeo">
        <div class="greeting">
{#if data.user}
<p class="welcome-1">САЙН УУ <span class="name-gradient">{data.user.username}</span></p>
{:else}
<p class="welcome-1">WELCOME TO VISUALIZE</p>
{/if}
</div>
<div class="login">
    <p on:mouseenter={btnsHover} on:mouseleave={btnsHoverOut} bind:this={btns} class="gologin">
        submit your work
    </p>
    <p on:mouseenter={btnsHover} on:mouseleave={btnsHoverOut} bind:this={btns} class="exploring">
        or just exploring the site?
    </p>
</div>
    <div class="login">
    <p on:mouseenter={btnsHover} on:mouseleave={btnsHoverOut} bind:this={btns} class="headline">
        need to contact us?
    </p>
    <p on:mouseenter={btnsHover} on:mouseleave={btnsHoverOut} bind:this={btns} class="headline1">
        what's this website for?
    </p>
</div>
</div>
<div class="sticker1">
    <img on:mouseenter|preventDefault={iconHover} on:mouseleave|preventDefault={iconHoverOut} src="/11.svg" alt="Sticker">
</div>
<div class="bg-grid"></div>
</section>
<style>
    .sticker1{
        position: absolute;
        bottom: 20px;
        right: 20px;
        transform: scaleY(0.5);
        user-select: none;
        cursor: pointer;
    }

    .homeo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        background-color: #151515;
        user-select: none;
        overflow: hidden;
    }
    .welcome-1{
        font-family: 'Grotesk-Bold', sans-serif;
        font-size: 2rem;
        font-size: clamp(2rem, 1.1rem + 4.5vw, 6.5rem);
        color: white;
        z-index: 2;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
    }
    .gologin{
        background-color: lightcoral;
        padding: 1px 18px;
        border-radius: 20px;
        font-family: 'Grotesk-Medium', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        height: 40px;
    }
    .exploring{
        background-color: greenyellow;
        padding: 1px 10px;
        border-radius: 20px;
        font-family: 'Grotesk-Medium', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        height: 40px;
        flex-grow: 1;
    }
    .headline{
        background-color: gold;
        padding: 1px 10px;
        border-radius: 20px;
        font-family: 'Grotesk-Medium', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        flex-grow: 1;
        height: 40px;
    }
    .headline1{
        background-color: hotpink;
        padding: 1px 10px;
        border-radius: 20px;
        font-family: 'Grotesk-Medium', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        height: 40px;
        flex-grow: 1;

    }
    .login{
        display: flex;
        width: 60%;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        text-align: center;
        margin: 5px 0;
    }
    .greeting{
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .name-gradient{
        background: linear-gradient(to left, #76b1ff, #40f2ec, #add2ed, #ffb2ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    background-size: 150% 150%;
    }
</style>