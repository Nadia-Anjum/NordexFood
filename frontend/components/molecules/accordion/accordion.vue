<template>
  <div v-if="model">
    <h2 class="text-3xl font-semibold mx-auto text-center mt-20">{{ model.title }}</h2>
    <div class="faq-container bg-[#A13535] text-white p-6 rounded-lg max-w-4xl mx-auto mt-6">
      <div v-for="items in model?.items?.items">
        <AccordionItem :model="items?.content.properties"></AccordionItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import type { Accordion } from '~/types/accordion';

const props = defineProps({
  model: Object as PropType<Accordion>
});
</script>