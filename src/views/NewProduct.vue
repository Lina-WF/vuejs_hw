<script setup>
import { useRouter } from 'vue-router';
import NewProductForm from '../components/forms/NewProductForm.vue';

const prop = defineProps({
  idProduct: String,
});
const emit = defineEmits(['newProduct']);

const router = useRouter();

function newProduct(product){
    emit('newProduct', product);
    router.push('/');
}
</script>

<template>
    <div class="box">
        <div class="card">
            <NewProductForm :lastId="Number(idProduct)"
                  @submited="(e) => newProduct(e)"/>
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
