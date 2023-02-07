<script>
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

<p>Time left to submit: <strong>{days}d {hours}h {minutes}m {seconds}s</strong></p>
