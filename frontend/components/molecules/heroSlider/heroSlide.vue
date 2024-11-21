<template>
  <div>
    <BaseImage
      class="hero-image absolute inset-0 w-full h-full object-cover"
      alt="Hero Image"
      :model="model.image[0]">
    </BaseImage>
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative container px-6 py-16 mx-auto text-center flex flex-col items-center justify-center h-full">
      <div class="max-w-lg mx-auto text-white">
        <h1 class="text-3xl font-semibold lg:text-4xl">{{ model.headline }}</h1>
        <p class="mt-6" v-html="model.text"></p>
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
  setup() {},
});
</script>

<style scoped>
.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
}
</style>