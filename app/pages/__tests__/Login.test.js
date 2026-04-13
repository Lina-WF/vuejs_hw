import { vi } from 'vitest'
vi.stubGlobal('ResizeObserver', class {
  observe() {}
  unobserve() {}
  disconnect() {}
})

import { describe, expect, it } from 'vitest'
import Login from '../login.vue';
import LoginFormVuetify from '../../components/forms/LoginFormVuetify.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { useAuthStore } from '../../../stores/auth';


describe('Login', () => {
  describe('Checking login', () => { 
    it('should show alert of wrong login/password', async () => {
      const component = await mountSuspended(Login);
      const data = {login: '123', password: '123'}
      const expected = true;

      await component.findComponent(LoginFormVuetify).vm.$emit('submited', data);
      const actual = component.find("span[role='alert']").isVisible();

      expect(actual).toBe(expected);
    });

    it('should save to localStorage logged user', async () => {
      const component = await mountSuspended(Login);
      const authStore = useAuthStore();
      const data = {login: 'admin', password: '123'}
      const expected = true;
      await component.findComponent(LoginFormVuetify).vm.$emit('submited', data);
      
      const actual = authStore.isAuthed;

      expect(actual).toBe(expected);
    });
  });
})