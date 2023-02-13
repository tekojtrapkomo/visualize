<script>
    export let data;
	import { animate, stagger } from 'motion';
	import { onMount } from 'svelte';

    onMount(()=>{
        animate('.sticker1', {opacity: [0, 1], y: [-20, 0]},{duration: 1, transformOrigin: '50% 50%'}
		)
        animate('.login', {opacity: [0, 1], y: [100, 0]},{duration: 0.9, delay: stagger(0.3)});
        animate('.background-trail', {opacity: [0, 0.5]},{duration: 0.9, delay: 0.5});
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
        animate(btns, {scale: 1.08, zIndex: 55, cursor: 'pointer'},{duration: 0.2,easing: "ease" }
    )};

    const btnsHoverOut = (e) => {
        btns = e.target;
        animate(btns, {scale: 1, zIndex: 0},{duration: 0.15, easing: "ease" }
    )};

</script>
<svelte:head>
    <title>Visualize | Home</title>
</svelte:head>

<section id="home">

    <div class="background-trail"></div>
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
<object aria-label="sticker1" class="sticker1">
    <img on:mouseenter|preventDefault={iconHover} on:mouseleave|preventDefault={iconHoverOut} src="/11.svg" alt="Sticker" width="250" height="250">
</object>
</section>
<style>
        .background-trail{
        opacity: 1; filter: blur(100px) brightness(2); border-radius: 9999px;
        height:50vh;
        width: 70vw;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) skew(10deg, 0deg);
        pointer-events: none;
    } 
    .sticker1{
        position: absolute;
        bottom: 0;
        right: 0;
        user-select: none;
        cursor: pointer;
        z-index: 2;
    }

    .homeo{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        background-color: #121212;
        user-select: none;
        overflow: hidden;
    }
    .welcome-1{
        font-family: 'Grotesk-Bold', sans-serif;
        font-size: 2rem;
        font-size: clamp(2rem, 1.1rem + 4.5vw, 6.5rem);
        color: #f0ebe4;
        z-index: 2;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .gologin{
        background-color: lightcoral;
        padding: 1px 18px;
        border-radius: 20px;
        font-family: 'Grotesk-Medium', sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        height: 40px;
        border: 1px solid #151515;

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
        border: 1px solid #151515;
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
        border: 1px solid #151515;
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
        border: 1px solid #151515;
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
        z-index: 2;
    }
    .greeting{
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>