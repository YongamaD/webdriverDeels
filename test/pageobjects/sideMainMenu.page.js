const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SideMainMenu extends Page {
    /**
     * define selectors using getter methods
     */


    get btnLogout () { return $('[data-original-title="Logout"]') }
    get btnSetting() { return $('a[href="/settings"]') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async logout () {
        await (await this.btnLogout).click();
    }

     async setting () {
        await (await this.btnSetting).click();
    }
 
}

module.exports = new SideMainMenu();
