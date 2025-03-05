import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mrq-test.com/');
  await page.getByRole('link', { name: 'Login' }).first().click();
  await page.locator('[data-test-id="login-username"]').click();
  await page.locator('[data-test-id="login-username"]').fill('darko_qa7');
  await page.locator('[data-test-id="login-password"]').click();
  await page.locator('[data-test-id="login-password"]').fill('Mrqtest');
  await page.locator('[data-test-id="login-button"]').click();
});