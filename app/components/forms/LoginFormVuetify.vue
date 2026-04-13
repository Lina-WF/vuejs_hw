<script setup lang="ts">
import type { SubmitEventPromise } from 'vuetify';
import type { authData } from '../../../types';

const emit = defineEmits<{
    (e: 'submited', authData: authData): void;
}>();

const login = ref("");
const loginRules = [
  (value: string) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите логин';
  },
];

const password = ref("");
const passwordRules = [
  (value: string) => {
    if (value && value.length) {
        return true;
    }
    return 'Введите пароль';
  },
];

async function onSubmit(event: SubmitEventPromise) {
  const { valid } = await event;
  if (!valid) {
    return;
  }
  else{
    emit('submited', {login: login.value, password: password.value})
  }
}
</script>

<template>
    <v-app>
        <v-sheet class="mx-auto" width="300">
            <v-form fast-fail @submit.prevent="onSubmit">
            <v-text-field
                v-model="login"
                :rules="loginRules"
                label="First name"
            ></v-text-field>

            <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Last name"
            ></v-text-field>

            <v-btn class="mt-2" type="submit" block>Submit</v-btn>
            </v-form>
        </v-sheet>
    </v-app>
</template>

<style>
.v-application__wrap {
  min-height: fit-content !important; 
}
</style>