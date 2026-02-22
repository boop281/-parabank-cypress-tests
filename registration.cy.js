describe('Registration functionality', () => {
  it('Register a new user', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get('[name="customer.firstName"]').type('Santa')
    cy.get('[name="customer.lastName"]').type('Cruz')
    cy.get('[name="customer.address.street"]').type('123 Main Street')
    cy.get('[name="customer.address.city"]').type('New York')
    cy.get('[name="customer.address.state"]').type('NY')
    cy.get('[name="customer.address.zipCode"]').type('10001')
    cy.get('[name="customer.phoneNumber"]').type('1234567890')
    cy.get('[name="customer.ssn"]').type('123-45-6789')
    cy.get('[name="customer.username"]').type('santacruz')
    cy.get('[name="customer.password"]').type('password123')
    cy.get('[name="repeatedPassword"]').type('password123')
    cy.get('[colspan="2"] > .button').click()
  })

})