import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';
import homePage from '../pageobjects/home.page';

describe('Buying in the app', () => {
    beforeAll('Navigate URL', () => {
        browser.url('https://www.saucedemo.com/');
    })

    it('should not buy successfully', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitleContaining('Swag Labs');
        await HomePage.purchease('', '', '');
        await homePage.errorMessages.waitForDisplayed({timeout: 1000});
        await expect(HomePage.errorMessages).toHaveTextContaining('Error: First Name is required');
        await HomePage.cancelButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await HomePage.removeButton.click();
        await HomePage.logout();
    });

    it('should not buy successfully', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitleContaining('Swag Labs');
        await HomePage.purchease('', 'testtest', '15100');
        await homePage.errorMessages.waitForDisplayed({timeout: 1000});
        await expect(HomePage.errorMessages).toHaveTextContaining('Error: First Name is required');
        await HomePage.cancelButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await HomePage.removeButton.click();
        await HomePage.logout();
    });

    it('should not buy successfully', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitleContaining('Swag Labs');
        await HomePage.purchease('test', '', '15100');
        await homePage.errorMessages.waitForDisplayed({timeout: 1000});
        await expect(HomePage.errorMessages).toHaveTextContaining('Error: Last Name is required');
        await HomePage.cancelButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await HomePage.removeButton.click();
        await HomePage.logout();
    });

    it('should not buy successfully', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitleContaining('Swag Labs');
        await HomePage.purchease('test', 'testtest', '');
        await homePage.errorMessages.waitForDisplayed({timeout: 1000});
        await expect(HomePage.errorMessages).toHaveTextContaining('Error: Postal Code is required');
        await HomePage.cancelButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await HomePage.removeButton.click();
        await HomePage.logout();
    });

    it('should buy successfully', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitleContaining('Swag Labs');
        await HomePage.purchease('test', 'testtest', '15100');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        await HomePage.finishButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
        await HomePage.backHomeButton.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await HomePage.logout();
    });
})