<script>
    import { enhance } from '$app/forms';
    import Countdown from '$lib/countdown.svelte';
    export let data;

    const now = new Date();
    const sunday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - now.getDay()), 23, 0, 0);
    const sundayEnd = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate(), 24, 0, 0);

    const nextSunday = {
    start: sunday,
    end: sundayEnd
};

let showRules = false;

function toggleRules() {
    showRules = true;
  }
// 
let loading = false;
function submitForm() {
    loading = true;
}

let isButtonClicked = false;

function handleClick() {
    isButtonClicked = true;
}
</script>
<svelte:head>
    <title>VISUALIZE | SUBMIT</title>
</svelte:head>
<h1>
SUBMIT YOUR <span>ARTWORK</span>
</h1>
<div>
<p>This week's topic: <strong>{data.topic[0].topicshow}</strong></p>
<div id="countdown">
    <Countdown content="submit"/>
</div>
</div>
{#if sunday < now}
    <p>Sorry, submissions are closed for this week. Check back next Sunday!</p>
{:else}
    <p>Submit your artwork by <strong>{sunday.toLocaleString()}</strong> to be featured on the site!</p>
<form action="?/create" method="POST" enctype="multipart/form-data" use:enhance>
<div>
    <label for="Title">
        <input type="text" name="title" id="title" required aria-required="true"    >
    </label>
</div>
    <label for="description">
        <input type="text" name="description" id="description" required aria-required="true">
    </label>
<div>
    <label for="submission">
        <input type="file" name="submission" id="submission">
        <p>Supported file types: jpg, mp4, png, gif</p>
    </label>
</div>
<div>
    <!-- <label for="topicse">
        <select name="topicse" id="topicse">
            {#each data.topic as topics}
                <option value={topics.id}>{topics.topicshow}</option>
            {/each}
        </select>
    </label> -->
    <label for="topicse">
        <input  type="hidden" name="topicse" id="topicse" value={data.topic[0].id}>
    </label>
</div>
<div>
    <button on:click|stopPropagation={submitForm} on:mouseenter={toggleRules} on:mouseleave={toggleRules} type="submit">Submit</button>
    {#if loading}
    <p>Submitting...</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2"><path strokeDasharray="60" strokeDashoffset="60" strokeOpacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"></animate></path><path strokeDasharray="15" strokeDashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path></g></svg>
    {/if}
</div> 
</form>
{#if showRules}
<div>
    <p>Our community rules are simple.</p>
    <ul>
        <li>Be respectful.</li>
        <li>Be kind.</li>
        <li>Be creative.</li>
</div>
{/if}
{/if}

