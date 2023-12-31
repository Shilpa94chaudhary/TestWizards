/// <reference types="Cypress" />
describe('My Fourth Test Suite', function() 
{
//  beforeEach(function(){
//     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//  })
it('Popup case',function() {
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
cy.on('window:alert',(str)=>{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
cy.on('window:confirm',(str)=>{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})
})

it('New Tab Case', function(){
    cy.get('#opentab').invoke('removeAttr','target').click()
    //getting error for below code
    //cy.go('back')
    // cy.wait(3000)
    // cy.go('forward')
})
// go back function
it.only('Demo test', function(){
    cy.visit('https://www.youtube.com/')
    cy.wait(5000);
    cy.get("a[title='Library']").click()
    cy.wait(5000)
    cy.url().should('include','library')
    cy.go('back')
})
})