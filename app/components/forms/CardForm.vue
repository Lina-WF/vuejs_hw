<script setup lang="ts">
import type { CardData } from '../../../types';
import { Form, Field, ErrorMessage } from 'vee-validate';



const emit = defineEmits<{
    (e: 'submited', cardData: CardData): void;
}>();

const card = {
  cardNum: (value: string) => {
    if (value && value.length) {
        let nums = value.split(" ").filter(num => +num && num.length == 4);
        if (nums.length == 4) {
            return true;
        }
        return 'Введите валидный номер карты';
    }
    return 'Введите номер карты';
  },
  cardName: (value: string) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите имя и фамилю';
  },
  cardYear: (value: string) => {
    if (value && value.length == 5) {
        let nums = value.split("/").filter(num => +num && num.length == 2);
        if (nums.length == 2) {
            return true;
        }
        return 'Введите валидные год и месяц';
    }
    return 'Введите год и месяц';
  },
  cardCode: (value: string) => {
    if (value && value.length) {
        if (+value && value.length == 3){
            return true;
        }
        return 'Введите валидный код';
    }
    return 'Введите код';
  },
  agreement: (value: string) => {
    if (value === "yes") {
        return true;
    }
    return 'Необходимо согласие';
  },
};

function onSubmit(values: CardData){
    emit('submited', values)
}
</script>

<template>
<div>
    <Form :validation-schema="card" method="POST" @submit="(values) => onSubmit(values as CardData)">
        <div class="big"><b>Данные карты:</b></div><br><br>
        <div class="input">
            <label>Номер карты 
                <Field type="text" 
                    name="cardNum" 
                    placeholder="1234 1234 1234 1234"/>
            </label><br>
            <ErrorMessage name="cardNum" />
        </div><br>
        <div class="input">
            <label>Имя 
                <Field type="text" 
                    name="cardName"
                    placeholder="Имя Фамилия"/>
            </label><br>
            <ErrorMessage name="cardName" />
        </div><br>
        <div class="input">
            <label>Год 
                <Field type="text" 
                    name="cardYear" 
                    placeholder="00/00"/>
            </label><br>
            <ErrorMessage name="cardYear" />
        </div><br>
        <div class="input">
            <label>CVC/CVV 
                <Field type="password" 
                    name="cardCode" 
                    placeholder="000"/>
            </label><br>
            <ErrorMessage name="cardCode" />
        </div><br>
        <div class="input">
            <label>
                <Field type="checkbox" 
                    name="agreement" 
                    value="yes" /> 
            Я согласен с правилами обработки заказа </label><br>
            <ErrorMessage name="agreement" />
        </div><br>
        <button>Оплатить</button>
    </Form>
</div>
</template>

<style scoped>
.input {
    width: 50%;
    margin: auto;
}
</style>
