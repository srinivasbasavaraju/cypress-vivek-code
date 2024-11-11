class HomePage{

    getSearchButton(vegName){
        return cy.get('.search-keyword').type(vegName)
    }
    getProducts(){
       return cy.get('.products')
   
    }
    getCartIcon(){
        return cy.get('.cart-icon > img').click()
    }
    getCheckOut(){
        return  cy.contains('button', "PROCEED TO CHECKOUT").click()
    }
}
export default new HomePage();