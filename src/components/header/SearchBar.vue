<script setup>
import { computed } from 'vue';
import { useFilterStore } from '../../stores/filter';
import { storeToRefs } from 'pinia';


const filterStore = useFilterStore();
const { filter } = storeToRefs(filterStore);

const searchTerm = computed(() => filter.value.searchTerm);
const priceFrom = computed(() => filter.value.priceFrom);
const priceTo = computed(() => filter.value.priceTo);
</script>

<template>
<div class="input">
    <input type="text" 
        placeholder="Название"
        :value="searchTerm" 
        @input="filterStore.setFilter('searchTerm', $event.target.value)" />
    <label>от 
        <input type="number" 
            :value="priceFrom"
            @input="filterStore.setFilter('priceFrom', $event.target.value)" />
    </label>
    <label>до 
        <input type="number" 
            :value="priceTo" 
            @input="filterStore.setFilter('priceTo', $event.target.value)"/>$
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
