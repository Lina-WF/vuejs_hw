import { useAuthStore } from "../../stores/auth";


export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (to.meta.role && to.meta.role !== authStore.role && !(to.meta.role === 'any' && authStore.isAuthed)){
    return navigateTo({path: '/login', query: { back: to.fullPath }});
  }
});