import { defineStore } from 'pinia'
import { onBeforeMount, ref } from 'vue'
import type { product } from '../types';

export const useProductsStore = defineStore('products', () => {
    const { data, pending: isLoading, error } = useFetch<product[]>('http://localhost:5173/products.json', {
        transform: (res) => {
            return typeof res === 'string' ? JSON.parse(res) : res
        }
    })

    function checkProductInfo(info: string, searchTerm: string){
        const check = info.toLowerCase().includes(searchTerm.toLowerCase());
        return check;
    }

    function checkProductPrice(price: number, from: number, to: number){
        const check = from <= price && price <= to;
        return check;
    }

    function addProduct(product: product){
        data.value?.push(product);
    }

    function findProduct(id: number){
        return data.value?.find(product => (product.id == id));
    }

    

    return { data, isLoading, checkProductInfo, checkProductPrice, addProduct, findProduct };
})