<script setup lang="ts">
import { computed, ref } from 'vue';
import { useUserStore } from '../../stores/user';
import gql from 'graphql-tag';

definePageMeta({
  role: 'any',
})

const userStore = useUserStore();
const userId = userStore.user.id;


const USER = gql`
    query UserQuery($id: ID!) {
        user(id: $id) {
            name
            email
            avatar(size: S_512)
        }
    }
`;

const { result, loading } = useQuery(USER, computed(() => ({
                                                    id: userId
                                                })));
</script>

<template>
<div class="box">
    <div class="card">
        <div id="loading" v-if="loading">Загрузка...</div>
        <div class="box" v-else>
            <div class="img">
                <img :src="result.user.avatar" :alt="'Аватарка ' + result.user.name"/>
            </div>
            <div class="info">
                <p >
                    <b>
                    {{ result.user.name }}
                    </b>
                </p>
                <p>
                    Логин: {{ userStore.user?.login }}
                </p>
                <p>
                    Email: {{ result.user.email }}
                </p>
                <NuxtLink to="/login" @click="userStore.logOut()"><button class="back">Выйти</button></NuxtLink>
            </div>
            <NuxtLink to="/"><button class="back">В каталог</button></NuxtLink>
        </div>
    </div>
</div>
</template>

<style scoped>
div.card {
    background-color: rgba(148, 117, 163, 0.331);
    border-radius: 15px;
    padding: 3%;
    margin: 1%;
    width: 60%;
    min-width: 300px;
    text-align: left;
}

.img {
    width: 44%;
    min-width: 250px;
    padding: 3%;
    
}

.info {
    width: 44%;
    min-width: 250px;
    padding: 3%;
}

img {
  max-width: 250px;
  height: 100%;
  object-fit: contain;
}

button, a {
    width: 100%;
    margin-top: 5px;
    margin-left: -2px;
}

a {
    margin: 0 12%;
}
</style>
