<script setup lang="ts">
import { Form, Field, ErrorMessage, type GenericObject } from 'vee-validate';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductsStore } from '../../../stores/products';
import type { product } from '../../../types';

const emit = defineEmits<{
    (e: 'submited', product: product): void;
}>();

const productStore = useProductsStore();
const { data } = storeToRefs(productStore);
const id = computed(() => data.value?.length ? data.value.at(-1)!.id + 1 : 0);

type newProduct = {"id": number,
                    "title": string,
                    "price": number,
                    "description": string,
                    "category": string,
                    "image":string};

const product = {
  title: (value: string) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите название товара';
  },
  price: (value: number) => {
    if (value) {
        return true;
    }
    return 'Введите цену';
  },
  description: (value: string) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите описание товара';
  },
  category: (value: string) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите категорию товара';
  },
  image: (value: string) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите ссылку на изображение';
  },
};

function onSubmit(values: GenericObject) {
  const res = Object.assign(values as newProduct, {rating: {rate: 0, count: 0}});
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
