<script setup>
import Card from '../components/Card.vue'
import { useProductsStore } from '../stores/products';
import { useFilterStore } from '../stores/filter';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/user';
import { computed } from 'vue';

const productStore = useProductsStore();
const { data, isLoading } = storeToRefs(productStore);

const filterStore = useFilterStore();
const { filteredProducts } = storeToRefs(filterStore);

const userStore = useUserStore();
const auth = computed(() => userStore.user.loggedIn);
</script>

<template>
<h1>Магазин</h1>
  <RouterLink :to="{name: 'newProduct'}" v-if="auth">
    <button style="width: 95%;">Добавить новый товар</button>
  </RouterLink>
  <div v-if="isLoading">Загрузка...</div>
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
