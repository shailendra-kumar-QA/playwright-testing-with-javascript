import { test, expect } from '@playwright/test';

test('demo project', async ({ page }) => {
    await page.goto('https://www.saucedemo.com');


    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page.locator('.title')).toHaveText('Products');
    const productName = await page.locator('.inventory_item_name');
    const count = await productName.count();
    console.log(count);

    for (let i = 0; i < count; i++) {
        const name = await productName.nth(i).textContent();
        console.log(name);
    }

})