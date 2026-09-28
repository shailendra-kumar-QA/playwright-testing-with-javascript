import { expect } from "@playwright/test";

test('demo project', async ({page}) => {
    await page.goto('https://www.thecodehelp.in/');
    await page.pause();
})