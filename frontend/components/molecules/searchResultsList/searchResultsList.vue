<template>
  <ul class="list-none p-0 w-full text-left">
    <li v-for="result in results" :key="result.id" class="mb-2">
      <BaseLink :to="'/' + result.values.urlName" class="result-link">
        <h2 class="font-bold pl-12 pb-2 text-2xl sm:text-2xl pt-6">
          {{ result.values.nodeName }}
        </h2>
        <p class="truncate-2-lines pl-12 pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </BaseLink>

      <hr
        v-if="result.id !== results[results.length - 1].id"
        class="my-2 border-black w-full"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { SearchResult } from "~/types/search";

export default defineComponent({
  name: "SearchResultsList",
  props: {
    results: {
      type: Array as PropType<SearchResult[]>, // Array of search results
      required: true, // Prop is required
    },
  },
});
</script>

<style scoped>
.truncate-2-lines {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.result-link {
  text-decoration: none;
  color: inherit;
}

.result-link:hover {
  color: #a13535;
}
</style>
