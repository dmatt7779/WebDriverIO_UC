import { expect as expectChai } from 'chai'

describe('Functional Testing on Application', () =>{

    it('Scrolling and mouse hover', async() => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        let btnIdMouseHover = await $('#mousehover')
        await btnIdMouseHover.scrollIntoView(0,1000)
        await browser.pause(3000)
        await btnIdMouseHover.moveTo()
        let topHoverOption = await $('=Top')
        await browser.pause(3000)
        await topHoverOption.click()
        await browser.pause(3000)
    }) 

    it('Alerts on browser', async() => {//Failed to catch the alert stuff - need validations
        await browser.url('http://only-testing-blog.blogspot.com/2014/09/selectable.html')
        await browser.pause(3000)
        let doubleClickBtn = await $('button')
        await browser.pause(3000)
        await doubleClickBtn.doubleClick()
        let isAlertOpen = await browser.isAlertOpen()
        console.log(await browser.isAlertOpen())
        await browser.pause(3000)
        //expectChai(isAlertOpen).to.be.true
        let alertText = await browser.getAlertText()
        console.log("Second isAlertOpen() => " + await browser.isAlertOpen())
        await expectChai(await browser.getAlertText()).to.equal('You double clicked me.. Thank You..')
        await browser.pause(3000)
        //await browser.acceptAlert()
        await browser.pause(3000)
    })

    it('web Tables validation', async () => {
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        let columVegFruitName =await $('tr th:nth-child(1)').click()
        //obtain the lest of names into an array
        let veggiesLocators =await $$('tr td:nth-child(1)')
        let veggiesNames = await veggiesLocators.map(async veggie=> await veggie.getText())
        console.log("Array after map()" + veggiesNames[0])
        veggiesNames = veggiesNames.slice()
        //sort the array A -> create the array B
        let sortedVeggies = veggiesNames.sort()
        console.log("Array sorted => " + sortedVeggies[0])
        await browser.pause(3000)
        //Compare Array A and Array B
        await expectChai(veggiesNames).to.eql(sortedVeggies)
    })

    it('Web Tables Filter Validations', async() => {
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        const searchFilterElement = $("input[id='search-field']");
        await searchFilterElement.setValue('tomato')
        const veggieLocator = $$('tr td:nth-child(1)')
        await expect(veggieLocator).toBeElementsArrayOfSize({eq:1})
        console.log(await veggieLocator[0].getText())
        await expect(await veggieLocator[0]).toHaveTextContaining("Tomato")
    })




})