<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { computed } from 'vue';

const prop = defineProps({lastId: Number});
const emit = defineEmits(['submited', 'clearFilter']);

const id = computed(() => prop.lastId + 1);

const product = {
  title: (value) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите название товара';
  },
  price: (value) => {
    if (value) {
        return true;
    }
    return 'Введите цену';
  },
  description: (value) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите описание товара';
  },
  category: (value) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите категорию товара';
  },
  image: (value) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите ссылку на изображение';
  },
};

function onSubmit(values) {
  const res = Object.assign(values, {"rating":{"rate":0,"count":0}});
  emit('submited', res);
}
</script>

<template>
<div class="glass">
    <Form :validation-schema="product" method="POST" @submit="onSubmit">
        <div class="big"><b>Новый товар:</b></div><br><br>
        <Field type="hidden" name="id" v-model="id" />
        <div class="input">
            <label>Название
                <Field type="text" 
                    name="title" 
                    placeholder="Название"/>
            </label><br>
            <ErrorMessage name="title" />
        </div><br>
        <div class="input">
            <label>Цена 
                <Field type="number" 
                    name="price"
                    placeholder="Цена"/>
            </label><br>
            <ErrorMessage name="price" />
        </div><br>
        <div class="input">
            <label>Описание 
                <Field as="textarea" 
                    name="description" 
                    placeholder="Описание"/>
            </label><br>
            <ErrorMessage name="description" />
        </div><br>
        <div class="input">
            <label>Категория
                <Field type="text" 
                    name="category" 
                    placeholder="Категория"/>
            </label><br>
            <ErrorMessage name="category" />
        </div><br>
        <div class="input">
            <label>Ссылка на изображение
                <Field type="text" 
                    name="image" 
                    placeholder="Ссылка"/>
            </label><br>
            <ErrorMessage name="image" />
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
