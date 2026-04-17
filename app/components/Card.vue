<script setup lang="ts">
import { computed } from 'vue'
import AddInCartButton from './AddInCartButton.vue';
import { useCartStore } from '../../stores/cart';
import type { Product } from '../../types';

const prop = defineProps<{
  product: Product,
}>();

const cartStore = useCartStore();
const countInCart = computed(() => cartStore.checkInCart(prop.product.id));

const title = computed(() => prop.product.title.length < 30 ? 
                          prop.product.title : prop.product.title.slice(0, 30) + "...");
const description = computed(() => prop.product.description.length < 90 ? 
                                prop.product.description : prop.product.description.slice(0, 90) + "...");
</script>

<template>
  <div class="card">
    <NuxtLink :to="`product/${product.id}`">
      <img :src="product.image" :alt="'Изображение ' + product.title"/>
      <div class="info">
        <p class="big">
          <b>{{ product.price }} $</b>
        </p>
        <p>
          <b>
            {{ title }}
          </b>
        </p>
        <p>
          ★ Рейтинг {{ product.rating.rate }} 
          <small>{{ product.rating.count }} оценок</small>
        </p>
        <p>
          {{ description }}
        </p>
        <p>
          <small :style="product.category === 'jewelery' ? 'margin-left: 2px' : '' ">
            {{ product.category }}
          </small>
        </p>
      </div>
    </NuxtLink>
    <AddInCartButton 
      :countInCart="countInCart" 
      @inc="() => cartStore.incCart(product.id)" 
      @dec="() => cartStore.decCart(product.id)"
      />
  </div>
</template>

<style scoped>
.card {
  width: 31%;
  min-width: 300px;
  background-color: rgba(148, 117, 163, 0.331);
  border-radius: 15px;
  padding: 3%;
  margin: 1%;
}

img {
  max-height: 150px;
  width:auto;
  object-fit: contain;
}

.info {
    text-align: left;
    margin: 0 5%;
    margin-top: 10%;
}

p {
    margin: 5px 0;
}

a, a:hover {
  color: rgba(255, 255, 255, 0.87);
  font-weight: normal;
  display: block;
}

@media (prefers-color-scheme: light) {
  a, a:hover {
    color: #213547;
  }
}
</style>