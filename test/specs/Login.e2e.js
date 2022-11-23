import LoginPage from  '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

describe('My Login application', () => {
    beforeAll('Navigate URL', () => {
        browser.url('https://www.saucedemo.com/');
    })

    it('should not login with empty fields', async () => {
        await LoginPage.login('', '');
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Epic sadface: Username is required');
        await browser.refresh();
    });

    it('should not login with empty username fields', async () => {
        await LoginPage.login('standard_user', '');
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Epic sadface: Password is required');
        await browser.refresh();
    });

    it('should not login with empty password fields', async () => {
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Epic sadface: Username is required');
        await browser.refresh();
    });

    it('should not login with locked user', async () => {
        await LoginPage.login('locked_out_user', 'secret_sauce');
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Epic sadface: Sorry, this user has been locked out.');
        await browser.refresh();
    });

    it('should login with glitched username', async () => {
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitleContaining('Swag Labs');
        await expect(HomePage.imageInventory).toHaveAttr('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
        await HomePage.logout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await browser.refresh();
    });

    it('should login with problem username', async () => {
        await LoginPage.login('problem_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitleContaining('Swag Labs');
        await expect(HomePage.imageDog).toHaveAttr('src', '/static/media/sl-404.168b1cce.jpg')
        await HomePage.logout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await browser.refresh();
    });

    it('should login with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitleContaining('Swag Labs');
        await expect(HomePage.imageInventory).toHaveAttr('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
        await HomePage.logout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    });
});


