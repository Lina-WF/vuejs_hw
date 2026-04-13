<script setup lang="ts">
import { ref } from 'vue';
import AddInCartButton from '../../components/AddInCartButton.vue';
import { useProductsStore } from '../../../stores/products';
import { useCartStore } from '../../../stores/cart';
import type { product } from '../../../types';

const route = useRoute();
const idProduct = Number(route.params.idProduct as string);

const productStore = useProductsStore();
const cartStore = useCartStore();

const productObj = ref<product | undefined>(productStore.findProduct(idProduct));
</script>

<template>
<div class="box">
    <div v-if="!productObj">
        <div class="fof"><b>404</b></div>
        <div>Товар не найден</div>
    </div>
    <div class="card" v-else>
        <div class="box">
            <div class="img">
                <img :src="productObj!.image" :alt="'Изображение ' + productObj!.title"/>
            </div>
            <div class="info">
                <p >
                    <b>
                    {{ productObj!.title }}
                    </b>
                </p>
                <p class="big">
                    <b>{{ productObj!.price }} $</b>
                </p>
                <p>
                    ★ Рейтинг {{ productObj!.rating.rate }} 
                    <small>{{ productObj!.rating.count }} оценок</small>
                </p>
                
                <p>
                    {{ productObj!.description }}
                </p>
                <p>
                    <small :style="productObj!.category === 'jewelery' ? 'margin-left: 2px' : '' ">
                    {{ productObj!.category }}
                    </small>
                </p>
                <AddInCartButton 
                    :countInCart="cartStore.checkInCart(idProduct)" 
                    @inc="() => cartStore.incCart(idProduct)" />
            </div>
            <NuxtLink to="/"><button class="back">В каталог</button></NuxtLink>
        </div>
    </div>
</div>

</template>

<style scoped>
.fof {
    font-size: 500%;
    margin-top: 3%;
    letter-spacing: 7px;
}

div.card {
    background-color: rgba(148, 117, 163, 0.331);
    border-radius: 15px;
    padding: 3%;
    margin: 1%;
    width: 60%;
    min-width: 300px;
    text-align: left;
}

.img {
    width: 44%;
    min-width: 250px;
    padding: 3%;
    
}

.info {
    width: 44%;
    min-width: 250px;
    padding: 3%;
}

img {
  max-width: 250px;
  height: 100%;
  object-fit: contain;
}

button, a {
    width: 100%;
    margin-top: 5px;
    margin-left: -2px;
}

a {
    margin: 0 12%;
}
</style>
