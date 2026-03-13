import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/Login.vue'
import NewProduct from '../views/NewProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/product/:idProduct',
      name: 'product',
      component: Product,
      props: true,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/newProduct/:idProduct',
      name: 'newProduct',
      component: NewProduct,
      props: true,
    },
//    {
//      path: '/:pathMatch(.*)*',
//      name: 'not-found',
//      component: Contact,
//    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

router.beforeEach((to, from) => {
  if (to.name === 'newProduct' && localStorage.auth != "admin"){
    return {name: 'login'};
  }
  else if (to.name === 'login' && localStorage.auth === "admin"){
    return {name: 'home'};
  }
  else{
    return true;
  }
});

export default router