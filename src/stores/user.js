import { defineStore } from 'pinia'
import { reactive } from 'vue';

export const useUserStore = defineStore('user', () => {
    const saved = localStorage.getItem('user');
    const user = reactive(saved ? JSON.parse(saved).user : {role: 'admin',
                                                    login: 'admin',
                                                    password: '123',
                                                    loggedIn: false
                                                    });
                                                    

    function logIn(){
        user.loggedIn = true;
    }

    function logOut(){
        user.loggedIn = false;
    }

    return { user, logIn, logOut}
})