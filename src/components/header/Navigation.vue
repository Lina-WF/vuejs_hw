<script setup>
import { useRouter } from 'vue-router';

defineEmits(['clearFilter']);

const auth = localStorage.auth;

const router = useRouter();

function logOut(){
    localStorage.auth = "";
    router.go(0);
}
</script>

<template>
<RouterLink :to="{name:'home'}" @click="$emit('clearFilter')" class="nav-item">Главная</RouterLink>
<RouterLink :to="{name:'cart'}" class="nav-item">Корзина</RouterLink>
<RouterLink :to="{name:'login'}" class="nav-item" v-if="auth != 'admin'">Вход</RouterLink>
<a class="nav-item" v-else @click="logOut()">Выход</a>
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
