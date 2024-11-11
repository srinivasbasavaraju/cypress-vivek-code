/// <reference types="Cypress" />

/**
 * 
 * 1. Handling of the type box.
 */

describe('Handling the elements', () => {

    it('text box', () => {
        cy.visit('https://register.rediff.com/register/register.php')
        cy.get('input[name="name036d006e"]').clear().type('Srinivas', { force: true })
        cy.get('input[name="name036d006e"]').contains("Srinivas")
    })

    it('radio button - 1 ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').as('redio1')  //alias

        cy.get('@redio1').should('not.be.checked')
        cy.get('@redio1').click()
        cy.get('@redio1').should('be.checked')

    })

    it('radio button - 2 ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[name="radioButton"]').each((redio) => {
            cy.wrap(redio).should('not.be.checked')
            cy.wrap(redio).click()
            cy.wrap(redio).should('be.checked')
        })

    })

    it('Check box -1 ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[id="checkBoxOption1"]').as('check1')  //alias

        cy.get('@check1').should('not.be.checked')
        cy.get('@check1').click()
        cy.get('@check1').should('be.checked')

    })

    it('Check box - 2 ', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').each((check) => {
            cy.wrap(check).should('not.be.checked')
            cy.wrap(check).click()
            cy.wrap(check).should('be.checked')
        })
    })

})