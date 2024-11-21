<template>
  <div class="p-5 pt-16">
    <template v-if="errorMessage">
      <p class="error-message">{{ errorMessage }}</p>
    </template>
    <template
      v-else-if="
        filteredResults && filteredResults.length > 0">
      <button
        @click="showAllResults"
        class="mb-2 p-2 px-7 text-white rounded self-start"
        style="background-color: #a13535"
      >
        All Results ({{ filteredResults.length }})
      </button>
      <hr
        v-if="filteredResults.length > 0"
        class="w-full mt-10 mb-2 border-black"
      />
      <SearchResultsList :results="paginatedResults"></SearchResultsList>
      <hr
        v-if="filteredResults.length > 0"
        class="w-full mb-2 border-black"
      />
      <div class="pagination-controls" v-if="filteredResults.length > pageSize">
        <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
        <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      </div>
    </template>
    <template v-else>
      <p class="error-message">No results found.</p>
    </template>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed } from "vue";
import type { SearchResults } from "~/types/search";

export default {
  name: "SearchResult",
  setup() {
    const searchQuery = ref(""); // Store search query
    const results = ref({} as SearchResults); // Store search results
    const currentPage = ref(1); // Track current page
    const pageSize = 5; // Number of results per page
    const config = useRuntimeConfig(); // Get runtime config
    const errorMessage = ref(""); // Store error message

    const isDev = computed(() => config.public?.isDev); // Check if in development mode
    const baseUrl = computed(() => isDev.value == "true" ? "" : config.public?.imageBaseUrl); // Compute base URL

    const filteredResults = computed(() => {
      if (!searchQuery.value) {
        return results.value.searchResults;
      }
      return results.value.searchResults.filter(result =>
        result.values.nodeName.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const paginatedResults = computed(() => {
      const start = (currentPage.value - 1) * pageSize;
      const end = start + pageSize;
      return filteredResults.value.slice(start, end); // Get paginated results
    });

    const totalPages = computed(() => {
      return Math.ceil(filteredResults.value.length / pageSize); // Compute total pages
    });

    const showAllResults = () => {
      searchQuery.value = ""; // Clear search query
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++; // Go to next page
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--; // Go to previous page
      }
    };

    // Fetch search results
    onMounted(async () => {
      const route = useRoute();
      const query = route.query.q || ""; // Get query from route

      results.value = (await $fetch(
        baseUrl.value + `/umbraco/api/SearchResultApi/Search?query=${query}&pageSize=12`
      )) as SearchResults; // Fetch

      if (!query) {
        errorMessage.value = ""; // Clear error message if query is empty
      } else if (!results.value.searchResults.length) {
        errorMessage.value = "No results found."; // Set error message if no results
      }
    });

    return {
      searchQuery,
      showAllResults,
      results,
      filteredResults,
      paginatedResults,
      currentPage,
      totalPages,
      nextPage,
      prevPage,
      pageSize,
      errorMessage,
    };
  },
};
</script>

<style scoped>
.placeholder-left::placeholder {
  text-align: left;
}
.pagination-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.error-message {
  color: #A13535;
  font-weight: bold;
}
</style>