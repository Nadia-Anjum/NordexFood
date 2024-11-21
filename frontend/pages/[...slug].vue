<template>
  <div>
    <!-- Loop through components and render them dynamically -->
    <component v-for="(component, index) in pageData?.properties?.components?.items" :key="index" :is="is(component?.content?.contentType)" :breadcrumbs="pageData.breadcrumbs" :model="component?.content?.properties"></component>
  </div>
</template>

<script setup lang="ts">

import type { pageData } from '../types/pageData'

const store = pageStore();
const pageData: pageData = store.getPageData as unknown as pageData; // Get page data from store

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: pageData?.properties?.title ? pageData?.properties?.title : pageData?.name, // Set page title
  meta: [
    { name: 'description', content: pageData?.properties?.description }, // Set meta description
    { name: 'robots', content: 'noindex, nofollow' }, // Set robots meta tag
  ]
})
// Import components
const is = componentSwitch;
</script>