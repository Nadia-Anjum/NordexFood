<template>
  <div :style="{ backgroundColor: '#A13535' }" class="w-full lg:w-1/2 text-left lg:py-10 lg:p-0 text-white">
    <section class="flex items-right justify-center lg:h-[35vh]">
      <div class="text-left mt-2">
        <h2 class="text-3xl font-semibold mb-8" aria-label="tabs header" :style="{ color: model?.textColor }">{{ model.title }}</h2>
        <div class="mb-6 flex" :style="{ color: model?.textColor }">
          <div class="flex-container" v-html="model.text?.markup"></div>
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

<style>
.flex-container {
  gap: 20px; 
}

.flex-container table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 15px; 
  overflow: hidden; 
  border: 2px solid #080808; 
  margin-top: 0rem;
}

.flex-container th, .flex-container td {
  border: 1px solid #080808;
  padding: 8px 50px;
  background-color: #ffffff;
  color: #080808;
}

.flex-container tr:first-child td {
  background-color: #6A6A6A;
  color: #ffffff;
  font-weight: 700;
}

/* Media query for mobile devices */
@media (max-width: 485px) {
  .flex-container table {
    width: 100%;
    font-size: 12px; 
  }

  .flex-container th, .flex-container td {
    padding: 4px 20px; 
  }
}

/* Media query for tablets */
@media (max-width: 768px) {
  .flex-container table {
    width: 100%;
    font-size: 14px; 
    margin-top: 1rem; 
  }

  .flex-container th, .flex-container td {
    padding: 6px 30px; 
  }
}
</style>
