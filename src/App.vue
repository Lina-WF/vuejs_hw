<script setup>
import ShopHeader from './components/header/ShopHeader.vue'
import Footer from './components/Footer.vue'
import { computed, ref } from 'vue';

const baseFilter = {'searchTerm': "", 
                    'priceFrom': 0, 
                    'priceTo': 1000000};
const filter = ref(baseFilter);
const cart = ref([{id: 1, countInCart: 1}]);

const data = ref([]);

fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((products) => data.value = products);

function checkProductInfo(info, searchTerm){
  const check = info.toLowerCase().includes(searchTerm.toLowerCase());
  return check;
}

function checkProductPrice(price, from, to){
  const check = from <= price && price <= to;
  return check;
}

const filteredProducts = computed(() => data.value.filter(product => (checkProductInfo(product.title, filter.value.searchTerm) ||
                                                  checkProductInfo(product.description, filter.value.searchTerm) ||
                                                  checkProductInfo(product.category, filter.value.searchTerm)) &&
                                                  checkProductPrice(product.price, filter.value.priceFrom, filter.value.priceTo)) || data);



function incCart(id){
  const cartId = cart.value.findIndex(item => (item.id == id))
  if (cartId != -1)
  {
    cart.value[cartId].countInCart++;
  }
  else {
    cart.value.push({id: Number(id), countInCart: 1});
  }
}

function decCart(id){
  const cartId = cart.value.findIndex(item => (item.id == id))
  
  if (cart.value[cartId].countInCart != 1)
  {
    cart.value[cartId].countInCart--;
  }
  else {
    cart.value.splice(cartId, 1);
  }
}
</script>

<template>
  <ShopHeader 
    @search="(e) => filter = e" 
    @clearFilter="() => filter = baseFilter"/>
  <div class="content">
    <RouterView 
      :data="data" 
      :filteredProducts="filteredProducts" 
      :cart="cart" 
      @clearFilter="() => filter = baseFilter"
      @clearCart="() => cart = []"
      @inc="(e) => incCart(e)"
      @dec="(e) => decCart(e)"
      @bought="() => cart = []"
      @newProduct="(e) => {data.push(e); filter = baseFilter}"></RouterView>
  </div>  
  <Footer />
</template>

<style scoped>
.content{
  min-height: 70vh;
}
</style>
