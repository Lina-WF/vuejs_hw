import { test, expect } from '@nuxt/test-utils/playwright';

test('test', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' });
  await page.waitForSelector('#__nuxt', { state: 'visible', timeout: 15000 });

  await page.getByRole('button', { name: 'В корзину' }).first().click();
  await page.getByRole('link', { name: 'Корзина' }).click();

  await page.waitForSelector('#totalSum', { state: 'visible', timeout: 15000 });
  await expect(page.locator('#totalSum')).toContainText('Общая сумма: 109.95 $');
 
  await page.getByRole('button', { name: 'Добавить' }).click();
  await expect(page.locator('#totalSum')).toContainText('Общая сумма: 219.90 $');
  
  await page.getByRole('button', { name: 'Уменьшить' }).click();
  await expect(page.locator('#totalSum')).toContainText('Общая сумма: 109.95 $');
  
  await page.getByRole('button', { name: 'Уменьшить' }).click();
  await expect(page.locator('#app')).toContainText('Ваша корзина пуста');
});