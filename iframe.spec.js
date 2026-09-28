import {test, expect} from '@playwright/test';


test('iframe demo', async ({page}) => {
    await page.goto("file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/IframePractice/index.html");

    // count total number of iframes in the page

    const allFrame = page.frames();

    console.log("total number of frame", allFrame.length);

    // approch1 : frame locator 
   const leftFrame = page.frameLocator("iframe[name='left']");
   //input name in left frame
   const formInputNmae = leftFrame.locator("a[href='page1.html']").click();
   formInputNmae.fill("shailu");

   //input email in left frame
   const formInputEmail = leftFrame.locator("a[href='page2.html']").click();
    formInputEmail.fill("shailu@gmail.com");

    // Approch 2 : locate right frame
    const rightFrame = page.frameLocator("iframe[name='right']");
    rightFrame.locator('select').selectOption('opton 2');






    
})