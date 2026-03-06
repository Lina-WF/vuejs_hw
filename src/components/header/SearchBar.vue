<script setup>
import { ref } from 'vue';

const emit = defineEmits(['search']);
 
const searchTerm = ref("");
const priceFrom = ref(0);
const priceTo = ref(1000000);

function search() {
  emit('search', {'searchTerm': searchTerm, 
                    'priceFrom': priceFrom, 
                    'priceTo': priceTo});
}
</script>

<template>
<div class="input">
    <input type="text" 
        placeholder="Название"
        v-model="searchTerm" 
        @input="search" />
    <label>от 
        <input type="number" 
            v-model="priceFrom"
            @input="search" />
    </label>
    <label>до 
        <input type="number" 
            v-model="priceTo" 
            @input="search"/>$
    </label>
</div>
</template>

<style scoped>
.input{
    width: 49%;
    margin: 1.5% 0;
    cursor: auto;    
    padding: 0.6em 0em;
}

input{
    height: 45%;
    margin-right: 1%;
}
input[type=text]{
    width: 56%;
    
}
input[type=number]{
    width: 8%;
}

@media (max-width: 785px) {
    .input{
        width: 80%;
    }
}

@media (max-width: 535px) {
    input[type=text]{
        width: 100%;
        text-align: center;
    }
    input[type=number]{
        width: 20%;
        margin-bottom: 10%;
    }
}
</style>
