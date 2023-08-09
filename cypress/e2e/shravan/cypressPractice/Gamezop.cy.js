/// <reference types="Cypress" />
import { mobileview } from "./mobileview";
describe('Gamezop Testcases', function () {
    before(function () {
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
        cy.get('.style_center__1JUKO').find('.style_image__1KiAj').find('img')
            .should('have.attr', 'src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+')
        cy.get('.style_center__1JUKO').find('.style_language_box__1M-IP')
            .should('have.text', 'SELECT LANGUAGE English')
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
        cy.get('[alt="Select Action Category"]')
            .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Fcomet%2Fassets%2Fimg%2Fget-started%2Fchoice-action.png&w=384&q=75')
        cy.get('[alt="Select Sports Category"]')
            .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Fcomet%2Fassets%2Fimg%2Fget-started%2Fchoice-sports.png&w=384&q=75')
        cy.get('.style_category_name__27x8e')
            .should('include.text', 'Action')
            .and('include.text', 'Sports')
        cy.get('.category-style_btn__1e6w9')
            .should('include.text', 'Select')
        cy.get('[alt="Select Action Category"]').click()
        cy.get('[alt="Select Strategy Category"]')
            .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Fcomet%2Fassets%2Fimg%2Fget-started%2Fchoice-strategy.png&w=384&q=75')
        cy.get('[alt="Select Arcade Category"]')
            .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Fcomet%2Fassets%2Fimg%2Fget-started%2Fchoice-arcade.png&w=384&q=75')
        cy.get('.style_category_name__27x8e')
            .should('include.text', 'Strategy')
            .and('include.text', 'Arcade')
        cy.get('[alt="Select Arcade Category"]').click()
    })
    it('Gamezop start playing test case', function () {
        //this will visit the URL given
        cy.visit('https://www.gamezop.com/en/get-started/start-playing')
        //this will check for text
        cy.get('.style_start_playing__3Yr30')
            .should('include.text', 'START PLAYING')
        //this will
        cy.get('.style_start_playing__3Yr30').click()
    })
    it('Gamezop header test cases', function () {
        //this will check website logo image and it's visibility
        cy.get('[alt="Logo"]')
            .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Flogo%2Fgamezop-main-long-blue.png&w=256&q=75')
            .and('be.visible')
        //this will check Astrozop icon image and it's visibility
        cy.get('[alt="Astrozop"]')
            .should('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Fcomet%2Fassets%2Fimg%2Fastrozop%2Fastrozop-tarot.gif&w=64&q=75')
            .and('be.visible')
        //this will check for Astrozop icon's URL
        cy.get('.ml-8 > a')
            .should('have.attr', 'href', 'https://6302.read.astrozop.com')
        //this will check for search button image
        cy.get('.style_wrapper__2RsRJ > .w-full path')
            .should('have.attr', 'd', 'M5.417.167a5.252 5.252 0 015.25 5.25 5.252 5.252 0 01-5.25 5.25 5.252 5.252 0 01-5.25-5.25 5.252 5.252 0 015.25-5.25zm0 9.333a4.083 4.083 0 100-8.167 4.082 4.082 0 00-4.084 4.083A4.082 4.082 0 005.417 9.5zm4.95.041l1.65 1.65-.826.825-1.65-1.65.825-.825z')
    })
    it('Search page Test Cases', function () {
        //this will click on the search icon in the Header.
        cy.get('.style_wrapper__2RsRJ > .w-full').click()
        //this will check for text
        cy.get('.style_trendingGame__1mf3n')
            .should('include.text', 'Trending Games')
        //this will check the number of items the div contains
        cy.get('#owned_gamelist > .style_menu__pZGbe')
            .should('have.length', 3)
        //this will check for the presence of h3 tag and number of occurence
        cy.get('#owned_gamelist > .style_menu__pZGbe').find('h3')
            .should('exist')
            .and('have.length', 3)
        //this will check for the presence of p tag and number of occurence
        cy.get('#owned_gamelist > .style_menu__pZGbe').find('p')
            .should('exist')
            .and('have.length', 3)
        cy.get('.style_heart__SHkvk').find('img[alt="Heart"]')
            .should('be.visible')
            .and('have.attr', 'src', '/_next/image?url=https%3A%2F%2Fstatic.gamezop.com%2Fcomet%2Fassets%2Fimg%2Ficons%2Fsearch-grey.svg&w=64&q=75')
            .and('have.length', 3)
        cy.get('.style_head__3P_Kz').should('include.text', 'Popular Game Categories')
        cy.get('.style_tag__3mahh')
            .should('have.length', 7)
            .and('include.text', 'Action')
            .and('include.text', 'Adventure')
            .and('include.text', 'Arcade')
            .and('include.text', 'Puzzle & Logic')
            .and('include.text', 'Sports & Racing')
            .and('include.text', 'Strategy')
            .and('include.text', 'My Favourites')
    })
    it.only('Homepage Test Cases', function(){
        cy.get('.items-center > .style_category_name__27x8e').eq(0).should('include.text', 'Featured Games')
        cy.get('.style_game_card_body_wrapper__2Q6on > .featured-game-card_container__1g5kt').should('have.length', 10)
        cy.get('.items-center > .style_category_name__27x8e').eq(1).should('include.text', 'Action')
       // cy.get(':nth-child(5) > .overflow-scroll > .style_game_card_body_wrapper__2Q6on > :nth-child(2) > .h-full > a > .style_info__cXO6p').should('have.length', 10)
        cy.get('.style_viewAll__3NPHp').eq(1).should('include.text', 'VIEW ALL')
        cy.get('.style_viewAll__3NPHp > .style_circle__3tljK').should('be.visible')
        
    })
})