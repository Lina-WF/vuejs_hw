<script setup>
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import Post from '../components/Post.vue';
import { useUserStore } from '../stores/user';
import { computed, onMounted, watch } from 'vue';
import { socket } from '../services/socket';

const POSTS = gql`
    query PostsQuery {
        posts {
            author {
                name
            }
            id
            text
            title
            image
        }
    }
`;

const { result, loading, refetch } = useQuery(POSTS);

const userStore = useUserStore();
const auth = computed(() => userStore.user.loggedIn);

onMounted(() => {
  socket.on("update posts", () => {
    refetch();
  })
});
</script>

<template>
  <h1>Отзывы</h1>
  <RouterLink :to="{name: 'newPost'}" v-if="auth">
    <button style="width: 50%;">Добавить новый пост</button>
  </RouterLink>
  <div id="loading" v-if="loading">Загрузка...</div>
  <div class="box" v-else>
    <Post v-for="post in result.posts" 
          :key="post.id" 
          :post="post"
    />
  </div>
</template>

<style scoped>
div{
  width: 100%;
}
</style>
