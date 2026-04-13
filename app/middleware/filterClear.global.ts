import { useFilterStore } from "../../stores/filter";

export default defineNuxtRouteMiddleware((to, from) => {
  const filterStore = useFilterStore();
  
  filterStore.clearFilter();
});