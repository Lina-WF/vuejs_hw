<script setup lang="ts">
import ShopHeader from './components/header/ShopHeader.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <NuxtRouteAnnouncer />
  <div id="app">
    <ShopHeader />
    <div class="content">
      <NuxtPage />
    </div>  
    <Footer />
  </div>
</template>

<style scoped>
.content{
  min-height: 70vh;
}
</style>
