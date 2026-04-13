import { useAuthStore } from "../../stores/auth";
import { useUserStore } from "../../stores/user";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  const userStore = useUserStore();
  
  const date = new Date();
  if (authStore.exp && authStore.exp <= date.setDate(date.getDate())){
    userStore.logOut();
    return {name: 'login', query: {back: from.name as string}};
  }
});