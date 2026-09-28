import {test, expect} from '@playwright/test';

test('Custom dropdown demo', async ({page}) => {

    // Timeout for this test case
    test.setTimeout(60000); 

await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');

// Click on the country dropdown to open it
const countryDropdown = page.locator('#country+span');
await countryDropdown.click();  

// Select the country option from the dropdown
const countryOption = page.locator('li:has-text("India")');
await countryOption.click();    

});