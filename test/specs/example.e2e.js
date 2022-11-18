import LoginPage from  '../pageobjects/login.page';

describe('My Login application', () => {
    beforeAll('Navigate URL', () => {
        browser.url('https://www.saucedemo.com/');
    })
    it('should not login with empty fields', async () => {
        await LoginPage.login('', '');
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Epic sadface: Username is required');
    });

    it('should not login with empty username fields', async () => {
        await LoginPage.login('standard_user', '');
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Epic sadface: Password is required');
    });

    it('should not login with empty password fields', async () => {
        await LoginPage.inputUsername.clearValue();
        await browser.pause(10000)
        await LoginPage.login('', 'secret_sauce');
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            'Epic sadface: Username is required');
    });
});


