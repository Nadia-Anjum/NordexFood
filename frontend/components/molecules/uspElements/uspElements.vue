<template>
  <div :style="{ backgroundColor: model?.backgroundColor }">
    <div class="py-8"> 
      <section class="flex items-center justify-center h-[25vh] pt-10">
        <div class="lg:w-1/2 mx-auto text-center text-white md:w-3/4 px-4">
          <h2 class="text-3xl font-semibold mb-4" :style="{ color: model?.textColor }">{{ model.title }}</h2>
          <div class="mb-6" v-html="model.text" :style="{ color: model?.textColor }"></div>
        </div>
      </section>

      <!-- The uspElements component -->
      <section class="flex items-center justify-center">
        <div class="container mx-auto py-8 px-4">
          <div class="gap-8 md:gap-16 flex flex-wrap justify-evenly">
            <div v-for="element in model?.elements?.items" :key="element.id" class="text-center w-full sm:w-1/2 lg:w-1/6 md:w-1/4" :style="{ color: model?.textColor }">
              <UspElement :model="element?.content?.properties"></UspElement>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

  
  <script lang="ts">
  import { defineComponent, type PropType } from "vue";
  export default defineComponent({

    props: {
      model: Object as PropType<uspElement>,
    },
    setup() {},
  });
  </script>