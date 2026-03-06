<script setup>
import BuyForm from '../components/forms/buyForm.vue';

defineProps({
  cart: { type: Array },
});
defineEmits(['bought']);

</script>

<template>
<div class="box">
    <div class="card">
        <p>Для покупки заполните данные:</p>
        <BuyForm :cart="cart"
                @bought="() => $emit('bought')"/>
    </div>
</div>
</template>

<style scoped>
.box {
    width: 100%;
}

.card {
    width: 60%;
    min-width: 300px;
}

@media (max-width: 550px){
	.card {
        width: 100%;
    }
}
</style>
