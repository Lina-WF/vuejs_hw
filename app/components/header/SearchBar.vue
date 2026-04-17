<script setup lang="ts">
import { computed } from 'vue';
import { useFilterStore } from '../../../stores/filter';


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
        v-model="searchTerm" 
        @input="filterStore.setFilter({which: 'searchTerm', filter: ($event.target as HTMLInputElement).value})" />
    <label>от 
        <input type="number" 
            v-model="priceFrom"
            @input="filterStore.setFilter({which: 'priceFrom', filter: +($event.target as HTMLInputElement).value})" />
    </label>
    <label>до 
        <input type="number" 
            v-model="priceTo" 
            @input="filterStore.setFilter({which: 'priceTo', filter: +($event.target as HTMLInputElement).value})"/>$
    </label>
</div>
</template>

<style scoped>
.input{
    width: 57%;
    margin: 1.5% 0;
    cursor: auto;    
    padding: 0.6em 0em;
}

input{
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
