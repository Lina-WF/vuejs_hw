import { describe, expect, it } from 'vitest'
import { useCartStore } from '../cart'

describe('Cart Pinia Store', () => {
  describe('add product in cart', () => {
    it('should add new product with id 1', () => {
      const productId = 1;
      const expected = {id: 1, countInCart: 1};
      const cartStore = useCartStore();
      
      cartStore.incCart(productId);
      const actual = cartStore.cart[0];

      expect(actual).toStrictEqual(expected);
    });

    it('should add existing product with id 1', () => {
      const productId = 1;
      const expected = {id: 1, countInCart: 2};
      const cartStore = useCartStore();
      
      cartStore.incCart(productId);
      cartStore.incCart(productId);
      const actual = cartStore.cart[0];

      expect(actual).toStrictEqual(expected);
    });
  });

  describe('delete product from cart', () => {
    it('should delete product with id 1', () => {
      const productId = 1;
      const expected = undefined;
      const cartStore = useCartStore();
      
      cartStore.incCart(productId);
      cartStore.decCart(productId);
      const actual = cartStore.cart[0];

      expect(actual).toBe(expected);
    });

    it('should decrease product with id 1', () => {
      const productId = 1;
      const expected = {id: 1, countInCart: 1};
      const cartStore = useCartStore();
      
      cartStore.incCart(productId);
      cartStore.incCart(productId);
      cartStore.decCart(productId);
      const actual = cartStore.cart[0];

      expect(actual).toStrictEqual(expected);
    });
  });
});