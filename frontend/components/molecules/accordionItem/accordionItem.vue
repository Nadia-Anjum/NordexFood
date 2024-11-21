<template>
     <details v-if="model" class="mb-2 border-b border-gray-300 pb-2">
      <summary class="cursor-pointer font-bold text-lg ">{{ model.title }}</summary>
        <div class="mt-2 text-base" v-html="model?.text?.markup"></div>
    </details>
</template>
    
    
    <script lang="ts" setup>
    import { defineProps } from 'vue';
    import type { PropType } from 'vue';
    import type { AccordionItem } from '~/types/accordion';
    
    const props = defineProps({
      model: Object as PropType<AccordionItem>
    });
    </script>