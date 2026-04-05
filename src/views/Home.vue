<script setup>
import Card from '../components/Card.vue'
import { useProductsStore } from '../stores/products';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useFilteredProductsStore } from '../stores/filteredProducts';
import { useAuthStore } from '../stores/auth';

const productStore = useProductsStore();
const { data, isLoading } = storeToRefs(productStore);

const filteredProductsStore = useFilteredProductsStore();
const { filteredProducts } = storeToRefs(filteredProductsStore);

const authStore = useAuthStore();
const role = computed(() => authStore.role);
</script>

<template>
<h1>Магазин</h1>
  <RouterLink :to="{name: 'newProduct'}" v-if="role==='admin'">
    <button style="width: 95%;">Добавить новый товар</button>
  </RouterLink>
  <div id="loading" v-if="isLoading">Загрузка...</div>
  <div v-else-if="filteredProducts.length === 0">
    <div>
      <div class="big">Товары по запросу не найдены.</div>
      <br>
      <br>
      Другие товары наши товары:
    </div>
    <div class="box">
      <Card v-for="product in data" 
          :key="product.id" 
          :product="product"
      />
    </div>
  </div>
  <div class="box" v-else>
    <Card v-for="product in filteredProducts" 
          :key="product.id" 
          :product="product"
    />
  </div>
</template>

<style scoped>
div{
  width: 100%;
}
</style>
