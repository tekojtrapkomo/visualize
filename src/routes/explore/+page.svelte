<script>
import { animate, stagger, inView } from "motion";
import Lazy from 'svelte-lazy';
export const instagramURL = (instagram) => {
    return `https://www.instagram.com/${instagram}`;
}
export let data;

export const imgURL = (collectionId, id, submission) => {
    return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${id}/${submission}`;
}
export const imgURLONE = (collectionId, id, bg) => {
    return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${id}/${bg}`;
}
import Countdown from "$lib/countdown.svelte";
import Login from '$lib/login.svelte';
	import { onMount } from "svelte";

    let showModal = {showmodalLogin: false};
    const handleLoginClick = () => {
        showModal.showmodalLogin = !showModal.showmodalLogin;
    };

    onMount(() => {
        animate('.topicoe', {opacity: [0, 1], y: [-20, 1]},{duration: 1})

        inView(".wq", () => {
            animate('.card', {opacity: [0, 1]},{delay: stagger(0.4), duration: 1})
        });

        const gridContainer = document.querySelector('.wq');
        const gridItems = [...gridContainer.children];

        gridContainer.innerHTML = '';
        gridItems.reverse().forEach(item => gridContainer.appendChild(item));
    });

    const imgInfoShow = () => {
        animate('.img-info', {opacity: [0, 1], y: [20, 0]},{duration: 0.4});
    }
</script>

<svelte:head>
    <title>VISUALIZE | EXPLORE</title>
</svelte:head>

