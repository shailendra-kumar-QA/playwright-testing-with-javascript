import{ test, expect } from '@playwright/test';

test('Nested frame demo', async ({page}) => {
    await page.goto("file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/NestedFrame/index.html");  
    
    await page
    .frameLocator('#frameA')
    .frameLocator('#frameB')
    .frameLocator('#frameC')
    .getByRole('button', { name: 'Submit' })
    .click();
    
})