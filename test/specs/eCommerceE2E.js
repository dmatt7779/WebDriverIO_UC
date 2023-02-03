describe('Ecommerce Application E2E', async() => {
    
    it('E2E Checkout Test', async() =>{
        const products = ["iphone X", "Blackberry"]
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        const username = await $("#username");
        const password = await $("#password");
        const singInBtn = await $("#signInBtn");
        const checkOutBtn = await $('.btn-primary');
    
        await username.setValue("rahulshettyacademy");
        await password.setValue("learning");
        await singInBtn.click();
        await checkOutBtn.waitForExist();

        const cards = await $$("div[class='card h-100']");
        for(let i = 0; i < await cards.length; i++){
            const card = cards[i].$("div h4 a")
            //console.log("Dentro del for " + await card.getText())
            if(products.includes(await card.getText())){
                await cards[i].$('.card-footer button').click()
                //console.log("SI EXISTO HICE CLICK \n" + await card.getText())
            }
        }
/*         let prueba = await Promise.all(cards.map(async card => await card.$("div h4 a").getText()))
        console.log("Pruebita :) => " + await prueba) */
        await checkOutBtn.click()
        
        const checkoutPricesLocator = $$('tr td:nth-child(4) strong')
        const sumOfProducts = await checkoutPricesLocator.map( async (productPrice) => parseInt((await productPrice.getText()).split(".")[1].trim())).reduce((acc,price) => acc+price,0)
        //console.log("Suma total de precios = " + await sumOfProducts)
        const totalValueLocator = await $('h3 strong')
        const totalIntValue = parseInt((await totalValueLocator.getText()).split(".")[1].trim())
        //console.log("Total value Locator => " + await totalIntValue)
        await expect(sumOfProducts).toEqual(totalIntValue)
        const checkoutToPayLocator = await $('.btn-success')
        await checkoutToPayLocator.click()

        const purchaseBtnLocator = await $("[value='Purchase']")
        await purchaseBtnLocator.waitForExist()
        const countryPurchaseLocator = await $('#country')
        await countryPurchaseLocator.setValue('ind')
        const ellipsisLocator = await $('lds-ellipsis')
        await ellipsisLocator.waitForExist({reverse:true})
        const indiaOptionLocator = await $('=India')
        await indiaOptionLocator.click()
        await purchaseBtnLocator.click()

        const successShopTextLocator = $('.alert-success strong')
        await expect(successShopTextLocator).toHaveText('Success!')

    })

})