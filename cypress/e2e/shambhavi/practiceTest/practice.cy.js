describe('My First test suite',function()
{
    it('My first test',function()
    {
        cy.visit("https://dev-dashboard.gamezop.com/");
        cy.get('input[name="email"]').type('shilpa@gamezop.co');
        cy.get('input[name="password"]').type('shilpa94');
        cy.contains('Login').click();
        cy.wait(5000);
        cy.get('.Dashboard_dashboard__header__Xz5Kc > .Button_btn__zmap9 > .Button_btn__inner-container__v0VU3').click();
    })
})