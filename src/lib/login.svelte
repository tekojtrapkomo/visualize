<script>
    import { fade } from "svelte/transition";
    export let show = false;
    import { onMount } from "svelte";
    const pressX = () => {
        show = false;
    }
    const escape = (event) => {
      if (event.key === 'Escape') {
        show = false;
      }
    }
    let showConfirm = false;
    const showConfirmSection = () => {
      setTimeout(() => {
        showConfirm = true;
      }, 1000);
    }
    onMount(() => {
      window.addEventListener('keydown', escape);

    });

</script>
  
  {#if show}

    <div on:keyup={escape} transition:fade="{{ duration:200 }}" class="modal-overlay">
      <button class="close" on:click|preventDefault={pressX}>X</button>
      <div class="modal-content-login">
        <h3>Login</h3>
	<form class="loginn" action="?/login" method="POST">
			<label for="email">
        <input type="email" name="email" placeholder="E-Mail" autocomplete="off"/>
			</label>
			<label for="password">
        <input type="password"  name="password" placeholder="Password" autocomplete="off" />
			</label>
			<button type="submit" class="button2">Login</button>
      </form>
      </div>
      <div class="or">
        <p class="orp">OR</p>
      </div>
      <div class="modal-content-register">
        <h3>Register</h3>
        <form action="?/register" method="POST">
          <label for="email">
            <input type="email" name="email" placeholder="Email" autocomplete="off" />
          </label>
          <label for="name">
            <input type="text" name="name" placeholder="Username" autocomplete="off" />
          </label>
          <label for="instagram">
            <input type="text" name="instagram" placeholder="Enter your instagram" autocomplete="off" />
          </label>
          <label for="password">
            <input type="password" autocomplete="off" name="password" placeholder="Password" />
          </label>
          <label for="passwordConfirm">
            <input type="password" name="passwordConfirm" placeholder="Confirm Password" autocomplete="off" />
          </label>
          <button class="button2" on:click={showConfirmSection} type="submit">Submit</button>
          {#if showConfirm}
          <p>Please confirm your e-mail address.</p>
          {/if}
        </form>
      </div>
    </div>
  {/if}

  <style>
    .modal-overlay {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: rgba(0, 0, 0, 0.6); */
  background: rgba(0, 0, 0, 0.596); border: 0.5px solid rgba(255, 255, 255, 0.219); -webkit-backdrop-filter: blur(50px); backdrop-filter: blur(50px);
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  z-index: 3;
  height: 60%;
  width: 70%;
  cursor: context-menu;
}
.modal-content-login{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  color: whitesmoke;
  margin: 0 5em;
}
.modal-content-register{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  color: whitesmoke;
  margin: 0 5em;
}
.modal-content-login h3{
  font-size: 3rem;
  font-family: 'Grotesk-Reg', sans-serif;
}
.modal-content-register h3{
  font-size: 3rem;
  font-family: 'Grotesk-Reg', sans-serif;
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  border: none;
  color: #121212;
  padding: 1em 1em;
  border-radius: 50%;
  z-index: 2;
  cursor: pointer;
}


  input {
  background: none;
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(107, 107, 107);
  font-size: 24px;
  padding: 0.4em;
  width: 100%;
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
  color: rgb(197, 197, 197);
  font-weight: lighter;
  font-family: 'Grotesk-Reg', sans-serif;
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
.orp {
  font-size: 2rem;
  font-family: 'Grotesk-Reg', sans-serif;
  color: whitesmoke;
}
.or{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;
}
  </style>