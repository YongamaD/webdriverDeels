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
    


    get inputDate () { return $('[name="birthDate"]') }
    get inputCountry () { return $('[data-qa="country-select"]') }
    get inputPhoneNo () { return $('[name="phone"]') }

      get btnDone() { return $('[data-qa="done"]') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async accountSetting () {
        await (await this.btnAccountSetting).click();
    }
     async updatePersonalInfo () {
        await (await this.btnEditPersonal).click();
        await (await this.inputDate).setValue('20121994');
        await (await this.inputPhoneNo).setValue('0812777567');
    }
    async clickSubmit () {
        await (await this.btnDone).click();
       
    }
}

module.exports = new UserSetting();
