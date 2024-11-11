describe('Data driven Test', () => {

    let userdata

    before(() => {
        cy.fixture('orangeHrm.json').then((data) => {
            userdata = data
        })
    })

    it.skip('Basic', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.wait(4000)
        cy.contains('h6', "Dashboard").should('be.visible')

    })

    it.skip('Fixtures direct access', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('orangeHrm.json').then((data) => {
            cy.get('[name="username"]').type(data.username)
            cy.get('[name="password"]').type(data.password)
            cy.get('[type="submit"]').click()
            cy.wait(4000)
            cy.contains('h6', data.header).should('be.visible')
        })
    })

    it.skip('Access throu hooks', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name="username"]').type(userdata.username)
        cy.get('[name="password"]').type(userdata.password)
        cy.get('[type="submit"]').click()
        cy.wait(4000)
        cy.contains('h6', userdata.header).should('be.visible')

    })

    it('Mulitple user data', () => {

        cy.fixture('orangeHrm.json').then((multiUserData) => {
            multiUserData.forEach((data1) => {
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                cy.get('[name="username"]').type(data1.username)
                cy.get('[name="password"]').type(data1.password)
                cy.get('[type="submit"]').click()
                cy.contains(data1.header).first().should('be.visible')
            })
        })
    })

})