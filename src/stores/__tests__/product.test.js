import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useProductsStore } from '../products';
import Home from '../../views/Home.vue';
import { mount } from '@vue/test-utils';
import router from '../../router';

describe('Product Pinia Store', () => {
  beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn(() =>
            Promise.resolve({
            json: () => Promise.resolve([{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png","rating":{"rate":3.9,"count":120}}]),
            })
        ));
  });

  describe('loading products', () => {
    it('should load products to data', async () => {
        const expected = [];
        const productStore = useProductsStore();
    
        await productStore.loadProducts();
        const actual = productStore.data;

        expect(actual).not.toEqual(expected);
    });

    it('should text "Загрузка" if not loaded', async () => {
        router.push({ name: 'home' });
        await router.isReady();
        const component = mount(Home, { global: { plugins: [router] } });
        const expected = "Загрузка...";
    
        const actual = component.find('div#loading').text();

        expect(actual).toStrictEqual(expected);
    });
  });
});