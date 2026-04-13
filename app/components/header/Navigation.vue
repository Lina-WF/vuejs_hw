<script setup lang="ts">
import { useAuthStore } from '../../../stores/auth';
import { useFilterStore } from '../../../stores/filter';
import { computed } from 'vue';

const filterStore = useFilterStore();
const authStore = useAuthStore();
const auth = computed(() => authStore.isAuthed);
</script>

<template>
<NuxtLink to="/" class="nav-item" @click="filterStore.clearFilter()">Главная</NuxtLink>
<NuxtLink to="/cart" class="nav-item">Корзина</NuxtLink>
<NuxtLink to="reviews" class="nav-item">Посты</NuxtLink>
<ClientOnly>
    <NuxtLink to="login" class="nav-item" v-if="!auth">Вход</NuxtLink>
    <NuxtLink to="profile" class="nav-item" v-else>Профиль</NuxtLink>
</ClientOnly>
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
