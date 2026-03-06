<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';

const emit = defineEmits(['submited']);

const login = {
  login: (value) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите логин';
  },
  password: (value) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите пароль';
  },
};

function onSubmit(values){
    emit('submited', values)
}
</script>

<template>
<div>
    <Form :validation-schema="login" method="POST" @submit="onSubmit">
        <div class="big"><b>Вход</b></div><br><br>
        <div class="input">
            <label>Логин 
                <Field type="text" 
                    name="login" 
                    placeholder="Логин"/>
            </label><br>
            <ErrorMessage name="login" />
        </div><br>
        <div class="input">
            <label>Пароль 
                <Field type="password" 
                    name="password" 
                    placeholder="Пароль"/>
            </label><br>
            <ErrorMessage name="password" />
        </div><br>
        <button>Войти</button>
    </Form>
</div>
</template>

<style scoped>
.input {
    width: 50%;
    margin: auto;
}

</style>
