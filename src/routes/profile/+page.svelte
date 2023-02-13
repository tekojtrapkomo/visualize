<script>
    export let data;
</script>

<section class="profile-section">
    <div class="profile-section-wrapper">
        <div class="username-instagram">
    <div class="username">
        <p>Username: <span class="highlight-username">{data.user.username}</span></p>
        <form action="?/updateUser" method="POST">
                <input type="text" name="username" id="username" placeholder="New username" />
                <button class="button2" type="submit">Save</button>
        </form>
    </div>
    <div class="instagram">
        <p>Instagram: <span class="highlight-instagram">{data.user.instagram}</span></p>
        <form action="?/updateIg" method="POST">
            <input type="text" name="instagram" id="instagram" placeholder="New instagram address" />
            <button class="button2" type="submit">Save</button>
    </form>
    </div>
</div>
    <div class="email">
        <p class="p3">Email: {data.user.email}</p>
        <p class="highlight-email">
            Please contact our support to change your email address.
        </p>
    </div>
</div>
</section>

<style>
    .username, .email, .instagram{
        color: var(--off-white);
    }

    .profile-section {
        background-color: var(--dark-gray);
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .instagram p {
        font-family: 'Grotesk-Reg', sans-serif;
        font-size: 2rem;
    }
    .highlight-username {
  font-family: 'Grotesk-Bold', sans-serif;
  font-size: 2rem;
  color: var(--off-white);
    }
    .username p {
        font-family: 'Grotesk-Reg', sans-serif;
        font-size: 2rem;
    }
    .highlight-instagram {
  font-family: 'Grotesk-Bold', sans-serif;
  font-size: 2rem;
  color: var(--off-white);
    }

    .p3 {
        font-family: 'Grotesk-Reg', sans-serif;
        font-size: 1rem;
    }
    .highlight-email {
  font-family: 'Grotesk-Bold', sans-serif;
  font-size: 1rem;
  color: var(--off-white);
    }
    input {
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(107, 107, 107);
  font-size: 24px;
  width: 100%;
  padding: 0.4em 0;
  color: #fff;
  margin-right: 0.4em;
  transition: all 300ms ease-in-out;
  font-weight: lighter;
  font-family: 'Grotesk-Reg', sans-serif;
}
input:focus{
    border-bottom: 1px solid #e9e9e9;
}
input::placeholder{
  color: rgb(158, 158, 158);
  font-weight: lighter;
  font-family: 'Grotesk-Reg', sans-serif;
  font-size: 1.2rem;
}

.button2 {
  background-color: greenyellow;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 2em 0;
}

.button2:not(:disabled):hover,
.button2:not(:disabled):focus {
  outline: 0;
  background: rgb(136, 201, 38);
}

.button2:disabled {
  filter: saturate(0.2) opacity(0.5);
  -webkit-filter: saturate(0.2) opacity(0.5);
  cursor: not-allowed;
}
.username-instagram{
    display: flex;
    flex-direction: row;
    gap: 4rem;
}


</style>