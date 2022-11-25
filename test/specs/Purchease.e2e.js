import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

describe('Buying in the app', () => {
    beforeAll('Navigate URL', () => {
        browser.url('https://www.saucedemo.com/');
    })

    it('should make it to checkout', async () => {
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