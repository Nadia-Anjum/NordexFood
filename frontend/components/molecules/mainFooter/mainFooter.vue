<template>
    <footer>
        <hr class="my-6 border-gray-200 md:my-10">

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div v-for="footerBlock, index in model?.properties?.footerBlocks?.items" :key="index">
                <p class="font-semibold text-gray-800">{{ footerBlock.content?.properties?.headline }}</p>
                <p class="text-gray-600 transition-colors duration-300">{{ footerBlock.content?.properties?.text }}</p>
                <div class="flex flex-col items-start mt-5 space-y-2">
                    <NuxtLink class="text-gray-600 transition-colors duration-300 hover:underline hover:text-custom-red" v-for="link, index in footerBlock.content?.properties?.links" :to="link.url ? link.url : link.route?.path" :target="link.target" :key="index">{{ link.title }}</NuxtLink>
                </div>
            </div>
        </div>
            
        <hr class="my-6 border-gray-200 md:my-10">
        
        <div class="flex flex-col items-center justify-between sm:flex-row">
            <NuxtLink to="/" class="flex items-center justify-between">
                <img src="@/public/Logo-122x91.png" alt="NordexFood Logo" class="h-12 w-auto pl-3" />
            </NuxtLink>

            <p class="mt-4 text-sm text-gray-500 sm:mt-0">© Copyright {{ new Date()?.getFullYear()}} | Nordex Food A/S</p>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Setting } from '~/types/config';

// Get the page store
const store = pageStore();

// Compute the model based on the store's settings
const model: Setting = computed(() => {
  return store.getSetting;
});
</script>

<style scoped>
.hover\:text-custom-red:hover {
  color: #A13535;
}
</style>