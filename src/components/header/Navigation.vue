<script setup lang="ts">
import { useAuthStore } from '../../stores/auth';
import { useFilterStore } from '../../stores/filter';
import { computed } from 'vue';

const filterStore = useFilterStore();
const authStore = useAuthStore();
const auth = computed(() => authStore.isAuthed);
</script>

<template>
<RouterLink :to="{name:'home'}" class="nav-item" @click="filterStore.clearFilter()">Главная</RouterLink>
<RouterLink :to="{name:'cart'}" class="nav-item">Корзина</RouterLink>
<RouterLink :to="{name:'reviews'}" class="nav-item">Посты</RouterLink>
<RouterLink :to="{name:'login'}" class="nav-item" v-if="!auth">Вход</RouterLink>
<RouterLink :to="{name:'profile'}" class="nav-item" v-else>Профиль</RouterLink>
</template>

<style scoped>
.nav-item{
    padding: 0 5%;
    line-height: 3em;
    cursor: pointer;
}

@media (max-width: 785px) {
    .nav-item{
        display: block;
    }
}
</style>
