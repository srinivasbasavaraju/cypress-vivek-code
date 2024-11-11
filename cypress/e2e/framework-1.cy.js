
import HomePage from "./../pages/home"
import CartPage from "./../pages/cart"
import Country from "./../pages/country"
import Thanks from "./../pages/thankyou"

describe('Frame work part 1', () => {

    let myVeg
    let myPromo

    before(() => {
        cy.fixture('veg.json').then((vegitables) => {
            myVeg = vegitables
        })
        cy.fixture('promo.json').then((promo) => {
            myPromo = promo
        })
    })

    it('page object module', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('.search-keyword').type('ca')

        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Carrot')) {

                cy.wrap($el).find('button').click()
            }
        })

        cy.get('.cart-icon > img').click()

        cy.contains('button', "PROCEED TO CHECKOUT").click()

        cy.get('.promoCode').type("Autmation testing")

        cy.get('.promoBtn').click()

        cy.wait(7000)

        cy.get('.promoInfo').contains('Invalid code ..!')

        cy.contains('button', 'Place Order').click()

        cy.get('select').select('India')

        cy.get('.chkAgree').check()

        cy.contains('button', 'Proceed').click()

        cy.contains('Thank you').should('be.visible')
    })

    it.skip('POM', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        HomePage.getSearchButton().type('ca')
        HomePage.getProducts()
        HomePage.getCartIcon().click()
        HomePage.getCheckOut().click()
        CartPage.enterPromoCode().type("Automation testing")
        CartPage.getPromoApplay().click()
        CartPage.getPromoInfo().should('have.text', 'Invalid code ..!')
        CartPage.getPlaceOrderBtn().click()
        Country.selectCountryName().select("India")
        Country.getTermAndConditionsCheck().check()
        Country.getProceedBtn().click()
        Thanks.getThanks().should('be.visible')
    })



    it.only('POM -1', () => {
        cy.visit("/seleniumPractise/#/")
        HomePage.getSearchButton(myVeg.Carrot)
        cy.fecthVegByName(myVeg.Carrot)
        HomePage.getCartIcon()
        HomePage.getCheckOut()
        CartPage.enterPromoCode(myPromo.validPromo)
        CartPage.getPromoApplay()
        cy.wait(7000)
        CartPage.getPromoInfo().should('have.text', myPromo.validText)
        CartPage.getPlaceOrderBtn()
        Country.selectCountryName().select("India")
        Country.getTermAndConditionsCheck()
        Country.getProceedBtn()
        Thanks.getThanks()
    })
})
