class LogOutPage {

    get logOutButton () {
        return $('#logout_sidebar_link');
    }
    get hamButton () {
        return $('#react-burger-menu-btn')
    }

    get imageDog () {
        return $('#item_4_img_link')
    }

    // get spanTitle () {
    //     return $(title);
    // }
    async logout () {
        await this.hamButton.click();
        await browser.pause(1000);
        await this.logOutButton.click();
    }

}

export default new LogOutPage();