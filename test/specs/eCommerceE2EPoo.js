import ecommerceElements from '../pageobjects/eCommerceE2EUdemy.js';
import reviewPageElements from '../pageobjects/reviewPage.js';
import fs from 'fs';
const credentialsData = JSON.parse(fs.readFileSync('test/testData/LoginTest.json'));
const productsData = JSON.parse(fs.readFileSync('test/testData/MobilesData.json'))

describe('Ecommerce Application E2E POO', async() => {

    credentialsData.forEach(({username,password}) => {

        it('Failed Login credentials', async()=>{
            await browser.url('https://rahulshettyacademy.com/loginpagePractise/');
            await browser.pause(5000)
            await ecommerceElements.login(username,password);
            await browser.pause(5000)
//            console.log('Hola aqui -> ' + await ecommerceElements.alertFailedLogin.getText());
        })
    })

    productsData.forEach(({products}) => {
        it('E2E Checkout Test with different Mobile Selections', async()=> {
            let sumOfProducts;
            let totalIntValue;
            await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
            await ecommerceElements.login("rahulshettyacademy","learning");
            await ecommerceElements.checkOutBtn.waitForExist();
            await ecommerceElements.addProductToCart(products);
            await ecommerceElements.checkOutBtn.click();
            sumOfProducts = await reviewPageElements.sumOfProducts();
            totalIntValue = await reviewPageElements.totalFormattedPrice();
            await expect(sumOfProducts).toEqual(totalIntValue);
            await ecommerceElements.checkoutToPayLocator.click();
            await ecommerceElements.purchaseBtnLocator.waitForExist();
            await ecommerceElements.countryPurchaseLocator.setValue('ind');
            await ecommerceElements.ellipsisLocator.waitForExist({reverse:true});
            await ecommerceElements.indiaOptionLocator.click();
            await ecommerceElements.purchaseBtnLocator.click();
            await expect(await ecommerceElements.successShopTextLocator).toHaveText('Success!');
        })
    })
    
/*     it('E2E Checkout Test', async() =>{
        const products = ["iphone X", "Blackberry"];
        let sumOfProducts;
        let totalIntValue;
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await ecommerceElements.login("rahulshettyacademy","learning");
        await ecommerceElements.checkOutBtn.waitForExist();
        await ecommerceElements.addProductToCart(products);
        await ecommerceElements.checkOutBtn.click();
        sumOfProducts = await reviewPageElements.sumOfProducts();
        totalIntValue = await reviewPageElements.totalFormattedPrice();
        await expect(sumOfProducts).toEqual(totalIntValue);
        await ecommerceElements.checkoutToPayLocator.click();
        await ecommerceElements.purchaseBtnLocator.waitForExist();
        await ecommerceElements.countryPurchaseLocator.setValue('ind');
        await ecommerceElements.ellipsisLocator.waitForExist({reverse:true});
        await ecommerceElements.indiaOptionLocator.click();
        await ecommerceElements.purchaseBtnLocator.click();
        await expect(await ecommerceElements.successShopTextLocator).toHaveText('Success!');
    }) */

})