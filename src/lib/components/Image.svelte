<script>
  import { colourScheme } from '$lib/store';
  import Loader from "./Loader.svelte";

  /**
   * @typedef {Object} Props
   * @property {string} [imgSrc]
   * @property {string} [imgSrcDark]
   * @property {string} [imgAlt]
   * @property {string} [title]
   * @property {boolean} [blur]
   * @property {boolean} [shadow]
   * @property {boolean} [rounded]
   * @property {boolean} [contain]
   * @property {boolean} [figure]
   * @property {string} [classes]
   * @property {string} [caption]
   */

  /** @type {Props} */
  let {
    imgSrc = "",
    imgSrcDark = "",
    imgAlt = "",
    title = "",
    blur = false,
    shadow = false,
    rounded = true,
    contain = false,
    figure = true,
    classes = "",
    caption = ""
  } = $props();

  let currentImgSrc = $derived($colourScheme === 'dark' && imgSrcDark ? imgSrcDark : imgSrc);
</script>

{#if currentImgSrc}
  {#if figure}
    <figure class="grid grid-flow-col justify-center items-center">
      <img
        src={currentImgSrc}
        class:rounded-md={rounded}
        class:shadow-lg={shadow}
        class:blur-md={blur}
        class:shadow-md={shadow}
        class:object-contain={contain}
        class:object-center={contain}
        class={classes}
        alt={imgAlt || title || ""}
        loading="lazy"
      />
      {#if caption}
        <figcaption>{caption}</figcaption>
      {/if}
    </figure>
  {:else}
    <img
      src={currentImgSrc}
      class:rounded-md={rounded}
      class:shadow-lg={shadow}
      class:blur-md={blur}
      class:shadow-md={shadow}
      class:object-contain={contain}
      class:object-center={contain}
      class={classes}
      alt={imgAlt || title || ""}
      loading="lazy"
    />
  {/if}
{:else}
  <Loader />
{/if}
