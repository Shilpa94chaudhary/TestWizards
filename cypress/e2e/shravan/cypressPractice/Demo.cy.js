 describe('My First Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')
cy.wait(2000)
//selenium get hit url in browser, cypress get acts like findElement of selenium
cy.get('.product').should('have.length',5)
cy.get('.product:visible').should('have.length',4)
cy.get('.products').find('.product').should('have.length', 4)
//cypress will wait for 2 second and find the 2nd product in list and add it to the cart
cy.wait(2000)
cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
cy.get('.products').find('.product').each()
})
})