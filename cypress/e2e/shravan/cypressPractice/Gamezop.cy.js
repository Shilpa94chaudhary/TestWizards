/// <reference types="Cypress" />
describe('Gamezop testcases', function () {
    before(function () {
        // cy.viewport(393, 851);
        // mobile_view_wrapper.mobileview();
        cy.visit('https://www.gamezop.com/en/get-started/category-selection')
    })
    it('Gamezop logo test case', function () {
        cy.get('[alt="Company Logo"]')
            .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Flogo%2Fgamezop-main-long-blue.png&w=256&q=75')
            .should('be.visible')
    })

    it.only('Gamezop First test case', function () {
        cy.get('.style_center__1JUKO').find('.style_image__1KiAj').find('img').should('have.attr', 'src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+')
        cy.get('.style_center__1JUKO').find('.style_language_box__1M-IP').should('have.text', 'SELECT LANGUAGE English')
        cy.get('.style_language_list_wrapper__Lex4R').find('li').should('include.text', ['English','हिंदी'])
        // cy.wait(5000)
        // cy.contains('తెలుగు').click()

    })
    it('Gamezop second test case', function () {
        cy.get(':nth-child(1) > .category-style_btn__1e6w9').click()
    })
})