<script>
export const instagramURL = (instagram) => {
    return `https://www.instagram.com/${instagram}`;
}
export let data;
export const imgURL = (collectionId, id, submission) => {
    return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${id}/${submission}`;
}

// let selected = 'all';
// const filterSelection = (e) => selected = e.target.dataset.name;
</script>


<div >
    <h1>explore page</h1>
    <p>This week's topic - <strong>{data.topic[0].topicshow}</strong></p>
    {#if !data.user}
    <form action="?/login" method="POST">
        <button type="submit">SUBMIT YOUR WORK HERE</button>
    </form>
    {:else}
    <a href="/submit">SUBMIT YOUR WORK HERE</a>
    {/if}
</div>
<div class="black-seminole">
<div class="ww">
    <p>ALL TOPICS</p>
    {#each data.topic as topics}
        <ul>
            <li>{topics.topicshow}</li> 
        </ul>
    {/each}
</div>



    <div class="wq" style="background-color: aqua;">
    {#each data.gallery as gallery}
        <div>
            <img class="img" src={imgURL(gallery?.collectionId,gallery?.id, gallery?.submission)} alt="{gallery.title} by {gallery.user}">
            <h2>{gallery.title}</h2>
            <p>{gallery.description}</p>
            <p>{gallery.expand.topicse.topicshow}</p>
            <p>{gallery.expand.user.username} <a href={instagramURL(gallery.expand.user.instagram)}>@{gallery.expand.user.instagram}</a></p>
        </div>
    {/each}
</div>  
</div>
<style>
    .img {
        max-width: 30%;
        object-fit: cover;
    }

    .black-seminole {
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
    }
    .wq {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }
    .ww {
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        align-items: center;
    }
</style>