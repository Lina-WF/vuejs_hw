<script setup lang="ts">
import { ref } from 'vue';
import DeliveryForm from './DeliveryForm.vue';
import CardForm from './CardForm.vue';
import { useCartStore } from '../../../stores/cart';
import type { CardData, DeliveryData } from '../../../types';

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const deliveryRes = ref();
const cardRes = ref();
const response = ref("Ожидание ответа");

async function postForm(delivery: DeliveryData, card: CardData){
    let data = JSON.stringify(Object.assign(delivery, card, cart.value), null, 2);
    console.log(data);
    let res = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: data
        });
    if (res.ok) {
        response.value = "Оплата прошла успешно";
        cartStore.clearCart();
    }
    else{
        response.value = "Что-то пошло не так";
    }
}

function close(){
    cardRes.value = "";
    deliveryRes.value = "";
    response.value = "Ожидание ответа";
}
</script>
 
<template> 
<DeliveryForm class="glass"
                v-show="!deliveryRes"
                @submited="deliveryRes = $event" />
<CardForm class="glass"
            v-show="deliveryRes && !cardRes"
            @submited="cardRes = $event; postForm(deliveryRes, $event)" />
<div class="glass"
    :style="cardRes ? '' :  'display:none'" >
    <div class="big"><b>{{ response }}</b></div><br><br>
    <NuxtLink to="cart"><button @click="close()" class="back">Назад</button></NuxtLink>
</div>
</template>

<style scoped>
</style>
