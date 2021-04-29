const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get homePageheading () { return $('[data-qa="heading"]') }
    

    get btnLogout () { return $('[data-original-title="Logout"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
   open () {
        return super.open('/');
    }

 
}

module.exports = new HomePage();
