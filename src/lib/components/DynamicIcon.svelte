<script>
  import { Icon } from "svelte-icons-pack";
  import { getIcon } from "$lib/utils";

  import Loader from "./Loader.svelte";

  /**
   * @typedef {Object} Props
   * @property {any} icon
   * @property {string} [size]
   */

  /** @type {Props} */
  let { icon, size = "4rem" } = $props();

  let iconPromise = getIcon(icon);
</script>

{#await iconPromise}
  <Loader />
{:then IconComponent}
  {#if IconComponent}
    <Icon src={IconComponent} {size} />
  {:else}
    <!-- Fallback for when the icon couldn't be loaded -->
    <small>Icon not found</small>
  {/if}
{:catch error}
  <small>Error loading icon: {error}</small>
{/await}
