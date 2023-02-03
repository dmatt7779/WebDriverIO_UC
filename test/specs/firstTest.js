describe('Ecommerce App', () => {


    it('Login Fail page', async () => {
        //webdriverio Async
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
        console.log(await browser.getTitle())

        //CSS Selectors, xpath
        const username = $("#username")
        const password = $("#password")
        const singInBtn = $("#signInBtn")
        const alertValue = $('.alert-danger')
        const infoToLogin = $('p')

        //Setting values on each variable to put them on the fields
        await username.setValue("rahulshettyacademy")
        await password.setValue("Learning")
        await singInBtn.click()
        //await browser.pause(3000)//Hacer que el browser espere
        //Usando el waitUntil - not use browser.pause is not a good practice, the best is use waitUntil = condition
        await browser.waitUntil(async()=> await singInBtn.getAttribute('value') === 'Sign In', 
        {
            timeout: 5000,
            timeoutMsg: 'Error Msg is not showing up'
        })
        await alertValue.getText()

        //Asserts
        await expect(alertValue).toHaveText('Incorrect username/password.')
        await expect(infoToLogin).toHaveText('(username is rahulshettyacademy and Password is learning)')
    })

    it('Login Successfull page', async() =>{
        
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
    })

    it('Radio buttons/Check Box', async() =>{
        console.log("Hola")
    })

})