<script setup>
import { useRouter } from 'vue-router';
import LoginForm from '../components/forms/LoginForm.vue';
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

const error = ref(false);
const router = useRouter();
const userStore = useUserStore();

function checkAuth(data){
    if (data.login === userStore.user.login && data.password === userStore.user.password){
        userStore.$subscribe((mutation, state) => localStorage.setItem('user', JSON.stringify(state)));
        userStore.logIn();
        router.push("/newProduct")
    }
    else {
        error.value = true;
    }
}
</script>

<template>
    <div class="box">
        <div class="card">
            <LoginForm class="glass" @submited="(e) => checkAuth(e)" />
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
