<script>
export const instagramURL = (instagram) => {
    return `https://www.instagram.com/${instagram}`;
}
export let data;
console.log(data);
export const imgURL = (collectionId, id, submission) => {
    return `https://hissing-machine.pockethost.io/api/files/${collectionId}/${id}/${submission}`;
}
let ig = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="66" strokeDashoffset="66" d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;132"></animate></path><path strokeDasharray="26" strokeDashoffset="26" d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="26;0"></animate></path></g><circle cx="17" cy="7" r="1.5" fill="currentColor" fillOpacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"></animate></circle></svg>'
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
    <p>All topics</p>
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
            <p>{gallery.expand.user.username} <a href={instagramURL(gallery.expand.user.instagram)}>{gallery.expand.user.instagram}</a></p>
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
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
    }
    .ww {
        display: flex;
        flex-direction: column;
        justify-content: space-between; 
        align-items: center;
    }
</style>