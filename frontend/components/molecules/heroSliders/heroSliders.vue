<template>
  <div v-if="model && model.items?.items?.length > 0" class="relative h-[60vh] slider-container">
    <div class="slider">
      <HeroSlide class="slide"
      :class="{ active: index === currentIndex }" v-for="(item, index) in model.items?.items" :model="item.content.properties"></HeroSlide>
    </div>
    <button
      @click="prevSlide"
      class="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 half-circle-right"
      aria-label="prev"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        class="w-8 h-8 fill-current"
      >
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c-12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
        />
      </svg>
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 half-circle-left"
      aria-label="next"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        class="w-8 h-8 fill-current"
      >
        <path
          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5 12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, type PropType } from "vue";
import type { HeroSlider } from "~/types/heroSlider";



export default defineComponent({
  props: {
    model: Object as PropType<HeroSlider>
  },
  setup(props) {
    const currentIndex = ref(0);
    const items = props.model?.items?.items?.length;
   
    const isTouchDevice = ref(false); // Track if the device is touch-enabled
    let startX = 0; // Store the starting X position of the touch



     const nextSlide = () => {
      // Move to the next slide
      currentIndex.value = (currentIndex.value + 1) % (items ?? 0);
    };
    
    const prevSlide = () => {
      // Move to the previous slide
      currentIndex.value = (currentIndex.value - 1 + (items ?? 0)) % (items ?? 0);
    };

    // Handle touch start event
    const handleTouchStart = (event: TouchEvent) => {
      isTouchDevice.value = true; // Set touch device flag to true
      startX = event.touches[0].clientX; // Get the starting X position
    };

    // Handle touch move event
    const handleTouchMove = (event: TouchEvent) => {
      if (!isTouchDevice.value) return; // If not a touch device, do nothing
      const touch = event.touches[0]; // Get the current touch position
      const diffX = touch.clientX - startX; // Calculate the difference in X position

      if (diffX > 50) {
        prevSlide(); // Swipe right, go to previous slide
        isTouchDevice.value = false; // Reset touch device flag
      } else if (diffX < -50) {
        nextSlide(); // Swipe left, go to next slide
        isTouchDevice.value = false; // Reset touch device flag
      }
    };

    onMounted(() => {
      window.addEventListener("touchstart", handleTouchStart); // Add touch start event listener
      window.addEventListener("touchmove", handleTouchMove); // Add touch move event listener
    });

    onUnmounted(() => {
      window.removeEventListener("touchstart", handleTouchStart); // Remove touch start event listener
      window.removeEventListener("touchmove", handleTouchMove); // Remove touch move event listener
    });

    return {
      currentIndex,
      nextSlide,
      prevSlide,
      isTouchDevice,
    };
  },
});
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
}

.half-circle-left {
  width: 50px;
  height: 100px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  position: absolute;
  right: -50px; 
  top: 50%;
  transform: translateY(-50%);
  transition: right 0.5s ease, opacity 0.5s ease;
  opacity: 0;
}

.half-circle-right {
  width: 50px;
  height: 100px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  position: absolute;
  left: -50px; 
  top: 50%;
  transform: translateY(-50%);
  transition: left 0.5s ease, opacity 0.5s ease;
  opacity: 0;
}

.slider-container:hover .half-circle-left {
  right: 0; /* Slide in */
  opacity: 1;
}

.slider-container:hover .half-circle-right {
  left: 0; /* Slide in */
  opacity: 1;
}
</style>