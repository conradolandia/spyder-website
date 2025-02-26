<script>
  import BlogPage from "$lib/blocks/BlogPage.svelte";

    /**
   * @typedef {Object} Props
   * @property {import('./$types').PageData} data
   */

  /** @type {Props} */
  let { data } = $props();
</script>

<BlogPage {data} />
