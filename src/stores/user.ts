import { defineStore } from 'pinia'
import { useAuthStore } from './auth';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    const saved = localStorage.getItem('user');
    const user = ref(saved ? JSON.parse(saved) : null);
    const listOfUsers = [{id: 1, login: 'admin', password: '123'}, {id: 2, login: 'user', password: '456'}]
    const authStore = useAuthStore();                        

    function logIn(login: string, password: string){
        const authUser = listOfUsers.find((user) => user.login === login && user.password === password);
        if (authUser){
            user.value = authUser;
            if (user.value.id === 1){
                authStore.setJwt(authStore.adminJWT);
            }
            else{
                authStore.setJwt(authStore.userJWT);
            }
            localStorage.setItem('user', JSON.stringify(user.value));
        }
        return authStore.isAuthed;
    }

    function logOut(){
        user.value = null;
        authStore.delJWT();
        localStorage.removeItem('user');
    }

    return { user, logIn, logOut}
})