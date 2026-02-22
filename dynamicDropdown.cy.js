describe('Parabank dropdown test', () => {
  it('Should select account type', () => {
    
    // Visit parabank
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    
    // Scroll down to find the account table after registration
    cy.get('[name="customer.firstName"]').type('John')
    cy.get('[name="customer.lastName"]').type('Doe')
    
    // Find any dropdown on the page
    cy.get('select').first().select(0)  // Select first option
    
    // Verify it was selected
    cy.get('select').first().should('not.have.value', '')
  })
})