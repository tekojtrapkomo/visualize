<script>
    import { fade } from "svelte/transition";
    export let show = false;
    export let form;
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
      <div class="modal-content-login">
        <button on:click|preventDefault={pressX}>X</button>
        <h3>Login</h3>
	<form action="?/login" method="POST">
			<label for="email">
				<span class="label-text">Email</span>
			</label>
			<input type="email" name="email"/>
			<label for="password">
				<span class="label-text">Password</span>
			</label>
			<input type="password" autocomplete="on" name="password" class="input input-bordered w-full max-w-md" />
			<button type="submit" class="btn btn-primary w-full">Login</button>
      {#if form?.notVerified}
        <p>Please verify your email</p>
      {/if}
      </form>
      </div>
      <div class="modal-content-register">
        <button on:click|preventDefault={pressX}>X</button>
        <h3>Register</h3>
        <form action="?/register" method="POST">
          <label for="email">
            <input type="email" name="email" placeholder="Email" />
          </label>
          <label for="name">
            <input type="text" name="name" placeholder="Username" />
          </label>
          <label for="instagram">
            <input type="text" name="instagram" placeholder="Enter your instagram" />
          </label>
          <label for="password">
            <input type="password" autocomplete="on" name="password" placeholder="Password" />
          </label>
          <label for="passwordConfirm">
            <input type="password" name="passwordConfirm" placeholder="Password" />
          </label>
          <button on:click={showConfirmSection} type="submit">Submit</button>
          {#if showConfirm}
          <p>Please confirm your password</p>
          {/if}
        </form>
      </div>
    </div>
  {/if}

  <style>
    .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgba(0, 0, 0, 0.6); */
  background: rgba(255, 255, 255, 0.15); border: 0.5px solid rgba(255, 255, 255, 0.14); -webkit-backdrop-filter: blur(50px); backdrop-filter: blur(50px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

  </style>