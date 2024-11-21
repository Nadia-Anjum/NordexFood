<template>
  <div class="product-slider p-4" :style="{ backgroundColor: model?.backgroundColor }">
    <div class="product-item flex-shrink-0 w-60 text-center">
      <BaseLink :model="model.link[0]">
        <BaseImage
          class="w-full h-80 object-cover transition-transform duration-300 transform hover:scale-105"
          :model="model.image[0]"
        ></BaseImage>
      </BaseLink>
      <h2 class="text-lg font-semibold mt-5">{{ model?.title }}</h2>
      <p class="text-sm">{{ model?.text }}</p>
      <PrimaryButton
        v-if="model.link && model.link.length > 0"
        :button-color="model.buttonColor"
        :backgroundColor="model.backgroundColor"
        :model="model.link[0]"
        >{{ model.link[0].title }}</PrimaryButton
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  props: {
    model: Object as PropType<productSlider>,
  },
  setup() {},
});
</script>
