<script>
  import { run } from 'svelte/legacy';

  import { _, isLoading } from "svelte-i18n";
  import { onMount } from "svelte";

  import { randomId } from "$lib/utils";
  import { colourScheme, osStore } from "$lib/store";

  import ContentSection from "$lib/components/ContentSection.svelte";
  import MediaSection from "$lib/components/MediaSection.svelte";
  import Divider from "$lib/components/Divider.svelte";
  import Image from "$lib/components/Image.svelte";

  /**
   * @typedef {Object} Props
   * @property {any} [id]
   * @property {boolean} [columns]
   * @property {boolean} [border]
   * @property {string} [videoId]
   * @property {any} [videoSources]
   * @property {any} [videoPoster]
   * @property {any} [imgSrc]
   * @property {string} [imgLink]
   * @property {string} [imgClasses]
   * @property {string} [imgAlt]
   * @property {string} [caption]
   * @property {any} [tabs]
   * @property {any} [buttons]
   * @property {boolean} [boxed]
   * @property {boolean} [divider]
   * @property {string} [title]
   * @property {string} [classes]
   * @property {string} [background]
   * @property {string} [backgroundDark]
   * @property {string} [content]
   * @property {string} [extraContent]
   * @property {string} [extraImage]
   * @property {string} [extraImageAlt]
   * @property {string} [extraImageLink]
   * @property {boolean} [innerColumns]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let {
    id = randomId(),
    columns = true,
    border = false,
    videoId = "",
    videoSources = undefined,
    videoPoster = undefined,
    imgSrc = $bindable(undefined),
    imgLink = "",
    imgClasses = "",
    imgAlt = "",
    caption = "",
    tabs = undefined,
    buttons = $bindable(undefined),
    boxed = false,
    divider = false,
    title = "",
    classes = "",
    background = "",
    backgroundDark = "",
    content = "",
    extraContent = "",
    extraImage = "",
    extraImageAlt = "",
    extraImageLink = "",
    innerColumns = false,
    children
  } = $props();

  let style = $state("");
  let mobile = $state(false);
  let unsubscribeOs = $state();
  let resizeHandler;

  const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = window.setTimeout(later, wait);
    };
  };

  let currentBg =
    $derived($colourScheme === "dark" && backgroundDark ? backgroundDark : background);

  run(() => {
    style =
      mobile && !currentBg
        ? ""
        : currentBg
          ? `background-image: url(${currentBg});`
          : "";
  });

  run(() => {
    if (buttons && imgSrc) {
      unsubscribeOs = osStore.subscribe((data) => {
        if (!data.loading && !$isLoading) {
          const translatedOsButtons = data.osButtons.map((button) => ({
            ...button,
            text: `${$_("download.button.message")} ${button.text}`,
          }));
          buttons = [...translatedOsButtons];
          imgSrc = `/assets/media/${data.os}.webp`;
        }
      });
    }
  });

  onMount(() => {
    resizeHandler = debounce(() => {
      mobile = window.innerWidth < 768;
    }, 250);

    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => {
      if (resizeHandler) window.removeEventListener("resize", resizeHandler);
      if (unsubscribeOs) unsubscribeOs();
    };
  });
</script>

<section
  class="md:bg-contain md:bg-no-repeat md:bg-origin-center md:bg-center"
  {id}
  {style}
>
  {#if title}
    <h1
      class={`text-4xl font-semibold tracking-tight max-w-2xl px-8 mx-auto text-center text-red-berry-900 dark:text-neutral-400
        ${!boxed ? "lg:mb-24" : "lg:mb-8"}`}
    >
      {@html title}
    </h1>
  {/if}

  <div
    class={`mx-auto grid gap-y-16 lg:gap-y-8 px-8 ${classes}
      ${!boxed ? "py-8 max-w-screen-lg 2xl:max-w-screen-xl" : "max-w-screen-md"}
      ${columns ? "gap-x-8 lg:gap-x-16 xl:gap-x-32 lg:grid-cols-10" : ""}
      ${border ? "border border-mine-shaft-200 dark:border-mine-shaft-800" : ""}`}
  >
    {#if content || buttons}
      <ContentSection {content} {buttons} {columns}>
        {@render children?.()}
      </ContentSection>
    {/if}

    {#if videoId || videoSources || tabs || imgSrc || innerColumns}
      <MediaSection
        {columns}
        {videoId}
        {videoSources}
        {videoPoster}
        {imgSrc}
        {imgLink}
        {imgAlt}
        {imgClasses}
        {caption}
        {tabs}
        {innerColumns}
      />
    {/if}
  </div>

  {#if extraContent}
    <div
      class={`text-center max-w-2xl mx-auto px-8 mt-8 prose prose-h2:text-xl prose-headings:font-light
              prose-headings:tracking-tight prose-headings:text-gray-700 prose-headings:dark:text-neutral-300
              prose-p:font-light prose-p:text-base prose-p:text-gray-700 prose-p:dark:text-gray-300
              ${columns ? "order-first" : ""}`}
    >
      {#if typeof extraContent !== "object"}
        {#if extraContent}
          {@const SvelteComponent = null}
          <SvelteComponent />
        {/if}
      {:else}
        {#if extraContent.title}
          {#if extraContent.titleTag}
            <svelte:element this={extraContent.titleTag}>
              {extraContent.title}
            </svelte:element>
          {:else}
            <h2>{extraContent.title}</h2>
          {/if}
        {/if}
        {#if extraContent.text}
          {@html extraContent.text}
        {/if}
      {/if}
    </div>
  {/if}

  {#if extraImage}
    <div
      class={`col-span-10 text-center px-8 mt-8 mb-16 ${!columns ? "max-w-2xl mx-auto" : "max-w-full"}`}
    >
      {#if extraImageLink}
        <a href={extraImageLink} target="_blank" rel="noopener noreferrer">
          <Image figure={false} imgSrc={extraImage} imgAlt={extraImageAlt} />
        </a>
      {:else}
        <Image figure={false} imgSrc={extraImage} imgAlt={extraImageAlt} />
      {/if}
    </div>
  {/if}

  {#if divider}
    <Divider stroke={true} />
  {/if}
</section>
