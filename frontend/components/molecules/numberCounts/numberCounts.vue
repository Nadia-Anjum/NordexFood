<template>
  <div class="w-full mx-auto text-center">
    <div class="flex flex-wrap justify-evenly">
      <div v-for="number in model?.numbers?.items" :key="number.id" class="text-center p-4 m-2">
        <numberCount :model="number?.content?.properties"></numberCount>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
export default defineComponent({

  props: {
    model: Object as PropType<numberCounts>,
  },
  setup(){},
});

</script>

