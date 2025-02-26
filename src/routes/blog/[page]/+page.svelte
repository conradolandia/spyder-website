<script>
  import { run } from 'svelte/legacy';

  import { _, json } from "svelte-i18n"

  import { metadata } from "$lib/store";
  import { siteUrl, ogImageBlog, config } from "$lib/config";

  import BlogPage from "$lib/blocks/BlogPage.svelte";

  
  /**
   * @typedef {Object} Props
   * @property {import('./$types').PageData} data
   */

  /** @type {Props} */
  let { data } = $props();

  let pageNum = $state(), totalPages = $state(), title = $state(), subtitle = $state(), description = $state(), keywords = $state(), author = $state();

  run(() => {
    pageNum = data.props.pageNum;
    totalPages = data.props.totalPages;
    title = $_('config.site.title');
    subtitle = $_('config.site.subtitle');
    description = $_('config.site.description');
    author = $_('config.site.author');
    keywords = config.site.keywords;

    metadata.setMetadata({
      title: `${title} | ${subtitle}`,
      description,
      keywords: keywords.join(", "),
      author,
      url: siteUrl,
      image: ogImageBlog,
    });
  });
</script>

<BlogPage {data} />
