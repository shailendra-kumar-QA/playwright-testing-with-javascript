// const {test, expect} = require('@playwright/test');

// test('basic test', async ({page}) => {
//     await page.goto('https://google.com');
//     await expect(page).toHaveTitle('Google');



// })

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://hrm.udamandi.com/');
  
  await page.getByRole('textbox', { name: 'Enter your username12jjj' }).click();
});

