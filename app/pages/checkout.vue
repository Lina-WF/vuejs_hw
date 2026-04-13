<script setup lang="ts">
import BuyForm from '../components/forms/BuyForm.vue';
</script>

<template>
<div class="box">
    <div class="card">
        <p>Для покупки заполните данные:</p>
        <BuyForm />
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
