<template>
   <div v-if="model.image && model.image.length > 0" class="relative h-[60vh]"> <!-- Display this div if model has an image and its length is greater than 0 -->
    <BaseImage
      class="hero-image absolute inset-0 w-full h-full object-cover"
      :model="model.image[0]" 
    ></BaseImage> 
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div
      class="relative container px-6 py-16 mx-auto text-center flex flex-col items-center justify-center h-full"
    >
      <div class="max-w-lg mx-auto text-white">
        <h1 class="text-3xl font-semibold lg:text-4xl">{{ model.headline }}</h1>
        <p class="mt-6 text-gray-300" v-html="model?.text"></p>
      </div>

      <div class="w-full sm:w-3/4 md:w-1/2">
        <SearchField v-if="model.showSearch"></SearchField> <!-- Display search field if showSearch is true -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    model: Object as PropType<hero>,
  },
});
</script>
