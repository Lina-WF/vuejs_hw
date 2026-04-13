import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/Login.vue'
import NewProduct from '../views/NewProduct.vue'
import Reviews from '../views/Reviews.vue'
import NewPost from '../views/NewPost.vue'
import Profile from '../views/Profile.vue'
import { useFilterStore } from '../stores/filter'
import { useAuthStore } from '../stores/auth'
import { useUserStore } from '../stores/user'

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
      beforeEnter() {
        const authStore = useAuthStore();
        if (authStore.isAuthed){
          router.replace({name: 'home'});
        }
      }
    },
    {
      path: '/newProduct',
      name: 'newProduct',
      component: NewProduct,
      meta: {
        role: 'admin',
      }
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
      meta: {
        role: 'any',
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        role: 'any',
      }
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

  const authStore = useAuthStore();
  const userStore = useUserStore();
  const date = new Date();
  if (to.meta.role && to.meta.role !== authStore.role && !(to.meta.role === 'any' && authStore.isAuthed)){
    return {name: 'login', query: {back: to.fullPath}};
  }
  else if (authStore.exp <= date.setDate(date.getDate())){
    userStore.logOut();
    return {name: 'login', query: {back: from.name}};
  }

  return true;
});

export default router