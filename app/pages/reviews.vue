<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import Post from '../components/Post.vue';
import { computed, onMounted, watch } from 'vue';
import { socket } from '../composables/socket.client';
import { useAuthStore } from '../../stores/auth';

const POSTS = gql`
    query PostsQuery {
        posts {
            author {
                name
                avatar(size: S_128)
            }
            id
            text
            title
        }
    }
`;

const { result, loading, refetch } = useQuery(POSTS, null, {
  fetchPolicy: 'network-only'
});

const authStore = useAuthStore();
const auth = computed(() => authStore.isAuthed);

onMounted(() => {
  socket.on("update posts", () => {
    refetch();
  })
});
</script>

<template>
  <h1>Отзывы</h1>
  <ClientOnly>
    <NuxtLink to="/newPost" v-if="auth">
      <button style="width: 50%;">Добавить новый пост</button>
    </NuxtLink>
  </ClientOnly>
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
