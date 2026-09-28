
import {test, expect} from '@playwright/test'

test('trace demo', async ({page}) =>{

    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button:Login').click();

})