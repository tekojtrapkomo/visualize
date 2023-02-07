<script>
    import { enhance } from '$app/forms';
    import Countdown from '$lib/countdown.svelte';
    export let data;
    import { slide } from 'svelte/transition';

    const now = new Date();
    const sunday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - now.getDay()), 23, 0, 0);
    const sundayEnd = new Date(sunday.getFullYear(), sunday.getMonth(), sunday.getDate(), 24, 0, 0);

    const nextSunday = {
    start: sunday,
    end: sundayEnd
};

let showRules = false;

function toggleRules() {
    showRules = !showRules;
  }
</script>

<h1>
SUBMIT YOUR <span>ARTWORK</span>
</h1>
<div>
<p>This week's topic: <strong>{data.topic[0].topicshow}</strong></p>
<div id="countdown">
    <Countdown/>
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
    <button on:mouseenter={toggleRules} on:mouseleave={toggleRules} type="submit">Submit</button>
</div>
</form>
{#if showRules}
<div transition:slide>
    <p>Our community rules are simple.</p>
    <ul>
        <li>Be respectful.</li>
        <li>Be kind.</li>
        <li>Be creative.</li>
</div>
{/if}
{/if}
