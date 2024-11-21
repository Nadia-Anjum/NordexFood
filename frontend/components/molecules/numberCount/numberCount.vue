<template>
  <section class="flex flex-col items-center p-4 space-y-4">
    <h2 class="text-sm max-w-xs mx-auto">{{ model?.title }}</h2>
    <div ref="numberElement" class="text-4xl font-bold">{{ displayNumber }}</div>
    <p class="text-sm max-w-xs mx-auto">{{ model?.text }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, type PropType } from "vue";

export default defineComponent({
  props: {
    model: Object as PropType<{ title: string; number: number; text: string }>,
  },
  setup(props) { 
    const displayNumber = ref(0); // Start at 0
    const numberElement = ref<HTMLElement | null>(null); // Reference to the number element

    const animateNumber = (start: number, end: number, duration: number) => { // Animate the number
      const startTime = performance.now(); // Get the current time

      const updateNumber = (currentTime: number) => {
        const elapsedTime = currentTime - startTime; // Calculate the elapsed time
        const progress = Math.min(elapsedTime / duration, 1); // Calculate the progress
        displayNumber.value = Math.floor(progress * (end - start) + start); // Update the display number

        if (progress < 1) { // If the animation is not finished request the next frame
          requestAnimationFrame(updateNumber); 
        }
      };

      requestAnimationFrame(updateNumber); // Request the first frame
    };

    onMounted(() => {
      if (props.model?.number !== undefined) { // If the number is defined
        animateNumber(0, props.model.number, 3500); // Animate over 2 seconds
      }
    });

    return {
      displayNumber,
      numberElement,
    };
  },
});
</script>