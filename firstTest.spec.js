import {test, expect} from '@playwright/test';

test('open google title', async ({page}) => {
    await page.goto('https://www.google.com');

    const PageTitle = await page.title();
    console.log(PageTitle);
    await expect(page).toHaveTitle('Google');
});


// test('multiple tabs', async ({ page }) => {

//     const context = page.context();

//     const newTab = await context.newPage();

//     await newTab.goto('https://www.google.com');

// });