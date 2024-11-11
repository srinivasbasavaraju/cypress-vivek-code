/* before(()=>{}) //this hook will only one time in before
after (()=>{}) //this hook will only one time in after
beforeEach(()=>{}) // 
afterEach(()=>{}) //
*/

describe('HOOKS', () => {

    before(()=>{
        cy.log(' visit application...........!')
    })

    after(()=>{
        cy.log('close appliaction...........!')
    })

    beforeEach(()=>{
        cy.log('aplliaction loaded..........')
    })

    afterEach(()=>{
        cy.log('aplliaction deleted..........')
    })

    it('username hook', () => {
        cy.log("verify username............!!")
    })

    it('password hook', () => {
        cy.log("verify password............!!")
    })

    it('clcik submit hook', () => {
        cy.log("verify clcik submit button............!!")
    })

})