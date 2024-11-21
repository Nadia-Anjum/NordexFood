<template>
  <div class="input-container flex items-center relative mt-5">
    <input
      type="text"
      placeholder="What are you searching for?"
      v-model="searchQuery"
      class="search-input w-full p-2 pr-10 text-lg border rounded"
      ref="searchInput"
      @keydown.enter="handleSearch"/>
    <div
      class="input-search-icon absolute right-2 cursor-pointer"
      @click="handleSearch">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import type { Setting } from "~/types/config";

export default defineComponent({
  setup(_, { emit }) {
      const searchQuery = ref(""); // Store search query
      const searchInput = ref<HTMLInputElement | null>(null); // Reference to search input element
      const store = pageStore(); // Access page store
      const setting: Setting = computed(() => store.getSetting); // Get settings
  
      const handleSearch = () => {
        if (searchInput.value) {
          searchInput.value.focus(); // Focus on search input
          navigateTo(
            setting.value.properties.searchResultPage[0].route.path +
              "?q=" +
              searchQuery.value
          ); // Navigate to search results
          emit("search", searchQuery.value); // Emit search event
        }
      };
  
      return {
        searchQuery,
        handleSearch,
        searchInput,
      };
    },
  });
</script>

