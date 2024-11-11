class Country{
    selectCountryName(){
        return cy.get('select')
    }
    getTermAndConditionsCheck(){
        return cy.get('.chkAgree').check()
    } 
    getProceedBtn(){
        return cy.contains('button', 'Proceed').click()
    }
}
export default new Country();