<div class="wrapper-explore">
    <p class="topicoe">{data.topic[0].topicshow}</p>
    <div class="countdown">
        <Countdown content="explore"/>
    </div>
    {#if !data.user}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click|stopPropagation={handleLoginClick} class="login-modal1">SUBMIT YOUR WORK HERE</div>
    {:else}
    <a href="/submit" class="login-modal1">SUBMIT YOUR WORK HERE</a>
    {/if}
    <div class="bg-image" style="background: url({imgURLONE(data.topic[0]?.collectionId, data.topic[0]?.id, data.topic[0]?.bg)});         background-size: cover;
    background-position: top;
    background-repeat: no-repeat;"></div>
</div>
<div class="black-seminole">
    <div class="ww-main">
<aside class="ww">
    <p class="samesh">ALL TOPICS</p>
    {#each data.topic as topics}
        <ul>
            <li>{topics.topicshow}</li> 
        </ul>   
    {/each}
    </aside>
</div>
<div class="wq-main">
    <div class="wq">
    {#each data.gallery as gallery}
        <div class="card">
            <img on:mouseenter|stopPropagation|preventDefault={imgInfoShow} class="img" src={imgURL(gallery?.collectionId,gallery?.id, gallery?.submission)} alt="{gallery.title} by {gallery.user}">
            <div class="img-info">
            <div class="rainbow"></div>    
            <p class="img-title">{gallery.title}<span class="topicef">{gallery.expand.topicse.topicshow}</span></p>
            <p class="img-desc">{gallery.description}</p>
            <p class="img-username">Posted by: {gallery.expand.user.username}<a target="_blank" rel="noreferrer" href={instagramURL(gallery.expand.user.instagram)}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"></rect><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"></rect><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z"></path><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stopColor="#FD5"></stop><stop offset=".1" stopColor="#FD5"></stop><stop offset=".5" stopColor="#FF543E"></stop><stop offset="1" stopColor="#C837AB"></stop></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stopColor="#3771C8"></stop><stop offset=".128" stopColor="#3771C8"></stop><stop offset="1" stopColor="#60F" stopOpacity="0"></stop></radialGradient></defs></g></svg></a></p>
        </div>
        </div>
    {/each}
</div>  
</div>
</div>
<Login show = {showModal.showmodalLogin} />
<style>
    .rainbow{
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

    background-size: 150% 150%;
    -webkit-animation: gradient 6s ease infinite;
    -moz-animation: gradient 6s ease infinite;
    animation: gradient 6s ease infinite;
    height: 4px;
    }
    @-webkit-keyframes gradient {
    0%{background-position:0% 37%}
    50%{background-position:100% 200%}
    100%{background-position:0% 37%}
}
@-moz-keyframes gradient {
    0%{background-position:0% 37%}
    50%{background-position:100% 64%}
    100%{background-position:0% 37%}
}
@keyframes gradient {
    0%{background-position:0% 37%}
    50%{background-position:100% 64%}
    100%{background-position:0% 37%}
}
      .card {
    position: relative;
    transition: filter 0.25s ease;
  }
  .card .img-info {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .905);
    color: #fff;
  }

  .card:hover .img{
    filter: brightness(0.8);
  }
  .card:hover .img-info {
    display: block;
  }
    .img-title{
        font-family:'Grotesk-Bold', sans-serif;
        color: var(--off-white);
        font-size: 1.5rem;
        font-size: clamp(1.5rem, 0rem + 5vw, 2rem);
        text-transform: uppercase;
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding: 1rem;
        cursor: context-menu;

    }
    .img-desc{
        font-family: 'Grotesk-Reg', sans-serif;
        color: var(--off-white);
        font-size: 1rem;
        font-size: clamp(1rem, 0rem + 5vw, 1rem);
        padding: 0 1rem;
        cursor: context-menu;
    }
    .topicef{
        font-family: 'Grotesk-Bold', sans-serif;
        color: var(--off-white);
        font-size: 1rem;
        font-size: clamp(1rem, 0rem + 5vw, 1rem);
        text-transform: uppercase;
        border: 1px solid #f0ebe4;
        border-radius: 20px;
        padding: 0.5rem 1.5rem;
        cursor: context-menu;

    }
    .img-username{
        font-family: 'Grotesk-Bold', sans-serif;
        color: var(--off-white);
        font-size: 1rem;
        font-size: clamp(1rem, 0rem + 5vw, 1rem);
        text-transform: uppercase;
        display:flex;
        justify-content: space-between;
        margin-right: 1rem;
        padding: 1rem;
        cursor: context-menu;

    }
    .img {
        max-width: 100%;    
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1/1;
    }
    .black-seminole {
        display: flex;
        flex-direction: column;
    }
    .wq {
        width: 80%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-column-gap: 0;
        grid-row-gap: 0;
        background-color: #151515;
        z-index: 0;
    }
    .wq-main{
        background-color: #151515;
        }
    .ww {
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        align-items: center;
        color: whitesmoke;
        margin: 1rem auto;
        width: 80%;
        flex-wrap:wrap;
    }
    .samesh, .ww ul{
        border: 1px solid #f0ebe4;
        border-radius: 20px;
        padding: 0.5rem 1.5rem;
        color: #f0ebe4;
        list-style: none;
        height: 40px;  
        flex:1;
        text-align:center;
        display:flex;
        align-items:center;
        justify-content: center; 
        font-family: 'Grotesk-Bold', sans-serif;
        font-size: 0.8rem;
        font-size: clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem);
    }

    .ww-main{
        background-color: var(--dark-gray);
    }
    .wrapper-explore{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 70vh;
        user-select: none;
        color: whitesmoke;
        background-size: cover;
        background-position: top;
        z-index: -1;
    }
    .bg-image{
        height: 70vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        filter: brightness(0.8);
    }
    .topicoe{
        font-family: 'n27', sans-serif;
        font-size: 1rem;
        font-size: clamp(1rem, 0rem + 5vw, 6rem);
        text-transform: uppercase;
        background-color: #121212;
        padding: 0.5rem 2rem;
        z-index: -1;
        margin-top: 4rem;
    }
    .countdown{
        text-transform: uppercase;
        font-weight: lighter;
    }

    .login-modal1{
        background: none;
        cursor: pointer;
        text-decoration: none;
        font-family: 'Grotesk-Bold', sans-serif;
        color: #f0ebe4;

    }
</style>