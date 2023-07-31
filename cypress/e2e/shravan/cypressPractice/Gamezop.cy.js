/// <reference types="Cypress" />
describe('Gamezop testcases', function () {
    beforeEach(function () {
        cy.visit('https://dev1.gamezop.com/en/get-started/category-selection')
    })
    it('Gamezop First test case', function () {
        cy.get('.style_center__1JUKO').click()
        cy.wait(5000)
        cy.contains('తెలుగు').click()

    })
})