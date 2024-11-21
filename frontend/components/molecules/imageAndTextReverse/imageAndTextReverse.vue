<template>
  <div
    v-if="model"
    class=""
    :style="{ backgroundColor: model?.backgroundColor }"
  >
    <div
      class="mx-auto relative flex flex-col space-y-6 lg:h-[32rem] lg:flex-row lg:items-center lg:space-y-0 lg:space-x-6"
    >
      <!-- First column with image -->
      <div
        class="flex items-center justify-center w-full lg:w-2/5 h-full"
        v-if="model?.image && model?.image[0]"
        data-aos="fade-right"
      >
        <base-image
          class="object-cover w-full h-full"
          :model="model?.image[0]"
          :crop="'?mode=crop&anchor=center&width=700&height=400&format=webp'"
        />
      </div>

      <!-- Second column with text -->
      <div class="w-full lg:w-1/2 text-right rounded-md mx-auto p-4 lg:p-0">
        <div class="max-w-lg ml-auto">
          
            <h2
              class="text-3xl font-semibold tracking-wide lg:text-3xl"
              :style="{ color: model?.textColor }"
            >
              {{ model.title }}
            </h2>
            <p class="mt-4" v-html="model?.text" :style="{ color: model?.textColor }"></p>
            <PrimaryButton
              v-if="model.link && model.link.length > 0"
              :button-Color="model.buttonColor"
              :backgroundColor="model.backgroundColor"
              :model="model.link[0]"
            >
              {{ model.link[0].title }}
            </PrimaryButton>
          </div>
        </div>
      </div>
      <!-- Render the ButtonBar component if there are PDFs available -->
      <ButtonBar v-if="model.pdfS && model?.pdfS.length>0" :model="model?.pdfS" :background-color="model?.backgroundColor" :button-color="model?.buttonColor"></ButtonBar>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import baseImage from "../../atoms/baseImage/baseImage.vue";
import type { imageAndText } from "~/types/imageAndText";

export default defineComponent({
  components: { baseImage },
  props: {
    model: Object as PropType<imageAndText>,
  },
  setup() {},
});
</script>

<style scoped>
.container {
  height: 100%;
}
</style>