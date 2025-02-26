<script>
  import { _, json, isLoading } from "svelte-i18n";
  import { onMount } from "svelte";

  import { osStore } from "$lib/store";
  import { config } from "$lib/config";

  import Vanta from "$lib/components/Vanta.svelte";
  import Button from "$lib/components/Button.svelte";
  import ImageCompare from "$lib/components/ImageCompare.svelte";
  import Divider from "$lib/components/Divider.svelte";
  import Loader from "$lib/components/Loader.svelte";

  let {
    id = "",
    classes = "",
    divider = false,
    buttons = $bindable([])
  } = $props();

  // Initialize with empty objects to prevent undefined errors
  let heroContent = $state({ title: "", description: "" });
  let heroImages = $state({ dark: "", light: "" });
  let githubButton = $state({});
  let githubButtonTranslation = $state({});
  let translatedGithubButton = $state({});
  let unsubscribeOs = $state();
  let dataLoaded = $state(false);
  let showImageCompare = $state(true);

  // Load content data
  $effect(() => {
    try {
      // Get hero content
      heroContent = $json("config.site.heroContent") || { title: "", description: "" };
      
      // Get hero images
      if (config.site && config.site.heroImages) {
        heroImages = {
          dark: config.site.heroImages.dark || "",
          light: config.site.heroImages.light || ""
        };
      }
      
      // Get GitHub button
      if (config.site && config.site.githubButton) {
        githubButton = config.site.githubButton;
        githubButtonTranslation = $json("config.site.githubButton") || {};
        translatedGithubButton = { ...githubButton, ...githubButtonTranslation };
      }

      // Mark data as loaded
      dataLoaded = true;
    } catch (error) {
      console.error("Error loading hero content:", error);
      dataLoaded = true; // Still mark as loaded to avoid infinite loading
    }
  });

  // Handle OS store subscription
  $effect(() => {
    unsubscribeOs = osStore.subscribe((data) => {
      if (!data.loading && !$isLoading) {
        try {
          const translatedOsButtons = data.osButtons.map((button) => ({
            ...button,
            text: `${$_("download.button.message")} ${button.text}`,
          }));
          buttons = [...translatedOsButtons, translatedGithubButton];
        } catch (error) {
          console.error("Error processing OS buttons:", error);
        }
      }
    });
  });

  // Add error handling for image compare
  function handleImageError() {
    console.error("Error with image compare component");
    showImageCompare = false;
  }

  onMount(() => {
    // Set a timeout to hide the image compare if it causes issues
    const timeout = setTimeout(() => {
      if (!dataLoaded) {
        console.warn("Data loading timeout - hiding image compare");
        showImageCompare = false;
        dataLoaded = true;
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
      if (unsubscribeOs) unsubscribeOs();
    };
  });
</script>

<section {id} class="mt-20 {classes}">
  <Vanta />
  <div
    class="relative
    flex
    flex-col
    items-center
    gap-8
    px-8
    xl:max-w-6xl
    mx-auto
    hero-content-container"
  >
    <h1
      class="tracking-tight
      text-4xl
      md:text-5xl
      xl:text-7xl
      font-extralight
      text-gray-500
      dark:text-mine-shaft-300
      text-center"
    >
      {heroContent.title}
    </h1>
    <p class="font-light md:text-lg xl:text-xl text-center">
      {heroContent.description}
    </p>
    {#if buttons.length > 0}
      <div class="grid grid-flow-row md:grid-flow-col gap-4 items-center">
        {#each buttons as button}
          <Button
            highlight={button.highlight}
            icon={button.icon}
            text={button.text}
            href={button.href}
          />
        {/each}
      </div>
    {/if}
  </div>

  <div class="container aspect-video py-5 mt-16">
    {#if dataLoaded && heroImages?.dark && heroImages?.light && showImageCompare}
      <div class="image-compare-wrapper">
        <ImageCompare 
          before={heroImages.dark} 
          after={heroImages.light} 
          alt="Spyder IDE theme comparison"
        />
      </div>
    {:else if !dataLoaded}
      <div class="loader-wrapper flex items-center justify-center h-full">
        <Loader />
      </div>
    {:else}
      <!-- Fallback to simple images if the compare component fails -->
      <div class="fallback-images grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="fallback-image">
          <img 
            src={heroImages?.dark || ""} 
            alt="Spyder IDE dark theme" 
            class="rounded-lg shadow-lg w-full h-auto"
          />
          <p class="text-center mt-2 text-sm">Dark Theme</p>
        </div>
        <div class="fallback-image">
          <img 
            src={heroImages?.light || ""} 
            alt="Spyder IDE light theme" 
            class="rounded-lg shadow-lg w-full h-auto"
          />
          <p class="text-center mt-2 text-sm">Light Theme</p>
        </div>
      </div>
    {/if}
  </div>

  {#if divider}
    <Divider stroke={true} />
  {/if}
</section>

<style>
  .image-compare-wrapper {
    width: 100%;
    height: 100%;
    min-height: 300px;
  }
  
  .loader-wrapper {
    min-height: 300px;
  }
  
  .fallback-images {
    min-height: 300px;
  }
</style>

