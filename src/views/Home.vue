<script setup>
import { computed} from 'vue'
import Card from '../components/Card.vue'

const prop = defineProps({
  data: { type: Array, required: true },
  products: { type: Array, required: true },
  cart: { type: Array },
});
defineEmits(['inc', 'newProduct']);

function checkInCart(id){
  const productObj = prop.cart.find(product => (product.id === id));
  if (productObj)
  {
    return productObj.countInCart;
  }
  else {
    return 0;
  }
}
const lastId = computed(() => prop.data.length ? prop.data.at(-1).id : 0);

const auth = localStorage.auth;
</script>

<template>
<h1>Магазин</h1>
  <RouterLink :to="{name: 'newProduct', params: {idProduct: lastId}}" v-if="auth === 'admin'">
    <button style="width: 95%;">Добавить новый товар</button>
  </RouterLink>
  <div v-if="products.length === 0">
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
          :countInCart = "checkInCart(product.id)"
          @inc="(e) => $emit('inc', product.id)"
      />
    </div>
  </div>
  <div class="box" v-else>
    <Card v-for="product in products" 
          :key="product.id" 
          :product="product"
          :countInCart = "checkInCart(product.id)"
          @inc="() => $emit('inc', product.id)"
    />
  </div>
</template>

<style scoped>
div{
  width: 100%;
}
</style>
