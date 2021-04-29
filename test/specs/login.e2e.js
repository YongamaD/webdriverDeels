const LoginPage = require('../pageobjects/login.page');
const SideMainMenu = require('../pageobjects/sideMainMenu.page');

const HomePage = require('../pageobjects/home.page');

describe('My Login application', () => {
    var username;
    var password;
    before(() => {
        username = browser.config.username;
        password = browser.config.password;
    })
    it('should login with valid credentials', async () => {

        await LoginPage.open();
        await LoginPage.login(username, password);
        expect(HomePage.homePageheading).toHaveText('Good')
        await SideMainMenu.logout()


    });

});


