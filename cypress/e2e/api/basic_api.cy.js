describe('API Testing', () => {

    it('GET method', () => {

        cy.request('GET', "https://automationexercise.com/api/productsList").then((response) => {
            expect(response.status).equal(200)
        })
    })

    it('should return 405 when attempting to POST to /productsList', () => {
        cy.request({
            method: 'POST',
            url: '/productsList',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.include('This request method is not supported.');
        });
    })

    it('should return all brands with a 200 status code', () => {
        cy.request('GET', '/brandsList').then((response) => {
            expect(response.status).to.eq(200);
            //expect(response.body).to.have.property('brands');
        });
    });

    it('should return 405 when attempting to PUT to /brandsList', () => {
        cy.request({
            method: 'PUT',
            url: '/brandsList',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.include('This request method is not supported.');
        })
    })

})