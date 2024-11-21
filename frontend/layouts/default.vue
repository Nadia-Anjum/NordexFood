<template>
  <div>
    <MainHeader />    
    <slot />
    <ScrollToTop />
    <footer class="bg-white">
        <div class="container px-6 py-8 mx-auto">
        <main-footer></main-footer>
        </div>
    </footer>  
  </div>
</template>