<template>
  <div class="fixed bottom-5 right-5 flex justify-end">
    <div v-show="isVisible" class="bg-primary p-2 rounded-full cursor-pointer z-50 transition-transform duration-300 ease-in-out transform translate-y-0 opacity-100 animate-slide-in" @click="scrollToTop">
      <svg
        class="w-6 h-6 fill-current text-always-white transition-transform duration-300 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path
          d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "ScrollToTop",
  setup() {
    // Reactive variable to track the visibility of the scroll-to-top button
    const isVisible = ref(false);

    // Function to toggle the visibility of the scroll-to-top button based on scroll position
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        isVisible.value = true;
      } else {
        isVisible.value = false;
      }
    };

    // Function to scroll to the top of the page smoothly
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    // Add scroll event listener when the component is mounted
    onMounted(() => {
      window.addEventListener("scroll", toggleVisibility);
    });

    // Remove scroll event listener when the component is unmounted
    onUnmounted(() => {
      window.removeEventListener("scroll", toggleVisibility);
    });

    // Return the reactive variables and functions to be used in the template
    return {
      isVisible,
      scrollToTop,
    };
  },
});
</script>

<style>
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.5s ease-out forwards;
}
</style>