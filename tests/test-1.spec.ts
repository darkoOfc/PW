import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://mrq-test.com/');
  await page.getByRole('button', { name: 'Menu' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Bingo' }).click();
  await page.getByRole('link', { name: 'Login' }).first().click();
  
  await page.getByText('Email').click();
  await page.locator('[data-test-id="login-username"]').fill('sda');
  await page.locator('[data-test-id="login-password"]').click();

  await page.locator('[data-test-id="login-password"]').fill('sadassdas');
  await page.locator('[data-test-id="login-button"]').click();
  await page.locator('span').filter({ hasText: 'Sorry, we couldn\'t process' }).locator('div').isVisible();

});