import { defineStore } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import type { Product } from '../types.js';

export const useProductsStore = defineStore('products', () => {
    const data = ref<Product[]>([]);
    const isLoading = ref(false);

    async function loadProducts() {
        // return fetch('https://fakestoreapi.com/products')
        return fetch('/products.json')
            .then((res) => res.json())
            .then((products) => {data.value = products; isLoading.value = false;});
    }

    function checkProductInfo(info: string, searchTerm: string){
        const check = info.toLowerCase().includes(searchTerm.toLowerCase());
        return check;
    }

    function checkProductPrice(price: number, from: number, to: number){
        const check = from <= price && price <= to;
        return check;
    }

    function addProduct(product: Product){
        data.value.push(product);
    }

    function findProduct(id: number){
        return data.value.find(product => (product.id == id));
    }

    onBeforeMount(() => {
        if (data.value.length === 0){
            isLoading.value = true;
            loadProducts();
        }
    })

    return { data, isLoading, loadProducts, checkProductInfo, checkProductPrice, addProduct, findProduct };
})