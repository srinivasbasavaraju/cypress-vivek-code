import 'cypress-file-upload';

/**
 * 
 * What:File upload is the process of selecting a file from your device and 
 * sending it to a server or application for storage 
 * 
 * Install: npm install -D cypress-file-upload
 * 
 */

it('File Upload',()=>{

    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('[id="file-upload"]').attachFile('my_resume.pdf')
    cy.get('[id="file-submit"]').click()

    cy.wait(5000)

    cy.contains('File Uploaded!').should('be.visible')




})