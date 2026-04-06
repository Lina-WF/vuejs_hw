<script setup lang="ts">
import type { deliveryData } from '@/types';
import { Form, Field, ErrorMessage, type GenericObject } from 'vee-validate';



const emit = defineEmits<{
    (e: 'submited', deliveryData: deliveryData): void;
}>();

const delivery = {
  fio: (value: string) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите ФИО';
  },
  bday: (value: string) => {
    if (value && value.length) {
        let overageDate = new Date(); 
        overageDate.setFullYear(overageDate.getFullYear() - 18);
        let customDate = new Date(value)
        if (overageDate > customDate){
            return true;
        }
        return 'Вам должно быть больше 18';
    }
    return 'Введите дату рождения';
  },
  city: (value: string) => {
    if (value && value.length) {
      return true;
    }
    return 'Введите город';
  },
  street: (value: string) => {
    if (value && value.length) {
      return true;
    }
    return 'Введите улицу';
  },
  building: (value: string) => {
    if (value && value.length) {
      return true;
    }
    return 'Введите номер дома';
  },
  apartment: (value: string) => {
    if (value && value.length) {
      return true;
    }
    return 'Введите номер квартиры';
  },
};

function onSubmit(values: GenericObject){
    emit('submited', values as deliveryData);
}
</script>

<template>
<div>
    <Form :validation-schema="delivery" method="POST" @submit="onSubmit">
        <div class="big"><b>Данные о доставке:</b></div><br><br>
        <div class="input">
            <label>ФИО 
                <Field type="text" 
                    name="fio" 
                    placeholder="Фамилия Имя Отчество"/>
            </label><br>
            <ErrorMessage name="fio" />
        </div><br>
        <div class="input">
            <label>Дата рождения 
                <Field type="date" 
                    name="bday" />
            </label><br>
            <ErrorMessage name="bday" />
        </div><br>
        <div class="input">
            <label>Город 
                <Field type="text" 
                    name="city"
                    placeholder="Город"/>
            </label><br>
            <ErrorMessage name="city" />
        </div><br>
        <div class="input">
            <label>Улица 
                <Field type="text" 
                    name="street"
                    placeholder="Улица"/>
            </label><br>
            <ErrorMessage name="street" />
        </div><br>
        <div class="input">
            <label>Дом 
                <Field type="text" 
                    name="building"
                    placeholder="00 к0 п0"/>
            </label><br>
            <ErrorMessage name="building" />
        </div><br>
        <div class="input">
            <label>Квартира 
                <Field type="text" 
                    name="apartment"
                    placeholder="00"/>
            </label><br>
            <ErrorMessage name="apartment" />
        </div>
        <br>
        <button>Далее</button>
    </Form>
</div>
</template>

<style scoped>
.input {
    width: 50%;
    margin: auto;
}
</style>
