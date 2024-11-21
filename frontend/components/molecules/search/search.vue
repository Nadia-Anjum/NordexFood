<template>
  <div class="topnav flex justify-center my-5">
    <div class="search-container flex items-center">
      <div class="search-icon cursor-pointer mr-2" @click="toggleSearch">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
    <div
      v-if="showInput"
      class="modal fixed inset-0 flex justify-center items-start bg-black bg-opacity-50 z-50"
    >
      <div class="modal-content p-5 rounded relative w-1/2 h-1/6 mt-24 z-50">
        <div
          class="close-icon absolute top-5 right-1 cursor-pointer"
          @click="toggleSearch"
        >
          <svg
            width="16px"
            height="16px"
            viewBox="0 -0.5 21 21"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>close [#1511]</title>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-419.000000, -240.000000)"
                fill="#fff"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <polygon
                    id="close-[#1511]"
                    points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <SearchField @search="onSearched"></SearchField>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
      const showInput = ref(false); // Track if search input is shown
      const searchQuery = ref(""); // Store search query
      const searchInput = ref<HTMLInputElement | null>(null); // Reference to search input element
  
      // Function to toggle search input visibility
      const toggleSearch = () => {
        showInput.value = !showInput.value; // Toggle search input visibility
        if (!showInput.value) {
          searchQuery.value = ""; // Clear search query if input is hidden
        }
      };
  
      // Handle click on search icon
      const handleSearchIconClick = () => {
        if (searchInput.value) {
          searchInput.value.focus(); // Focus on search input
        }
      };
  
      // Function to be called when search is performed
      const onSearched = (searchQuery: string) => {
        showInput.value = false; // Hide search input after search
      };
  
      // Return reactive variables and functions to be used in the template
      return {
        showInput,
        searchQuery,
        toggleSearch,
        handleSearchIconClick,
        searchInput,
        onSearched,
      };
    },
  });
</script>
