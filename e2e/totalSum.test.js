import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole('button', { name: 'В корзину' }).first().click();
  await page.getByRole('link', { name: 'Корзина' }).click();

  await expect(page.locator('#totalSum')).toContainText('Общая сумма: 109.95 $');
 
  await page.getByRole('button', { name: 'Добавить' }).click();
  await expect(page.locator('#totalSum')).toContainText('Общая сумма: 219.90 $');
  
  await page.getByRole('button', { name: 'Уменьшить' }).click();
  await expect(page.locator('#totalSum')).toContainText('Общая сумма: 109.95 $');
  
  await page.getByRole('button', { name: 'Уменьшить' }).click();
  await expect(page.locator('#app')).toContainText('Ваша корзина пуста');
});