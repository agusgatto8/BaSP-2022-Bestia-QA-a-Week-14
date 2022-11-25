class HomePage {

    get logOutButton () {
        return $('#logout_sidebar_link');
    }
    get hamButton () {
        return $('#react-burger-menu-btn')
    }

    get imageDog () {
        return $('#item_4_img_link > img')
    }

    get imageInventory () {
        return $('#item_4_img_link > img')
    }

    get addToCartButton () {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    get cartButton () {
        return $('.shopping_cart_link')
    }

    get checkOutButton () {
        return $('#checkout')
    }

    get inputFirstName () {
        return $('#first-name');
    }

    get inputLastName () {
        return $('#last-name')
    }

    get inputZip () {
        return $('#postal-code')
    }

    get continueButton () {
        return $('#continue')
    }

    get finishButton () {
        return $('#finish')
    }

    get backHomeButton () {
        return $('#back-to-products')
    }

    async logout () {
        await this.hamButton.click();
        await browser.pause(1000);
        await this.logOutButton.click();
    }

    async purchease (firstname, lastname, zip) {
        await this.addToCartButton.click();
        await browser.pause(500);
        await this.cartButton.click();
        await browser.pause(500);
        await this.checkOutButton.click();
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputZip.setValue(zip);
        browser.pause(500);
        await this.continueButton.click();
    }
}

export default new HomePage();