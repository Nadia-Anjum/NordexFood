<template>
  <div> 
    <NuxtLoader></NuxtLoader>   
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import animations
onMounted(() => {
  AOS.init({
    duration: 1200,
  });
});
</script>



<style>
::selection {
  background: #A13535;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html {
  overflow-x: hidden;
  
}
body {
  overflow-x: hidden;
  font-family: 'Nunito', sans-serif;
}
</style>