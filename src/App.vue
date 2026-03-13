<script setup>
import ShopHeader from './components/header/ShopHeader.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <ShopHeader 
    @search="(e) => filter = e" />
  <div class="content">
    <RouterView></RouterView>
  </div>  
  <Footer />
</template>

<style scoped>
.content{
  min-height: 70vh;
}
</style>
