<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../../stores/user';
import type { AuthData } from '../../types';
import { useAuthStore } from '../../stores/auth';
import LoginFormVuetify from '~/components/forms/LoginFormVuetify.vue';

definePageMeta({
  middleware: defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    if (authStore.isAuthed){
      return navigateTo("/");
    }
  })
})

const error = ref(false);
const route = useRoute();
const userStore = useUserStore();

function checkAuth(data: AuthData){
    const auth = userStore.logIn(data.login, data.password);
    if (auth){
        const redirectPath = route.query.back ? String(route.query.back) : '/';
        navigateTo(redirectPath);
    }
    else {
        error.value = true;
    }
}
</script>

<template>
    <div class="box">
        <div class="card">
            <LoginFormVuetify class="glass" @submited="checkAuth($event)" />
            <div v-if="error">
                <span role="alert">Неверный логин или пароль</span>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.box {
    width: 100%;
}

.card {
    width: 60%;
    min-width: 300px;
}

@media (max-width: 550px){
	.card {
        width: 100%;
    }
}
</style>
