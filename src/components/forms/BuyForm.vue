<script setup>
import { ref } from 'vue';
import DeliveryForm from './DeliveryForm.vue';
import CardForm from './CardForm.vue';
import { useCartStore } from '../../stores/cart';

const cartStore = useCartStore();
const { cart } = cartStore;

const deliveryRes = ref();
const cardRes = ref();
const response = ref("Ожидание ответа");

async function postForm(delivery, card){
    let data = JSON.stringify(Object.assign(delivery, card, cart), null, 2);
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
    response.value = ref("Ожидание ответа");
}
</script>
 
<template> 
<DeliveryForm class="glass"
                v-show="!deliveryRes"
                @submited="(e) => deliveryRes = e" />
<CardForm class="glass"
            v-show="deliveryRes && !cardRes"
            @submited="(e) => {cardRes = e; postForm(deliveryRes, e)}" />
<div class="glass"
    :style="cardRes ? '' :  'display:none'" >
    <div class="big"><b>{{ response }}</b></div><br><br>
    <RouterLink :to="{name:'cart'}"><button @click="close()" class="back">Назад</button></RouterLink>
</div>
</template>

<style scoped>
</style>
