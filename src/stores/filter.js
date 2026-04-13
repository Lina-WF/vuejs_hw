import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilterStore = defineStore('filter', () => {

    const filter = ref({searchTerm: "", 
                    priceFrom: 0, 
                    priceTo: 1000000});

    function clearFilter(){
        filter.value = {searchTerm: "", 
                    priceFrom: 0, 
                    priceTo: 1000000};
    }

    function setFilter(which, newFilter){
        switch (which){
            case 'searchTerm':
                filter.value.searchTerm = newFilter;
                break;
            case 'priceFrom':
                filter.value.priceFrom = newFilter;
                break;
            case 'priceTo':
                filter.value.priceTo = newFilter;
                break;
        }
    }

    return { filter, clearFilter, setFilter}
})