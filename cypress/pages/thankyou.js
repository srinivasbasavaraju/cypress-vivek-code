class Thanks{
    getThanks(){
      return cy.contains('Thank you').should('be.visible')
    }
}
export default new Thanks();