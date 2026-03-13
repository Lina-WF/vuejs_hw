import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useProductsStore } from './products';

export const useFilterStore = defineStore('filter', () => {
    const productStore = useProductsStore();
    const { data, isLoading } = storeToRefs(productStore);

    const filter = ref({'searchTerm': "", 
                    'priceFrom': 0, 
                    'priceTo': 1000000});

    const filteredProducts = computed(() => !isLoading.value ? data.value.filter(product => 
                    (productStore.checkProductInfo(product.title, filter.value.searchTerm) ||
                    productStore.checkProductInfo(product.description, filter.value.searchTerm) ||
                    productStore.checkProductInfo(product.category, filter.value.searchTerm)) &&
                    productStore.checkProductPrice(product.price, filter.value.priceFrom, filter.value.priceTo)) : []) ;

    function clearFilter(){
        filter.value = {'searchTerm': "", 
                    'priceFrom': 0, 
                    'priceTo': 1000000};
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

    return { filter, filteredProducts, clearFilter, setFilter}
})