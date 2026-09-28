import {test, expect} from '@playwright/test';

test ('demo project', async ({page}) => {
    await page.goto('https://www.saucedemo.com'); 
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button',{name: 'Login'}).click();
    // assertion
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    await expect(page.getByText('Products')).toBeVisible();


    // add to cart using getByRole locator
    await page.getByRole('button', {name: 'Add to cart'}).first().click();

    // click onm souce labs backpack using getByAltText locator
    await page.getByAltText('Sauce Labs Backpack').click();

})    