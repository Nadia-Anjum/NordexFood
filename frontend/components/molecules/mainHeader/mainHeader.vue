<template>
  <nav x-data="{ isOpen: false, isSubmenuOpen: false }" class="relative bg-white shadow">
    <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center justify-between">
          <img src="@/public/Logo-122x91.png" alt="NordexFood Logo" class="h-12 w-auto pl-3" />
        </NuxtLink>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button v-cloak @click="isOpen = !isOpen" type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
            <svg v-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
            </svg>

            <svg v-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div v-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-50 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
        <div class="flex flex-col md:flex-row md:mx-6">
          <div class="relative items-center">
            <NuxtLink @click="closeMenu" :to="setting?.properties?.menuLinks[0].url ? setting?.properties?.menuLinks[0].url : setting?.properties?.menuLinks[0].route?.path" :target="setting?.properties?.menuLinks[0].target" :class="{'text-red-500': isActive(setting?.properties?.menuLinks[0].url ? setting?.properties?.menuLinks[0].url : setting?.properties?.menuLinks[0].route?.path)}" class="my-2 text-gray-700 transition-colors duration-300 transform hover:text-custom-color md:mx-4 md:my-0 flex items-center">
              {{setting?.properties?.menuLinks[0].title}}
              <button class="ml-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" @click.stop="isSubmenuOpen = !isSubmenuOpen">
                <svg v-if="isSubmenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M14.707 10.707a1 1 0 01-1.414 0L10 7.414 6.707 10.707a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </NuxtLink>
            <div v-show="isSubmenuOpen" class="flex flex-col md:absolute md:left-0 md:w-48 mt-1 md:mt-4 origin-top-right border divide-y divide-gray-100 rounded-md outline-none md:block submenu">
              <NuxtLink v-for="(link, index) in setting?.properties?.menuLinks.slice(1, 4)" @click="closeMenu" :to="link.url ? link.url : link.route?.path" :target="link.target" :key="index" :class="{'text-red-500': isActive(link.url ? link.url : link.route?.path)}" class="block px-6 py-4 text-base text-gray-700 hover:bg-gray-100 hover:text-custom-color">{{link.title}}</NuxtLink>
            </div>
          </div>
          <NuxtLink v-for="(link, index) in setting?.properties?.menuLinks.slice(4)" @click="closeMenu" :to="link.url ? link.url : link.route?.path" :target="link.target" :key="index" :class="{'text-red-500': isActive(link.url ? link.url : link.route?.path)}" class="my-2 text-gray-700 transition-colors duration-300 transform hover:text-custom-color md:mx-4 md:my-0">{{link.title}}</NuxtLink>
        </div>
        <div class="md:hidden">
          <Search></Search>
        </div>
      </div>
      <div class="hidden md:block">
        <Search></Search>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import type { Setting } from '~/types/config';

const store = pageStore();
const setting: Setting = computed(() => { return store.getSetting });
let isOpen = ref(false); // Track if menu is open
let isSubmenuOpen = ref(false); // Track if submenu is open

const route = useRoute(); // Get current route
const isActive = (path: string) => {
  return route.path === path; // Check if path is active
};

const closeMenu = () => {
  // Close the main menu
  isOpen.value = false;
  // Close the submenu
  isSubmenuOpen.value = false;
};

// Watch for route changes to close the menu
watch(route, () => {
  closeMenu();
});
</script>

<style scoped>
.hover\:text-custom-color:hover {
  color: #A13535;
}
.text-red-500 {
  color: #A13535;
}
.submenu {
  background-color: white;
  border: 1px solid #e5e7eb; 
}

@media (max-width: 767px) {
  .submenu {
    background-color: transparent;
    border: none;
  }
}

@media (min-width: 768px) {
  .submenu {
    background-color: white;
    border: none;
    box-shadow: black 0px 0px 1px;
  }
}
</style>