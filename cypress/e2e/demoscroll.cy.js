describe('scroll demo', () => {
  it('scroll demo', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.scrollTo('bottom')
    cy.scrollTo('top')
    cy.scrollTo(0, 300)
    cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').scrollIntoView()
  })

})