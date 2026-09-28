import {test, expect} from '@playwright/test'

test('visible screenshots capture', async({page}) =>{

    await page.goto("https://www.saucedemo.com/");

    //capture screenshot , 
    await page.screenshot({
        path:"screenshots/LoginPage.png"
    });


});


test('full page screenshots capture', async({page}) =>{

    await page.goto("https://www.facebook.com/");

    //capture screenshot , 
    await page.screenshot({
        path:"screenshots/FullLoginPage.png",
        fullPage:true
    });


})



test('specific element screenshots capture', async({page}) =>{

    await page.goto("https://www.facebook.com/");

    //capture screenshot , 
    await page.getByPlaceholder('Email address or mobile number').screenshot({
        path:"screenshots/SpecialElemetLoginPage.png",
        
    });


})