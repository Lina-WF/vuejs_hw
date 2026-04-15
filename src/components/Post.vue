<script setup lang="ts">
import type { Post } from '@/types';


const prop = defineProps<{
  post: Post,
}>();

</script>

<template>
    <div class="card">
        <div class="info">
        <div class="user"><img :src="post.author.avatar" :alt="'Аватарка ' + post.author.name"/> <p>{{ post.author.name }}</p></div>  
        <p class="big">
            <b>{{ post.title }}</b>
        </p>
        
        <p>
            {{ post.text }}
        </p>
      </div>
    </div>
</template>

<style scoped>
.card {
  width: 50%;
  min-width: 300px;
  background-color: rgba(148, 117, 163, 0.331);
  border-radius: 15px;
  padding: 3%;
  margin: 1%;
}

.user{
  display: flex;
  align-items: center; 
  flex-wrap: wrap;
  gap: 15px;
}

img {
  height: 40px;
  width: 40px;
  object-fit: cover;
}

.info {
    text-align: left;
    margin: 0 5%;
}

p {
    margin: 5px 0;
}
</style>