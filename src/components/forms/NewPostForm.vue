<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useUserStore } from '../../stores/user';

const emit = defineEmits(['submited']);

const userStore = useUserStore();

const post = {
  title: (value) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите заголовок';
  },
  text: (value) => {
    if (value) {
        return true;
    }
    return 'Введите текст';
  },
};

function onSubmit(values) {
  emit('submited', {authorId: userStore.user.id, title: values.title, text: values.text});
}
</script>

<template>
<div class="glass">
    <Form :validation-schema="post" method="POST" @submit="onSubmit">
        <div class="big"><b>Новый пост:</b></div><br><br>
        <div class="input">
            <label>Заголовок
                <Field type="text" 
                    name="title" 
                    placeholder="Заголовок"/>
            </label><br>
            <ErrorMessage name="title" />
        </div><br>
        <div class="input">
            <label>Текст 
                <Field as="textarea" 
                    name="text" 
                    placeholder="Описание"/>
            </label><br>
            <ErrorMessage name="text" />
        </div><br>
        <button class="back">Сохранить</button>
    </Form>
</div>
</template>

<style scoped>
.input {
    width: 50%;
    margin: auto;
}

@media (max-width: 490px){
	.glass{
		width: 100%;
		left: 0%;
        padding-top: 20%;
	}
}
</style>
