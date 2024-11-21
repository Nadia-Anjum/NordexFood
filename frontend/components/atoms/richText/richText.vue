<template>
  <div :style="{ backgroundColor: model?.backgroundColor }" class="py-10">
    <section class="flex items-center justify-center
    rich-text-container">
      <div class="w-full md:w-3/4 lg:w-1/1 mx-auto text-center px-4">
        <h2 class="text-3xl font-semibold mb-8 mt-6" :style="{ color: model?.textColor }">{{ model.title }}</h2>
        <div class="mb-6" v-html="model.text.markup" :style="{ color: model?.textColor }"></div>
      </div>
    </section>
  
    <!-- The button component -->
    <div class="w-full mx-auto px-4 mb-5 mt-mobile">
    <div class="flex flex-wrap justify-center gap-5 ">
      <ButtonBar
        v-if="model.pdfS && model?.pdfS.length > 0"
        :model="model?.pdfS"
        :background-color="model?.backgroundColor"
        :button-color="model?.buttonColor"
        style="background-color: white;"
        class="ButtonBarFromRichText">
      </ButtonBar>
    </div>
  </div>

    <!-- The numberCounts component -->
    <section class="w-full mx-auto text-center">
          <div class="flex flex-wrap justify-evenly">
            <div v-for="number in model?.numbers?.items" :key="number.id" class="text-center p-4 m-2">
              <numberCount :model="number?.content?.properties"></numberCount>
            </div>
          </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { PropType } from 'vue';

const props = defineProps({
  model: Object as PropType<RichText>
});
</script>

<style scoped>
.rich-text-container {
  height: 35vh;
}

@media (max-width: 768px) {
  .mt-mobile {
    margin-top: 3rem;
  }
  .rich-text-container {
  height: 100%;
}
}

@media (max-width: 480px) {
  .mt-mobile {
    margin-top: 2rem;
  }
}
</style>