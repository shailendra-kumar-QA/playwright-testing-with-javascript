import {test, expect} from '@playwright/test';

test('Confirm alert demo', async ({page}) => {
    await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/");


    page.once('dialog', async dialog => {

        expect(dialog.type()).toBe('confirm');

        expect(dialog.message()).toContain('I am a confirm alert');

        // to click cancle 
        // await dialog.dismiss();

        // to click ok
         await dialog.accept();
    })

    const confirmButton = page.getByText('Show confirm box');
    await confirmButton.click();

    const text = await page.locator('#confirmreturn');
    // accept ok
    // await expect(text).toHaveText('true');
    //accept cancle
    await expect(text).toHaveText('true');


})