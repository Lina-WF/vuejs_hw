import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore('auth', () => {
  const adminJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOjEsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3NTQxMTQyOTYzOSwiZXhwIjoxNzc4MDg5ODI5NjM5fQ.OAcwwnBaCVl-3RKw2eoeqlxvxuT1X_4y-vmcC3p6S9U";
  const userJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOjIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzc1NDExNDI5NjM5LCJleHAiOjE3NzgwODk4Mjk2Mzl9.0KLVjCyvZNntjPfmc5dLedIF4D7vKzpuBpV-RuruE-E";
  
  const currentJWT = ref<string | null>();
  if (import.meta.client) {
      currentJWT.value = localStorage.getItem('jwt');
  }

  const isAuthed = computed(() => !!currentJWT.value);

  const decodedJwt = computed(() => {
    if (isAuthed.value) {
      return jwtDecode<{id: number; role: string; exp: number}>(currentJWT.value as string);
    } else {
      return null;
    }
  })

  const role = computed(() => decodedJwt.value?.role);
  const userId = computed(() => decodedJwt.value?.id);
  const exp = computed(() => decodedJwt.value?.exp);

  function setJwt(jwt: string) {
    currentJWT.value = jwt;
    localStorage.setItem('jwt', jwt);
  }

  function delJWT() {
    currentJWT.value = null;
    localStorage.removeItem('jwt');
  }

  return { isAuthed, role, userId, exp, adminJWT, userJWT, currentJWT, setJwt, delJWT }
})