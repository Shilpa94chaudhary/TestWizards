describe('My First Website',function()
{
    beforeEach(function(){
       cy.visit("https://business.gamezop.com/");
    })
    it('Test-1',function()
    {
        cy.url().should("include", "business");
    })
    it('Test-2',function()
    {
        cy.contains('Publishers').click();
        cy.url().should("include", "publishers");
    })
    it('Test-3',function()
    {
        cy.contains('Advertisers').click();
        cy.url().should("include", "advertisers");
    })
    it('Test-4',function()
    {
        cy.contains('HTML5 Games').click();
        cy.url().should("include", "html5-games");
    })
    it('Test-5',function()    
    {
        cy.contains('Press Coverages').click();
        cy.url().should("include", "press-coverages");
    })    
    })