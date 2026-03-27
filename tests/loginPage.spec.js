import {test,exect, expect} from '@playwright/test';
test('Login with valid credentials', async ({page}) => {
    await page.goto('https://www.demoblaze.com/prod.html?idp_=2#');
    await page.click('#login2');
    await page.fill('#loginusername', 'swati');
    await page.fill('#loginpassword', 'swati123');
    await page.click("//button[text()='Log in']");

});

test('assertion', async ({page}) => {
    await page.goto('https://www.demoblaze.com/prod.html?idp_=2#');
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=2#');
    await expect(page).toHaveTitle('STORE');
});