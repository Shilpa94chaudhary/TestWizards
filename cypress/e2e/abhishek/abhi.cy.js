// https://rahulshettyacademy.com/seleniumPractise/#/

describe('My First Test', () => {
    it('Visit Website', () => {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(3000)
      cy.get('.product').should(have.lenghth,4)




    })
  })
