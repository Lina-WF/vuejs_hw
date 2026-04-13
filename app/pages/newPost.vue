<script setup lang="ts">
import gql from 'graphql-tag';
import NewPostForm from '../components/forms/NewPostForm.vue';
import { socket } from '../composables/socket.client';
import type { newPost } from '../../types';

definePageMeta({
  role: 'any',
})

const ADDPOST = gql`
        mutation AddNewPost($post: PostInput!) {
            addPost(post: $post) {
                id
            }
        }
    `;

const { mutate, onDone  } = useMutation(ADDPOST);

function newPost(post: newPost){
    mutate ({ 
        post: post 
    });
}

onDone((res) => {
    socket.emit('add post', res);
    navigateTo("/reviews");
});
</script>

<template>
    <div class="box">
        <div class="card">
            <NewPostForm @submited="newPost($event)"/>
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
