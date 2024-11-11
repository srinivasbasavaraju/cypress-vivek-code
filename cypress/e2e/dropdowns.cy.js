

describe('static dropdowns ',()=>{

    it('Handling dropsowns - with select',()=>{
        cy.visit('https://practice.expandtesting.com/dropdown')
        cy.get('[id="dropdown"]').select('Option 1')
        cy.get('[value="1"]').should('have.attr', "selected","selected")//assertions
    })


    it('Handling dropsowns - without select',()=>{
        cy.visit('https://bookonwardticket.com/dummy-ticket/')
        cy.get('[id="select2-dummy-airport-to-ox-container"]').click()
        cy.get('[class="select2-search__field"]').type('italy{enter}')

    })
})


describe('non-static dropdowns ',()=>{

    it('static',()=>{
        cy.visit('https://www.google.com')

        cy.get('[name="q"]').type('cypress automation')

        cy.get('[role="option"]').each(($getLoc)=>{

         if($getLoc.text()==="cypress automation tool"){
            cy.wrap($getLoc).click()

            cy.log('Helloooooo im clicked the tool text.............!')
         }
        })


    })

})