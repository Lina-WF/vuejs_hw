import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Filter } from '../types';

export const useFilterStore = defineStore('filter', () => {

    const filter = ref({searchTerm: "", 
                    priceFrom: 0, 
                    priceTo: 1000000});

    function clearFilter(){
        filter.value = {searchTerm: "", 
                    priceFrom: 0, 
                    priceTo: 1000000};
    }

    function setFilter(newFilter: Filter){
        switch (newFilter.which){
            case 'searchTerm':
                filter.value.searchTerm = newFilter.filter;
                break;
            case 'priceFrom':
                filter.value.priceFrom = newFilter.filter;
                break;
            case 'priceTo':
                filter.value.priceTo = newFilter.filter;
                break;
        }
    }

    return { filter, clearFilter, setFilter}
})