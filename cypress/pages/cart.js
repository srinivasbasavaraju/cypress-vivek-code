class CartPage{

    enterPromoCode(procode){
        return cy.get('.promoCode').type(procode)
    }
    getPromoApplay(){
        return cy.get('.promoBtn').click() 
    }
    getTotalAmount(){
        return cy.get('.totAmt')
    }
    getDiscountAmount(){
        return cy.get('.discountAmt')
    }
    getPromoInfo(){
        return cy.get('.promoInfo')
    }
    getPlaceOrderBtn(){
        return cy.contains('button', 'Place Order').click()
    }

}
export default new CartPage();
