import { test, expect } from '@playwright/test';

test('Radio button demo', async ({ page }) => {

    // Timeout for this test case
    test.setTimeout(60000);

    // Wait only until DOM is loaded
    await page.goto(
        'https://www.techlistic.com/p/selenium-practice-form.html',
        { waitUntil: 'domcontentloaded' }
    );

    // // Locate radio button
    // const Year3RadioBtn = page.locator('#exp-2');

    
    // // Verify radio button is visible
    // await expect(Year3RadioBtn).toBeVisible();

    // // Select radio button
    // await Year3RadioBtn.check();

    // // Optional: wait 2 seconds
    // await page.waitForTimeout(2000);

    // // Verify radio button is selected
    // await expect(Year3RadioBtn).toBeChecked();

    // // Pause the browser so you can inspect DOM
    // await page.pause();


    
    // Locate radio button
    const Year5RadioBtn = page.locator('#exp-4');

    // Verify radio button is visible
    await expect(Year5RadioBtn).toBeVisible();

    // Select radio button
    await Year5RadioBtn.check();

    // Optional: wait 2 seconds
    await page.waitForTimeout(2000);

    // Verify radio button is selected
    await expect(Year5RadioBtn).toBeChecked();





});