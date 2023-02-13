<script>
    export let content;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const countDown = () => {
        const now = new Date();
        const sunday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - now.getDay()), 23, 0, 0);
        const diff = sunday.getTime() - now.getTime();

        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((diff % (1000 * 60)) / 1000);
    };

    setInterval(countDown, 1000);
</script>

{#if content === "submit"}
<p class="ppp">Time left to submit: {days}d {hours}h {minutes}m {seconds}s</p>
{/if}

{#if content === "explore"}
<p class="pp">Next topic in:{days}d {hours}h {minutes}m {seconds}s</p>
{/if}

<style>
    .pp {
        font-size: 1.5rem;
        color: #fff;
        text-align: center;
        margin: 1rem 0;
        font-family: 'Grotesk-Reg', sans-serif;
        letter-spacing: 1px;
    }
    .ppp {
        font-size: 1.5rem;
        margin: 1rem 0;
        font-family: 'Grotesk-Reg', sans-serif;
        letter-spacing: 1px;
    }
</style>