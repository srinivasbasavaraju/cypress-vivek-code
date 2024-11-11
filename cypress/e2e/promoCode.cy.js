//export default new PromoPage();
describe('Promo Code Verification', () => {
    it('applies promo code and checks discount', () => {
      cy.visit('/your-page-url');
  
      cy.get('.promoCode').type('rahulshettyacademy');
  
      cy.get('.totAmt').then(($totAmt) => {
        const totAmt = parseFloat($totAmt.text());
  
        cy.get('.promoBtn').click();
  
        cy.wait(7000);
  
        cy.get('.promoInfo').then(($message) => {
          if ($message.text().includes('Invalid code')) {
            cy.get('.promoInfo').should('contain', 'Invalid code..!');
          } else {
            const expectedTotal = totAmt * 0.90;
  
            cy.get('.discountAmt').then(($totalAfter) => {
              const totalAfterDiscount = parseFloat($totalAfter.text());
              expect(totalAfterDiscount).to.equal(expectedTotal);
            });
          }
        });
      });
    });
  });
  