import { test,expect } from '@playwright/test';

test('Test 1' , async({page})=>{
await page.goto("https://saucedemo.com");
console.log("Reached the Page");
await expect(page).toHaveTitle('Swag Labs');
})

test('Test 2' , async({page})=>{
    await page.goto("https://saucedemo.com");
    console.log("Reached the Page - 2");
    await expect(page).toHaveTitle('Swag Labs');
    })