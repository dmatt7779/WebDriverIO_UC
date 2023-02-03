import loginPageElements from '../pageobjects/loginPage.js'
describe('Ecommerce App', () => {


    it('Login Fail page', async () => {
        //webdriverio Async
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        console.log(await browser.getTitle())

        //Setting values on each variable to put them on the fields
        await loginPageElements.login("rahulshettyacademy","Learning");

        //Usando el waitUntil - not use browser.pause is not a good practice, the best is use waitUntil = condition
        await browser.waitUntil(async()=> await loginPageElements.signInBtn.getAttribute('value') === 'Sign In', 
        {
            timeout: 5000,
            timeoutMsg: 'Error Msg is not showing up'
        })
        console.log("Alert Value -> " + await loginPageElements.alertValue.getText());
        //Asserts
        //await expect(await loginPageElements.alertValue.getText()).toHaveText('Incorrect username/password.')
        await expect(await loginPageElements.infoToLogin).toHaveText('(username is rahulshettyacademy and Password is learning)')
    })

/*     it('Login Successfull page', async() =>{
        
        //calling chrome browser and setting URL
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        
        //CSS Selectors, xpath
        const username = $("#username")
        const password = $("#password")
        const singInBtn = $("#signInBtn")
        const checkOutBtn = $('.btn-primary')

        //Setting values on each variable to put them on the fields
        await username.setValue("rahulshettyacademy")
        await password.setValue("learning")
        await singInBtn.click()
        await checkOutBtn.waitForExist()
        await expect(browser).toHaveUrlContaining('shop')
        await expect(browser).toHaveTitleContaining('ProtoCommerce')
        await browser.pause(3000)
    })*/

})