import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { useAuthStore } from '../../stores/auth';
import router from '../../router';
import Login from '../Login.vue'
import LoginForm from '../../components/forms/LoginForm.vue';



describe('Login', () => {
  describe('Checking login', () => { 
    it('should show alert of wrong login/password', async () => {
      const component = mount(Login);
      const data = {login: '123', password: '123'}
      const expected = true;

      await component.findComponent(LoginForm).vm.$emit('submited', data);
      const actual = component.find("span[role='alert']").isVisible();

      expect(actual).toBe(expected);
    });

    it('should save to localStorage logged user', async () => {
      const authStore = useAuthStore();
      router.push({ name: 'login' });
      await router.isReady();
      const component = mount(Login, { global: { plugins: [router] } });
      const data = {login: 'admin', password: '123'}
      const expected = true;

      component.findComponent(LoginForm).vm.$emit('submited', data);
      const actual = authStore.isAuthed;

      expect(actual).toBe(expected);
    });
  });
})