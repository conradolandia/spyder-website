<!-- @migration-task Error while migrating Svelte code: Expected token ;
https://svelte.dev/e/expected_token -->
<script>
  import { onMount } from "svelte";

  import { Icon } from "svelte-icons-pack";
  import { LuChevronLeft, LuChevronRight } from "svelte-icons-pack/lu";

  import Loader from "./Loader.svelte";

  let imgAfter = $state(null);
  let imgBefore = $state(null);
  let isLoaded = $state(false);
  
  // Fixed offset instead of interactive
  let { before = "", after = "", alt = "" } = $props();
  
  // Simple load handler
  function handleLoad() {
    isLoaded = true;
  }

  onMount(() => {
    // Set a timeout to ensure isLoaded is set even if images don't trigger load event
    setTimeout(() => {
      isLoaded = true;
    }, 1000);
  });
</script>

<div class="image-compare overflow-hidden relative box-content h-full rounded-lg shadow-2xl">
  <div class="image-container">
    {#if after}
      <img
        {alt}
        bind:this={imgAfter}
        onload={handleLoad}
        src={after}
        class="block absolute inset-0 z-10 object-cover select-none w-full h-full"
      />
    {:else}
      <Loader />
    {/if}
  </div>

  <div class="image-container">
    {#if before}
      <img
        {alt}
        bind:this={imgBefore}
        onload={handleLoad}
        src={before}
        class="block absolute inset-0 z-20 object-cover select-none w-full h-full clip-half"
      />
    {:else}
      <Loader />
    {/if}
  </div>

  {#if isLoaded}
    <div class="divider"></div>
  {/if}
</div>

<style lang="postcss">
  .image-compare {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .image-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .clip-half {
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
  }
  
  .divider {
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background-color: white;
    z-index: 30;
  }
</style>
