<script setup>
import { useFilterStore } from '../../stores/filter';
import { useUserStore } from '../../stores/user';
import { computed } from 'vue';

const filterStore = useFilterStore();
const userStore = useUserStore();

const auth = computed(() => userStore.user.loggedIn);
</script>

<template>
<RouterLink :to="{name:'home'}" class="nav-item" @click="filterStore.clearFilter()">Главная</RouterLink>
<RouterLink :to="{name:'cart'}" class="nav-item">Корзина</RouterLink>
<RouterLink :to="{name:'reviews'}" class="nav-item">Посты</RouterLink>
<RouterLink :to="{name:'login'}" class="nav-item" v-if="!auth">Вход</RouterLink>
<a class="nav-item" v-else @click="userStore.logOut()">Выход</a>
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
