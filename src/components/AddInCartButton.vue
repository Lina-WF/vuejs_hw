<script setup>

const prop = defineProps({
    countInCart: {type: Number},
});
defineEmits(['inc', 'dec']);
</script>

<template>
    <div v-if="$route.path != '/cart'">
        <div v-if="!countInCart" class="fullWidth">
            <button @click="$emit('inc')" class="fullWidth">В корзину</button>
        </div>
        <div v-else class="fullWidth box">
            <button @click="$emit('inc')" class="in-cart">В корзину</button> <p> {{ countInCart }} </p>
        </div>
    </div>
    <div v-else class="fullWidth box">
        <button @click="$emit('inc')" class="cart">Добавить</button> 
        <p> {{ countInCart }} </p>
        <button @click="$emit('dec')" class="cart">Уменьшить</button>
    </div>
</template>

<style scoped>
button {
    margin-top: 5px;
    margin-left: -2px;
}
.fullWidth {
  width: 100%;
}
.in-cart {
    width: 88%;
}
.cart {
    width: 44%;
}

p {
    width: 10%;
    text-align: center;
    background-color: #2a242d;
    border-radius: 8px;
    margin: 1%;
    margin-right: 1.5%;
    margin-top: 5px;
    padding: 0.6em 0;
}

@media (prefers-color-scheme: light) {
  p {
    background-color: #c6b4d0;
  }
}
</style>
