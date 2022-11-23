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

    async logout () {
        await this.hamButton.click();
        await browser.pause(1000);
        await this.logOutButton.click();
    }
}

export default new HomePage();