import { expect as expectChai } from 'chai'

describe('UI Controls Test Suite', () => {


it('UI Controls', async () => {
    //webdriverio Async
    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    await expect(browser).toHaveTitleContaining('Rahul Shetty Academy')
    console.log(await browser.getTitle())

    //CSS Selectors, xpath
    const username = await $("#username")
    const password = await $("#password")
    const singInBtn = await $("#signInBtn")
    const alertValue = await $('.alert-danger')
    const infoToLogin = await $('p')
    const radioBtns = await $$('.customradio')
    const adminRadioBtn = (await radioBtns[0].$('span'))
    const userRadioBtn = (await radioBtns[1].$('span'))
    const modalForUser = await $('.modal-content')
    const cancelModalBtnForUser = await $('#cancelBtn')

    //Setting values on each variable to put them on the fields
    await username.setValue("rahulshettyacademy")
    await password.setValue("Learning")
    //await singInBtn.click()
    await userRadioBtn.click()
    await modalForUser.waitForDisplayed()
    await cancelModalBtnForUser.click()
    console.log("isSelected Function => " + await adminRadioBtn.isSelected())
    
    await browser.pause(3000)
})

it('Not-modal | validations for Admin', async () => {
    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    
    //CSS Selectors, xpath
    const username = await $("#username")
    const password = await $("#password")
    const singInBtn = await $("#signInBtn")
    const alertValue = await $('.alert-danger')
    const infoToLogin = await $('p')
    const radioBtns = await $$('.customradio')
    const adminRadioBtn = (await radioBtns[0].$('span'))
    const userRadioBtn = (await radioBtns[1].$('span'))
    const modalForUser = await $('.modal-content')
    const cancelModalBtnForUser = await $('#cancelBtn')
    const userModalOkBtn = await $('#okayBtn')

    //Setting values on each variable to put them on the fields
    await username.setValue("rahulshettyacademy")
    await password.setValue("Learning")
    await userRadioBtn.click()
    await modalForUser.waitForDisplayed()
    await userModalOkBtn.click()
    console.log("IsSelected user checkBox => " + await userRadioBtn.isSelected())
    await adminRadioBtn.click()
    await expect(modalForUser).not.toBeDisplayed()
})

it('Dropdown\'s Login tests', async () => {
    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')

    const dropdownLogin = await $('select.form-control')
    await dropdownLogin.selectByAttribute('value', 'teach')
    await browser.pause(3000)
    await dropdownLogin.selectByVisibleText("Consultant")
    await browser.pause(3000)
    await dropdownLogin.selectByIndex(0)
    await browser.pause(3000)
    console.log(await dropdownLogin.getValue())
    expectChai(await dropdownLogin.getValue()).to.equal('stud') //stud chai is one library which supports assertions
}) 

it('Dynamic Dropdown Controls', async() => {
    await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
    let selectCountriesField = await $('#autocomplete')
    let dropdownCountry = await $('#ui-id-1')
    
    await selectCountriesField.setValue('ind')
    await dropdownCountry.waitForDisplayed()
    let dropdownArrayContryData = await $$("[class='ui-menu-item'] div")

    for(let i = 0; i < dropdownArrayContryData.length; i++) {
        //console.log("Array of dropDown data: " + await dropdownArrayContryData[i].getText())
        if(await dropdownArrayContryData[i].getText() === "India"){
            await dropdownArrayContryData[i].click()
            await browser.pause(5000)
        }
    }

})

it('Checkboxes Identification', async() => {
    browser.url('https://rahulshettyacademy.com/AutomationPractice/')
    let checkboxes = await $$("input[type='checkbox']")
    await checkboxes[1].click()
    console.log(await checkboxes[1].isSelected())
    console.log(await checkboxes[0].isSelected())
    let prueba = await checkboxes[1].isSelected() //When a promise return a value, that value should be saved in a variable to after...
    //use in any other logic, the promise doesn't return automatically the value
    await browser.pause(3000)
    await browser.saveScreenshot("screenShot.png")
    expectChai(prueba).to.be.true
})


})