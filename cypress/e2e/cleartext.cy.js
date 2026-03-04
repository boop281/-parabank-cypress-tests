describe('clear Text demo', () => {
  it('clear Text demo', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > form > div:nth-child(2) > input').type('santacruz')
    cy.get('#loginPanel > form > div:nth-child(2) > input').clear()
    
  })

})