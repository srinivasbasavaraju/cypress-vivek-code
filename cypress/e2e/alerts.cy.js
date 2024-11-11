
/**
1.JS Alert
Example: A simple message pops up with an "OK" button, like a warning before deleting something.
Definition: Displays a message that only allows acknowledgment (OK).

2. Confirm
Example: A dialog with "OK" and "Cancel" buttons, asking if you want to proceed with an action, like submitting a form.
Definition: A dialog that asks for confirmation from the user with two options: "OK" or "Cancel."

3. Prompt
Example: A pop-up that asks for user input, like renaming a file or providing additional info.
Definition: Displays a message with a text box and requests user input, providing "OK" and "Cancel" options.

4.
*/

//implicitly: should, and 

//explicitly: expect, assert

it("JS Alert", () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get('button[onclick="jsAlert()"]').click()

    cy.on('window:alert', (t) => {
        expect(t).to.contains('I am a JS Alert')
    })
    cy.get('[id="result"]').should('have.text', 'You successfully clicked an alert')
})

it("JS Confirm Alert - OK", () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get('button[onclick="jsConfirm()"]').click()

    cy.on('window:confirm', (t) => {
        expect(t).to.contains('I am a JS Confirm')
    })
    cy.get('[id="result"]').should('have.text', 'You clicked: Ok')
})

it("JS Confirm Alert - CANCEL", () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get('button[onclick="jsConfirm()"]').click()

    cy.on('window:confirm', (t) => {
        expect(t).to.contains('I am a JS Confirm')
    })

    cy.on('window:confirm', () => false)

    cy.get('[id="result"]').should('have.text', 'You clicked: Cancel')
})

it("JS Prompt Alert", () => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns("welcome")
    })

    cy.get('button[onclick="jsPrompt()"]').click()
    cy.get('[id="result"]').should('have.text', 'You entered: welcome')
})

it.only('Auth alerts', () => {

    cy.visit('https://the-internet.herokuapp.com/basic_auth',
        {
            auth: {
                username: "admin", password: "admin"
            }
        })

    cy.get('[id="content"] p').should('have.contain', 'Congratulations!')

})