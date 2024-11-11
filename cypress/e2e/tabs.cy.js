it('Handling new domine', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('[id="opentab"]').then(function (el) {
        const url = el.prop('href') //href

        cy.visit(url)
        cy.origin(url,()=>{
            cy.contains('a', "About us").first().should('be.visible')
        })
    })
})


it.skip('Handle the Tabs', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('[id="opentab"]').invoke('removeAttr', 'target').click()
    cy.get('[alt="Logo"]').last().should('be.visible')
    cy.get('[alt="Logo"]').first().should('be.visible')
})


describe.skip('Mouse handle', () => {

    it('Mouse hover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('[id="mousehover"]').invoke('mouseover')
        cy.get('[id="mousehover"]').trigger('mouseover').then(() => {
            cy.contains('Top').click({ force: true })
        })
    })

    it('Mouse hover -right click', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('[id="mousehover"]').invoke('mouseover')
        cy.get('[id="mousehover"]').trigger('mouseover').then(() => {
            cy.get('#locator').dblclick()
            cy.get('#locator').rightclick()
            cy.get('[id="mousehover"]').trigger('mouseleave')
            cy.get('[id="mousehover"]').trigger('mouseout')
        })
    })

})