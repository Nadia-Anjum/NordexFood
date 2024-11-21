<template>
  <section class="container mx-auto py-3">
    <div class="text-center">
      <div class="flex items-center justify-center my-2">
        <div class="usp-container">
          <BaseImage class="usp-image" :model="model.image[0]"></BaseImage>
        </div>
      </div>
      <h2 class="text-xl font-semibold max-w-xs mx-auto">{{ model?.title }}</h2>
      <p
        class="text-sm mt-2 mx-auto whitespace-pre-line"
        style="max-width: min-content"
      >
        {{ model?.text }}
      </p>
    </div>
  </section>
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

<style scoped>
.usp-container {
  width: 6rem; 
  height: 6rem; 
  background-color: #a13535;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.usp-image {
  width: 4rem; 
  height: 4rem; 
  filter: invert(1);
}

@media (max-width: 768px) {
  .usp-container {
    width: 5rem; 
    height: 5rem; 
  }

  .usp-image {
    width: 3rem; 
    height: 3rem; 
  }
}
</style>
