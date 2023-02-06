<script>
export let data;
console.log(data);
</script>


<div >
    <h1>explore page</h1>
    <p>This week's topic - {data.topic[0].topic}</p>
</div>
<div>
    <p>View all previous topics</p>
    {#each data.topic as topics}
        <ul>
            <li>{topics.topic}</li>
        </ul>
    {/each}
</div>