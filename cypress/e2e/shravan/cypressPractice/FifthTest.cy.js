/// <reference types="Cypress" />
describe('My Fifth Test Suite', function() 
{
    it('Table test case', function(){
        cy.visit('https://docs.cypress.io/api/table-of-contents')
        cy.get('tr td:nth-child(2)').each(($el, index) => {
            const textOne = $el.text()
            if(textOne.includes('Get the URL hash of the active page.')) {
                cy.get('tr td:nth-child(2)').eq(index).prev().then(function(usage){
                    const valueUsage = usage.text()
                    expect(valueUsage).to.equal('.hash()')
                })
            }
    })
    })
})