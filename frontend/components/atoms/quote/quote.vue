<template>
  <section class="flex items-center justify-center h-auto min-h-[50vh] py-10 quote">
    <div class="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 quote-container">
      <div class="quote-wrapper">
               <div class="w-24 h-24 rounded-full flex items-center justify-start md:mx-0">
          <BaseImage class="w-16 h-16" :model="model.image[0]"></BaseImage>
        </div>
        <h2 class="text-2xl font-semibold mb-4 text-left md:text-left quote-header">
          {{ model.title }}
        </h2>
        <div class="mb-6 text-left md:text-left quote-text" v-html="model.text"></div>
        <div class="mt-6 quote-author-container text-right md:text-right">
          <div class=" quote-author">
            <div class="font-medium quote-name">{{ model.author }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  model: Object as PropType<quote>,
});
</script>
