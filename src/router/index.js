import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/Login.vue'
import NewProduct from '../views/NewProduct.vue'
import { useFilterStore } from '../stores/filter'
import { useUserStore } from '../stores/user'
import Reviews from '../views/Reviews.vue'
import NewPost from '../views/NewPost.vue'

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
      path: '/newProduct',
      name: 'newProduct',
      component: NewProduct,
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews,
    },
    {
      path: '/newPost',
      name: 'newPost',
      component: NewPost,
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
  const filterStore = useFilterStore();
  filterStore.clearFilter();

  const userStore = useUserStore();
  
  if (to.name === 'newProduct' && !userStore.user.loggedIn){
    return {name: 'login'};
  }
  else if (to.name === 'login' && userStore.user.loggedIn){
    return {name: 'home'};
  }
  else{
    return true;
  }
});

export default router