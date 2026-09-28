import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://example.com');

});

test('Test 1', async ({ page }) => {

    console.log('Running Test 1');

});

test('Test 2', async ({ page }) => {

    console.log('Running Test 2');

});


// real world example of beforeEach hook
test.beforeEach(async ({ page }) => {

    await page.goto('https://example.com/login');

    await page.locator('#username').fill('admin');

    await page.locator('#password').fill('password123');

    await page.getByRole('button', {
        name: 'Login'
    }).click();

});



test('Add product', async ({ page }) => {

    await page.getByText('Products').click();

});

test('Create customer', async ({ page }) => {

    await page.getByText('Customers').click();

});
