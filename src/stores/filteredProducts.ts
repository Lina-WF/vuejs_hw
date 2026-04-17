import { defineStore, storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useProductsStore } from './products';
import { useFilterStore } from './filter';

export const useFilteredProductsStore = defineStore('filtered products', () => {
    const productStore = useProductsStore();
    const { data, isLoading } = storeToRefs(productStore);

    const filterStore = useFilterStore();
    const { filter } = storeToRefs(filterStore);

    const filteredProducts = computed(() => !isLoading.value ? data.value.filter(product => 
                    (productStore.checkProductInfo(product.title, filter.value.searchTerm) ||
                    productStore.checkProductInfo(product.description, filter.value.searchTerm) ||
                    productStore.checkProductInfo(product.category, filter.value.searchTerm)) &&
                    productStore.checkProductPrice(product.price, filter.value.priceFrom, filter.value.priceTo)) : []);

    return { filteredProducts }
})