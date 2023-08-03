/// <reference types="Cypress" />
import { mobileview } from "./mobileview";
describe('Gamezop Testcases', function () {
    beforeEach(function () {
        cy.viewport(393, 851);
        mobileview();
        //cy.visit('https://www.gamezop.com/en/get-started/category-selection')
    })
    it('Gamezop Logo Test Case', function () {
        cy.get('[alt="Company Logo"]')
            .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Flogo%2Fgamezop-main-long-blue.png&w=256&q=75')
            .and('be.visible')
    })

    it('Gamezop Language Dropdown Test Case', function () {
        cy.get('.style_center__1JUKO').find('.style_image__1KiAj').find('img').should('have.attr', 'src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+')
        cy.get('.style_center__1JUKO').find('.style_language_box__1M-IP').should('have.text', 'SELECT LANGUAGE English')
        cy.get('.style_center__1JUKO').click().find('.style_language_list_wrapper__Lex4R')
            .should('include.text', 'English')
            .and('include.text', 'हिंदी')
            .and('include.text', 'ଓଡିଆ')
            .and('include.text', 'ಕನ್ನಡ')
            .and('include.text', 'తెలుగు')
            .and('include.text', 'தமிழ்')
            .and('include.text', 'русский')
            .and('include.text', 'Tiếng Việt')
            .and('include.text', 'Français')
            .and('include.text', 'عربي')

    })
    it('Gamezop Game Category Test Case', function () {
        cy.get('[alt="Select Action Category"]').should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Fcomet%2Fassets%2Fimg%2Fget-started%2Fchoice-action.png&w=384&q=75')
        cy.get('[alt="Select Sports Category"]').should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Fcomet%2Fassets%2Fimg%2Fget-started%2Fchoice-sports.png&w=384&q=75')
        cy.get('.style_category_name__27x8e').should('include.text', 'Action').and('include.text', 'Sports')
        cy.get('.category-style_btn__1e6w9').should('include.text', 'Select')
        cy.get('[alt="Select Action Category"]').click()
        cy.get('[alt="Select Strategy Category"]').should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Fcomet%2Fassets%2Fimg%2Fget-started%2Fchoice-strategy.png&w=384&q=75')
        cy.get('[alt="Select Arcade Category"]').should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Fcomet%2Fassets%2Fimg%2Fget-started%2Fchoice-arcade.png&w=384&q=75')
        cy.get('.style_category_name__27x8e').should('include.text', 'Strategy').and('include.text', 'Arcade')
        cy.get('[alt="Select Arcade Category"]').click()
    })
    it('Gamezop start playing test case', function(){
        cy.visit('https://www.gamezop.com/en/get-started/start-playing')
        cy.get('.style_start_playing__3Yr30').should('include.text', 'START PLAYING')
        cy.get('.style_start_playing__3Yr30').click()
    })
    it.only('Gamezop header test cases', function(){
        cy.get('[alt="Logo"]')
            .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Flogo%2Fgamezop-main-long-blue.png&w=256&q=75')
            .and('be.visible')
        cy.get('[alt="Astrozop"]')
            .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Fcomet%2Fassets%2Fimg%2Fastrozop%2Fastrozop-tarot.gif&w=64&q=75')
            .and('be.visible')
        cy.get('.ml-8 > a').should('have.attr', 'href', 'https://6302.read.astrozop.com')
    })
})