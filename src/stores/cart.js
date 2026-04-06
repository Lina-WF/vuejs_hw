import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useProductsStore } from './products';

export const useCartStore = defineStore('cart', () => {
    const productStore = useProductsStore();
    const { data } = productStore;

    const cart = ref([]);
    const productsInCart = computed(() => data.filter((product) => checkInCart(product.id)))

    function incCart(id){
        const cartId = cart.value.findIndex(item => (item.id == id))
        if (cartId != -1)
        {
            cart.value[cartId].countInCart++;
        }
        else {
            cart.value.push({'id': Number(id), 'countInCart': 1});
        }
    }

    function decCart(id){
        const cartId = cart.value.findIndex(item => (item.id == id))
        
        if (cart.value[cartId].countInCart != 1)
        {
            cart.value[cartId].countInCart--;
        }
        else {
            cart.value.splice(cartId, 1);
        }
    }

    function clearCart(){
        cart.value = [];
    }

    function checkInCart(id){
        const productObj = cart.value.find(product => (product.id == id));
         return productObj ? productObj.countInCart : 0;
    }

    function countSum(){
        return productsInCart.value.reduce((sum, product) => {
            return sum + product.price * checkInCart(product.id);
        }, 0);
    }

    return { cart, productsInCart, incCart, decCart, clearCart, checkInCart, countSum}
})