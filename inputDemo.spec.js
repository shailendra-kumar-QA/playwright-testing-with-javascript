
import { test, expect } from '@playwright/test';

test('input box demo', async ({page}) => {

    test.setTimeout(60000);

    // open application and wait for dom content loaded no wait for video to load
    await page.goto('https://www.techlistic.com/p/selenium-practice-form.html', {waitUntil: 'domcontentloaded'});
    // await page.goto('https://www.techlistic.com/p/selenium-practice-form.html')

    // await expect.soft(page).toHaveUrl("https://www.techlistic.com/p/selenium-practice-form.html")


    const firstNameInput = page.locator('//input[@name="firstname"]');
    const LastNameInput = page.locator('//input[@name="lastname"]');

    //input box visisble or not assertion
    await expect(firstNameInput).toBeVisible();
    await expect(LastNameInput).toBeVisible();


    //input box empty or not assertion
    await expect(firstNameInput).toBeEmpty();
    await expect(LastNameInput).toBeEmpty();

    // input box enabled or not assertion
    await expect(firstNameInput).toBeEnabled();
    await expect(LastNameInput).toBeEnabled();  

    //enter value in input box
    await firstNameInput.fill('John');
    await LastNameInput.fill('Doe');




    // const GenderRadioButton = page.getByRole('radio', {name: 'Male'});


})
