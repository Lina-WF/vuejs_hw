import { defineStore } from 'pinia'
import { reactive } from 'vue';

export const useUserStore = defineStore('user', () => {
    const saved = localStorage.getItem('user');
    const user = reactive(saved ? JSON.parse(saved) : {role: 'admin',
                                                    login: 'admin',
                                                    password: '123',
                                                    loggedIn: false
                                                    });
                                                    

    function logIn(){
        user.loggedIn = true;
        localStorage.setItem('user', JSON.stringify(user));
    }

    function logOut(){
        user.loggedIn = false;
        localStorage.setItem('user', JSON.stringify(user));
    }

    return { user, logIn, logOut}
})