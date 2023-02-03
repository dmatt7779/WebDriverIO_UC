class reviewPage{

    get checkoutPricesLocator(){
        return $$('tr td:nth-child(4) strong');
    }

    get totalValueLocator(){
        return $('h3 strong');
    }

    async sumOfProducts(){
        const sumOfProducts = await this.checkoutPricesLocator.map( async (productPrice) => parseInt((await productPrice.getText()).split(".")[1].trim())).reduce((acc,price) => acc+price,0)
    }

    async totalFormattedPrice(){
        const totalIntValue = parseInt((await this.totalValueLocator.getText()).split(".")[1].trim())
    }


}
const reviewPageElements = new reviewPage();
export default reviewPageElements;