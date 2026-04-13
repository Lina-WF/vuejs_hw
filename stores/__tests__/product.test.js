import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useProductsStore } from '../products';
import Home from '../../app/pages/index.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { flushPromises } from '@vue/test-utils'

describe('Product Pinia Store', () => {
  describe('loading products', () => {
    it('should load products to data', async () => {
        const expected = [];
        const productStore = useProductsStore();
    
        await flushPromises();
        const actual = productStore.data;

        expect(actual).not.toEqual(expected);
    });

    it('should text "Загрузка" if not loaded', async () => {
        const component = await mountSuspended(Home, {
          route: '/' 
        });
        const expected = "Загрузка...";
    
        const actual = component.find('div#loading').text();

        expect(actual).toStrictEqual(expected);
    });
  });
});