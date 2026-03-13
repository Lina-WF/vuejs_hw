import { defineStore } from 'pinia'
import { onBeforeMount, ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
    const data = ref([]);
    const isLoading = ref(false);

    async function loadProducts() {
        return fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((products) => {data.value = products; isLoading.value = false;});
    }

    function checkProductInfo(info, searchTerm){
        const check = info.toLowerCase().includes(searchTerm.toLowerCase());
        return check;
    }

    function checkProductPrice(price, from, to){
        const check = from <= price && price <= to;
        return check;
    }

    function addProduct(product){
        data.value.push(product);
    }

    function findProduct(id){
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