<script>
    import { slide } from "svelte/transition";


    let showDisclaimer = true;


    function pressOk() {
    showDisclaimer = false;
    
    }
  </script>
  
  {#if showDisclaimer}
    <div transition:slide="{{ duration:200 }}" class="disclaimer-overlay">
        <div class="inner">
            <h1>
                'THIS WEBSITE IS RUN BY MONARK (NO PUN INTENDED)'
            </h1>
            <button on:click={pressOk}>OK</button>
        </div>
    </div>
{/if}
  <style>
    .disclaimer-overlay {
    position: absolute;
  background-color: greenyellow;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.inner{
    background-color: whitesmoke;
    color: black;
}
  </style>