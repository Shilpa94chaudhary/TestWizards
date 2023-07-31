/// <reference types="Cypress" />
describe('My Fifth Test Suite', function() 
{
    it('Table test case', function(){
        cy.visit('https://docs.cypress.io/api/table-of-contents')
        cy.get('tr td:nth-child(1)').each(($el, index) => {
            const textOne = $el.text()
            if(textOne.includes('.hash()')) {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(usage){
                    const valueUsage = usage.text()
                    expect(valueUsage).to.equal('Get the URL hash of the active page.')
                })
            }
    })
    })
})