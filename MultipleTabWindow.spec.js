import {test, expect} from '@playwright/test'

test('multiple window and tab demo', async({page}) =>{
    
    //open parent tab
    await page.goto('https://the-internet.herokuapp.com/windows')
    
    //verify that we are on correct page
    await expect(page.getByText('Opening a new window').textContent("Opening a new window"));

    //open child tab
    const [childPage] =await Promise.all([
        page.context().waitForEvent('page'), page.locator('text=Click Here').click()
    ])

    //wait until child page is completely loaded
    await childPage.waitForLoadState();
    //switch back to parent page
    await page.bringToFront()

    //close child tab
    await childPage.close();


})
