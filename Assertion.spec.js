import {test, expect} from '@playwright/test';



// test('Assertion demo', async({page}) => {
//     await page.goto('https://www.saucedemo.com/');

//     //Title assertion
//     await expect(page).toHaveTitle('Swag Labs');

//     // Element state assertion

//     const usernameInput = page.getByRole('textbox', {name: 'Username'})
//     const passwordInput = page.getByRole('textbox', {name: 'Password'})
//     const loginButton = page.getByRole('button', {name: 'Login'});

// })


// soft assertion

test('soft assertion demo', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    
})
