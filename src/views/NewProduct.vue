<script setup>
import { useRouter } from 'vue-router';
import NewProductForm from '../components/forms/NewProductForm.vue';
import { useProductsStore } from '../stores/products';


const productStore = useProductsStore();

const router = useRouter();

function newProduct(product){
    productStore.addProduct(product);
    router.push('/');
}
</script>

<template>
    <div class="box">
        <div class="card">
            <NewProductForm @submited="newProduct($event)"/>
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
