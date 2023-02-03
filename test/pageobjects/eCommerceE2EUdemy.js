class EcommerceE2E{
    get userName() {
        return $("#username");
    }

    get password(){
        return $("#password");
    }

    get alertFailedLogin(){
        return $('.alert-danger');
    }

    get signInBtn(){
        return $("#signInBtn");
    }

    get checkOutBtn(){
        return $('.btn-primary');
    }

    get checkoutPricesLocator(){
        return $$('tr td:nth-child(4) strong');
    }

    get totalValueLocator(){
        return $('h3 strong');
    }

    get checkoutToPayLocator(){
        return $('.btn-success');
    }

    get purchaseBtnLocator(){
        return $("[value='Purchase']");
    }

    get countryPurchaseLocator(){
        return $('#country')
    }

    get ellipsisLocator(){
        return $('lds-ellipsis');
    }

    get indiaOptionLocator(){
        return $('=India');
    }

    get successShopTextLocator(){
        return $('.alert-success strong');
    }

    get cards(){
        return $$("div[class='card h-100']");
    }

    async login(userName, password) {
        await this.userName.setValue(userName);
        await this.password.setValue(password);
        await this.signInBtn.click();
    }

    async addProductToCart(products){
        for(let i = 0; i < await this.cards.length; i++){
            const card = this.cards[i].$("div h4 a")
            //console.log("Dentro del for " + await card.getText())
            if(products.includes(await card.getText())){
                await this.cards[i].$('.card-footer button').click()
                //console.log("SI EXISTO HICE CLICK \n" + await card.getText())
            }
        }
    }


}
const ecommerceElements = new EcommerceE2E();
export default ecommerceElements;