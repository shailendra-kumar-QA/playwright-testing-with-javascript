import {test, expect} from '@playwright/test';

test('Multi dropdown demo', async ({page}) => {

    await page.goto("https://testpages.eviltester.com/pages/forms/html-form/");


    // locate the multi dropdown element
    const multiDoropdown = page.locator('select[name="multipleselect[]"]');

    //wat to select multiple options from the dropdown
    // await multiDoropdown.selectOption([
    //     {value: 'ms1'},
    //     {value: 'ms2'},
    //     {value: 'ms3'}
    // ]);

    // await page.waitForTimeout(6000);


    //using label to select multiple options from the dropdown
    await multiDoropdown.selectOption([
        {label: 'Selection Item 1'},
        {label: 'Selection Item 2'},
        {label: 'Selection Item 3'}
    ]);

    await expect(multiDropdown.locator('option:checked')).toContainText(['Selection Item 1', 'Selection Item 2', 'Selection Item 3']);

    //verify dropdown is multi select or not
    await expect(multiDropdown).toHaveAttribute('multiple', 'true');

    await page.waitForTimeout(6000);


    //verify the selected options from the dropdown , if item selected or not



})