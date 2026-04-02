<script setup>
import { storeToRefs } from 'pinia';
import Card from '../components/Card.vue'
import { useCartStore } from '../stores/cart';

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
      <RouterLink :to="{name:'home'}"><button>В каталог</button></RouterLink>
    </div>
  </div>
  <div v-else>
    Общая сумма: {{ cartStore.countSum().toFixed(2) }} $ 
    <RouterLink :to="{name:'checkout'}"><button>Купить</button></RouterLink>
    <button @click="cartStore.clearCart()">Очистить</button>
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
