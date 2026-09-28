

import { test, expect } from '@playwright/test';

test('soft assertion demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    //soft assertion - wrong title assertion
    await expect.soft(page).toHaveTitle('Swag Labs123');


    // url assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/');

    const userInput = page.getByRole('textbox', { name: 'Username' });
    const passwordInput = page.getByRole('textbox', { name: 'Password' });
    const loginButton = page.getByRole('button', { name: 'Login' });

    await userInput.fill('standard_user');

    page.waitForTimeout(2000);
    await passwordInput.fill('secret_sauce');
    page.waitForTimeout(2000);
    await loginButton.click();

});
