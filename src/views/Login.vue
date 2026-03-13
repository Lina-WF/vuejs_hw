<script setup>
import { useRouter } from 'vue-router';
import LoginForm from '../components/forms/LoginForm.vue';
import { ref } from 'vue';

const error = ref(false);
const router = useRouter();

function checkAuth(data){
    if (data.login === "admin" && data.password === "123"){
        localStorage.auth = "admin";
        router.go(0);
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
