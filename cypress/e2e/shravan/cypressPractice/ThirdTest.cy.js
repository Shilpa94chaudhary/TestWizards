describe('My Third Test Suite', function() 
{
 
it('My ThirdTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//checking checboxes
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get("input[type='checkbox']").check(['option1','option3'])
//selecting static dropdown
cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
//selecting dynamic dropdown
cy.get('#autocomplete').type('ind')
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
 
    if($e1.text()==="India")
    {
        $e1.click()
    }
    cy.get('#autocomplete').should('have.value','India')
})
})
})