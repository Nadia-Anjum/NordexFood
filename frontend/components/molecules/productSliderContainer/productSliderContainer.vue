<template>
  <div v-if="model" class="max-w-screen-2xl mx-auto relative mt-14">
    <h2 class="text-left pt-8 pb-4 mx-8 font-semibold tracking-wide text-3xl">{{ model.title }}</h2>
    <div
      v-if="model.products.items.length > perPage"
      class="relative overflow-hidden mb-8 slider-container"
    >
      <button
        v-if="showNavigation"
        @click="prevSlide"
        class="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 left-2 half-circle-right"
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
      <div class="overflow-hidden w-full">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{
            transform: `translateX(-${currentSlide * 100}vw)`,
            width: `${(100 * model.products.items.length) / perPage}%`,
          }"
        >
          <div
            class="w-full p-5 box-border"
            v-for="(product, index) in model.products.items"
            :key="index"
          >
            <ProductSlider :model="product.content.properties"></ProductSlider>
          </div>
        </div>
      </div>
      <button
        v-if="showNavigation"
        @click="nextSlide"
        class="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 right-2 half-circle-left"
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
    <div v-else class="flex flex-wrap justify-start mb-8">
      <div
        class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-5 box-border"
        v-for="(product, index) in model.products.items"
        :key="index"
      >
        <ProductSlider :model="product.content.properties"></ProductSlider>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { onUnmounted } from "vue";
import { defineProps } from "vue";
import type { PropType } from "vue";

const props = defineProps({
  model: Object as PropType<ProductSlider>,
});

// Define reactive variables for the current slide and items per page
const currentSlide = ref(0);
const perPage = ref(4);

const isTouchDevice = ref(false); // Track if the device is touch-enabled

let startX = 0; // Store the starting X position of the touch

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
// Function to update the number of items per page based on window width
const updatePerPage = () => {
  const width = window.innerWidth;
  if (width <= 480) {
    perPage.value = 1;
  } else if (width <= 768) {
    perPage.value = 2;
  } else if (width <= 1024) {
    perPage.value = 3;
  } else {
    perPage.value = 4;
  }
};

// Computed property to determine if navigation should be shown
const showNavigation = computed(() => {
  return props.model.products.items.length > perPage.value;
});

// Function to go to the next slide
const nextSlide = () => {
  if (
    currentSlide.value < // Check if the current slide is less than the total number of slides
    Math.ceil(props.model.products.items.length / perPage.value) - 1 // Check if there are more slides
  ) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0; // Loop back to the first slide
  }
};

// Function to go to the previous slide
const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--; // Go to the previous slide
  } else {
    currentSlide.value =
      Math.ceil(props.model.products.items.length / perPage.value) - 1; // Loop back to the last slide
  }
};

// Lifecycle hook to update items per page on component mount and window resize
onMounted(() => {
  updatePerPage();
  window.addEventListener("resize", updatePerPage);
});
</script>

<style scoped>
.slider-container {
  position: relative;
}

.half-circle-left {
  width: 50px;
  height: 100px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  position: absolute;
  right: -50px; /* Start off-screen */
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
  left: -50px; /* Start off-screen */
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