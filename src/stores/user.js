import { defineStore } from 'pinia'
import { reactive } from 'vue';

export const useUserStore = defineStore('user', () => {
    const saved = localStorage.getItem('user');
    const user = reactive(saved ? JSON.parse(saved) : {'id': 1,
                                                    'role': 'admin',
                                                    'login': 'admin',
                                                    'password': '123',
                                                    'loggedIn': false});
    if (!user.id){
        user.id = 1;
    }
                                                    

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