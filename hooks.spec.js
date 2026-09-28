import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

// Hooks: beforeEach runs before every test
test.beforeEach(async ({ page }) => {
    // Navigate to base URL and log in to reach inventory.html
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Verify successful login to inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

// Hooks: afterEach runs after every test
test.afterEach(async ({ page }) => {
    // Teardown / cleanup: Logout
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
});

test('Add and remove product directly on inventory page', async ({ page }) => {
    const addToCartBtn = page.locator('#add-to-cart-sauce-labs-backpack');
    const removeBtn = page.locator('#remove-sauce-labs-backpack');
    const cartBadge = page.locator('.shopping_cart_badge');

    // 1. Add to cart
    await addToCartBtn.click();

    // 2. Verify product is added
    await expect(cartBadge).toBeVisible();
    await expect(cartBadge).toHaveText('1');
    await expect(removeBtn).toBeVisible();

    // 3. Remove product
    await removeBtn.click();

    // 4. Verify product is removed
    await expect(cartBadge).toBeHidden();
    await expect(addToCartBtn).toBeVisible();
});

test('Verify product added to cart page and remove from cart', async ({ page }) => {
    // 1. Add to cart
    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    // 2. Verify product is added
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.cart_item .inventory_item_name')).toHaveText('Sauce Labs Backpack');

    // 3. Remove product
    await page.locator('#remove-sauce-labs-backpack').click();

    // 4. Verify product is removed
    await expect(page.locator('.cart_item')).toHaveCount(0);
    await expect(page.locator('.shopping_cart_badge')).toBeHidden();
});

test('Filter products between $9 and $30, count them, and save to Excel', async ({ page }) => {
    // Wait for inventory list to be loaded
    const inventoryItems = page.locator('.inventory_item');
    await expect(inventoryItems.first()).toBeVisible();

    const items = await inventoryItems.all();
    const filteredProducts = [];

    for (const item of items) {
        const name = await item.locator('.inventory_item_name').innerText();
        const priceText = await item.locator('.inventory_item_price').innerText();
        const price = parseFloat(priceText.replace('$', ''));

        // Filter products priced between $9 and $30 (inclusive)
        if (price >= 9 && price <= 30) {
            // Get product detail page URL using item id
            const titleLink = item.locator('a[id*="title_link"]');
            const linkId = await titleLink.getAttribute('id');
            const idMatch = linkId ? linkId.match(/\d+/) : null;
            const itemId = idMatch ? idMatch[0] : '';
            const productUrl = `https://www.saucedemo.com/inventory-item.html?id=${itemId}`;

            filteredProducts.push({
                'Product Name': name,
                'Price': priceText,
                'Product URL': productUrl
            });
        }
    }

    const count = filteredProducts.length;
    console.log(`\n========================================`);
    console.log(`Total products between $9 and $30: ${count}`);
    console.log(`========================================`);
    console.table(filteredProducts);

    // Verify count is expected (4 products on saucedemo match this range)
    expect(count).toBe(4);

    // Export to Excel sheet
    const worksheet = XLSX.utils.json_to_sheet(filteredProducts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Products $9 to $30');

    const excelFilePath = 'filtered_products.xlsx';
    XLSX.writeFile(workbook, excelFilePath);
    console.log(`Excel sheet saved to: ${excelFilePath}`);
});
