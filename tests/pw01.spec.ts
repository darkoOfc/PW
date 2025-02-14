import { test, expect } from '@playwright/test';


test('public page logo', async ({ page }) => {
    // Open staging page and validate title 
    await page.goto('https://mrq-test.com/');
    await expect(page).toHaveTitle(/MrQ/);

    // Validate that the header logo is visible
    const mrqLogoAlt = page.locator('.header__logo');
    await expect(mrqLogoAlt).toBeVisible();
   }
);

test('login button', async ({ page }) => {
    // Open staging page 
    await page.goto('https://mrq-test.com/');

    // Validate that the login button functions correctly and leads to login page
    const headerButtonLogin = await page.locator('header a[href="/login"]');
    await headerButtonLogin.click();
    await expect(page).toHaveURL('https://mrq-test.com/login');
})