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
//it will iterate all the product & find the desired product and add it to the cart
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
    console.log('sf')
})
 
cy.get('@productLocator').find('.product').each(($el, index, $list) => {
 
const textVeg=$el.find('h4.product-name').text()
if(textVeg.includes('Cashews'))
{
$el.find('button').click()
}
})
 
//assert if logo text is correctly displayed
cy.get('.brand').should('have.text','GREENKART')
 
//this is to print in logs
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text())
 
})
//const logo=cy.get('.brand')
//cy.log(cy.get('.brand').text())
// cy.log(logo.text())
})
})
