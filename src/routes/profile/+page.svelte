<script>
    export let data;


</script>

<section>
    <h1>Profile</h1>
    <div class="username">
        <p>Username: {data.user.username}</p>
        <form action="?/updateUser" method="POST">
                <input type="text" name="username" id="username" placeholder="New username" />
                <button type="submit">Save</button>
        </form>
    </div>
    <div class="instagram">
        <p>Instagram: {data.user.instagram}</p>
        <form action="?/updateIg" method="POST">
            <input type="text" name="instagram" id="instagram" placeholder="New instagram address" />
            <button type="submit">Save</button>
    </form>
    </div>
    <div class="email">
        <p>Email: {data.user.email}</p>
        <p>
            Please contact our support to change your email address.
        </p>
    </div>
</section>

<style>
    .username, .email, .instagram{
        display: block;
    }
</style>