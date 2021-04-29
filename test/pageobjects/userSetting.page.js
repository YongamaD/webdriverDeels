const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UserSetting extends Page {
    /**
     * define selectors using getter methods
     */
    get heading () { return $('h1[data-qa="heading"]') }

    get btnAccountSetting() { return $('a[href="/settings/account-settings"]') }

      get btnEditPersonal() { return $('a[href="/settings/account-settings/edit-personal"]') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async accountSetting () {
        await (await this.btnAccountSetting).click();
    }
   async editPersonal () {

        await (await this.btnEditPersonal).click();
    }
}

module.exports = new UserSetting();
