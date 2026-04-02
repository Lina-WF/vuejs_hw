<script setup>
import { computed } from 'vue'
import Card from '../components/Card.vue'

const prop = defineProps({
  data: { type: Array },
  cart: { type: Array },
});
defineEmits(['clearFilter', 'clearCart', 'inc', 'dec']);

const products = computed(() => prop.data.filter((product) => prop.cart.find(item => (product.id === item.id))))

function getCountInCart(id){
  const product = prop.cart.find(item => (id === item.id));
  return product ? product.countInCart : 0;
}

function countSum(){
  return products.value.reduce((sum, product) => {
    return sum + product.price * getCountInCart(product.id);
  }, 0)
}
</script>

<template>
<h1>Корзина</h1>
 
  <div v-if="products.length === 0">
    <div>
      <div class="big">Ваша корзина пуста</div>
      <br>
      <br>
      <RouterLink :to="{name:'home'}" @click="$emit('clearFilter')"><button>В каталог</button></RouterLink>
    </div>
  </div>
  <div v-else>
    <div id="totalSum">Общая сумма: {{ cartStore.countSum().toFixed(2) }} $ 
    <RouterLink :to="{name:'checkout'}"><button>Купить</button></RouterLink>
    <button @click="cartStore.clearCart()">Очистить</button></div>
    <div class="box">
      <Card v-for="product in products" 
            :key="product.id" 
            :product="product"
            :countInCart = "getCountInCart(product.id)"
            @inc="() => $emit('inc', product.id)"
            @dec="() => $emit('dec', product.id)"
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
