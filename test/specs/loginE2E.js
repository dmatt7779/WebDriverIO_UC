import loginPage from '../pageobjects/loginPageLocators.js';
import dataGenerator from '../pageobjects/testData.js';

describe('Login Page - Challenge 04', async() => {

    it('Navigate to sampleapp page', async() => {
        await loginPage.open();
        await expect(browser).toHaveUrlContaining('sampleapp');
    })

    it('Login with valid credentials and Welcome Text', async()=>{
        await loginPage.open();
        await loginPage.login("matt","pwd");
        await expect(loginPage.loginTextStatus).toHaveTextContaining('Welcome');
        await expect(loginPage.loginTextStatus).toHaveElementClass('text-success',{ message: 'Not a text-success class'});
    })

    it('Login with empty username', async() => {
        await loginPage.open();
        await loginPage.login("","pwd");
        await expect(loginPage.loginTextStatus).toHaveText('Invalid username/password');
        await browser.pause(3000);
        await expect(loginPage.loginTextStatus).toHaveElementClass('text-danger',{ message: 'Not a text-danger class'});
    })

    it('Login with invalid password', async() => {
        await loginPage.open();
        await loginPage.login("matt","sadasd34");
        await expect(loginPage.loginTextStatus).toHaveText('Invalid username/password');
        await browser.pause(3000)
        await expect(loginPage.loginTextStatus).toHaveElementClass('text-danger',{ message: 'Not a text-danger class'});
    })

    it('Login with empty credentials', async() => {
        await loginPage.open();
        await loginPage.login("","");
        await expect(loginPage.loginTextStatus).toHaveText('Invalid username/password');
        await browser.pause(3000)
        await expect(loginPage.loginTextStatus).toHaveElementClass('text-danger',{ message: 'Not a text-danger class'});
    })

    it('Login and Logout with texts | E2E', async()=>{
        await loginPage.open();
        await loginPage.login("matt","pwd");
        await expect(loginPage.loginTextStatus).toHaveTextContaining('Welcome');
        await expect(loginPage.loginTextStatus).toHaveElementClass('text-success',{ message: 'Not a text-success class'});
        await browser.pause(3000);
        await loginPage.loginBtn.click();
        await expect(loginPage.loginTextStatus).toHaveTextContaining('User logged out.');
        await expect(loginPage.loginTextStatus).toHaveElementClass('text-info',{ message: 'Not a text-info class'});
        await browser.pause(3000);
    })

    it('Validate element\'s type attribute', async()=>{
        await loginPage.open();
        await expect(loginPage.inputUsername).toHaveAttr('type','text')
        await expect(loginPage.inputPassword).toHaveAttr('type','password')
        console.log('Attribute here => ' + (await loginPage.inputPassword.getAttribute('type')))
        console.log('Attribute here => ' + (await loginPage.inputUsername.getAttribute('type')))
        await browser.pause(3000);
    })

    //Bugs - Username and password fileds should dissapear after login toBeDisabled() return false bcz they're enabled in the DOM
/*     it('Username field - not visible', async()=>{
        await loginPage.open();
        await loginPage.login("matt","pwd");
        await expect(loginPage.loginTextStatus).toHaveTextContaining('Welcome');
        await expect(loginPage.inputUsername).toBeDisabled()
    })

    it('Password fields not visible', async()=>{
        await loginPage.open();
        await loginPage.login("matt","pwd");
        await expect(loginPage.loginTextStatus).toHaveTextContaining('Welcome');
        await expect(loginPage.inputPassword).toBeDisabled()
    }) */

    //Possible solution with auto-generated data
    it('Login with invalid credentials | auto-generated', async() => {
        await loginPage.open();
        dataGenerator.fakeDataGenerator(1,3)
        await (await loginPage.login(dataGenerator.dataBank[0], dataGenerator.dataBank[0]))
        console.log('Usuario y password '+ dataGenerator.dataBank)
        await expect(loginPage.loginTextStatus).toHaveElementClass('text-danger',{ message: 'Not a text-danger class'});
    })

    it('Login with valid credentials | auto-generated', async() => {
        await loginPage.open();
        await (await loginPage.login(dataGenerator.dataBank[0], dataGenerator.correctPwdToLogin));
        await expect(loginPage.loginTextStatus).toHaveElementClass('text-success',{ message: 'Not a text-success class'});
    })
})