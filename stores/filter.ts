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

    function setFilter(which: string, newFilter: string | number){
        switch (which){
            case 'searchTerm':
                filter.value.searchTerm = newFilter as string;
                break;
            case 'priceFrom':
                filter.value.priceFrom = newFilter as number;
                break;
            case 'priceTo':
                filter.value.priceTo = newFilter as number;
                break;
        }
    }

    return { filter, clearFilter, setFilter}
})