const LoginPage = require('../pageobjects/login.page');
const SideMainMenu = require('../pageobjects/sideMainMenu.page');
const HomePage = require('../pageobjects/home.page');

const UserSetting = require('../pageobjects/userSetting.page');


describe('My Login application', () => {
    var username;
    var password
    before(() => {
        username = browser.config.username;
        password = browser.config.password;
   
    })
    it('should update user details', async () => {
        await HomePage.open();
        await LoginPage.login(username, password);
        await SideMainMenu.setting()
        await UserSetting.accountSetting()
        await UserSetting.updatePersonalInfo()
        await UserSetting.clickSubmit()
    })
})