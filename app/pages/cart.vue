<script setup lang="ts">
import Card from '../components/Card.vue'
import { useCartStore } from '../../stores/cart';

const cartStore = useCartStore();
const { productsInCart } = storeToRefs(cartStore);
</script>

<template>
<h1>Корзина</h1>
 
  <div v-if="productsInCart.length === 0">
    <div>
      <div class="big">Ваша корзина пуста</div>
      <br>
      <br>
      <NuxtLink to="/"><button>В каталог</button></NuxtLink>
    </div>
  </div>
  <div v-else>
    <div id="totalSum">Общая сумма: {{ cartStore.countSum().toFixed(2) }} $ 
    <NuxtLink to="checkout"><button>Купить</button></NuxtLink>
    <button @click="cartStore.clearCart()">Очистить</button></div>
    <div class="box">
      <Card v-for="product in productsInCart" 
            :key="product.id" 
            :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
div{
  width: 100%;
}

button {
  margin-left: 1%;
  margin-bottom: 2%;
}
</style>
