/// <reference types="cypress-iframe" />
import 'cypress-iframe';

/**
 * What: An iframe is an HTML tag that embeds another webpage or
 *  content (like a video or map) within your page.
 * 
 *  Example:  <iframe src="https://example.com"></iframe>
 * 
 * Install:  npm install -D cypress-iframe
 * 
 * key commands: cy.frameLoaded(), cy.iframe()

 */

describe('Handles Frames', () => {

    it('verify iframe', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('[id="courses-iframe"]')
        cy.iframe().contains('a', "Mentorship").first().click()
        cy.wait(5000)
        cy.iframe().find('h1.pricing-title').should('have.length', 2)
    })

})