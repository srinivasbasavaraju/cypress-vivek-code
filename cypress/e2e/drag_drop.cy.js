import '@4tw/cypress-drag-drop';

/**
 * 
 * What: Drag and drop is an action where a user selects an element,
 *  drags it to a target area, and then releases it. 
 * 
 * Install: npm install -D @4tw/cypress-drag-drop
 * 
 */

it.skip('Drag and Drops',()=>{

    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

    cy.get('[id="box6"]').should('be.visible')
    cy.get('[id="box106"]').should('be.visible')
    cy.wait(1500)
    cy.get('[id="box6"]').drag('[id="box106"]',{force:true})
    cy.wait(5000)

})

it('scroll into view ',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.contains('© 2019 Powered by Medianh Consulting').scrollIntoView()
})