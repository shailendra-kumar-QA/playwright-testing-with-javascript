import { test, expect } from '@playwright/test';

test('Dropdown demo', async ({ page }) => {

    // Timeout for this test case
    // test.setTimeout(60000);

    // Wait only until DOM is loaded
    await page.goto("https://practice.expandtesting.com/dropdown");
    
    const CountryDropdown = page.locator('#country');

    // way to select dropdown value by value

    //1 using lebel
    // await CountryDropdown.selectOption({ label: 'India' });

    // await page.waitForTimeout(5000);

    // // verify dropdown value is selected
    // await expect(CountryDropdown).toHaveValue('IN');

    //usning value
    // await CountryDropdown.selectOption({ value: 'US' });

    // await page.waitForTimeout(5000);    

    //by index 
    // await CountryDropdown.selectOption({ index: 3 });

    //locate all thhe options are present in dropdown // 
    //here option is a tag name of the dropdown options
    //  const options =  CountryDropdown.locator('option');

    //  //count the number of options present in dropdown
    //  const optionCount = await options.count();
    //  console.log('Number of options in dropdown:', optionCount);
    //  //assetion to verify the number of options in dropdown
    //  await expect(options).toHaveCount(252);


    // get all the options text from dropdownj
    const allOptions =   CountryDropdown.locator('option');
    const optionsText = await allOptions.allTextContents();

    //verify any option is present in dropdown
    await expect(optionsText).toContain('India');


    
    
    


});