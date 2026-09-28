import {test, expect} from '@playwright/test';

test('Simple alert demo', async ({page}) => {

    await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/");
    
    // we msut register before the alert is triggered
    page.once('dialog', async dialog => {

        // check the alert message (alert, confirm, prompt)

        expect(dialog.type()).toBe('alert');

        //read the msg from show the alert popup
        expect(dialog.message()).toBe('I am an alert box!');

        //accept the alert popup 
        await dialog.accept();

 

    })

     const alertButton = page.getByText('Show alert box');
     await alertButton.click();

     //verfy alert was successfully accepted and closed

    const text = await page.locator('#alertexplanation');
    await expect(text).toHaveText('You triggered and handled the alert dialog');



})