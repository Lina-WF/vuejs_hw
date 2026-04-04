<script setup>
import gql from 'graphql-tag';
import NewPostForm from '../components/forms/NewPostForm.vue';
import { socket } from '../services/socket';
import { useMutation } from '@vue/apollo-composable';
import { useRouter } from 'vue-router';

const router = useRouter();

const ADDPOST = gql`
        mutation AddNewPost($post: PostInput!) {
            addPost(post: $post) {
                id
            }
        }
    `;

const { mutate, onDone  } = useMutation(ADDPOST);

function newPost(post){
    mutate ({ 
        post: post 
    });
}

onDone((res) => {
    socket.emit('add post', res);
    router.push('/reviews');
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
