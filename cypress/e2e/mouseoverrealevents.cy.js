describe('Mouseover', () => {
  it('mouseover demo', () => {
    cy.visit('https://www.w3schools.com')
    

    cy.get('#navbtn_tutorials').realHover() //This is the best way to trigger mouseover event, it works on all websites
  
    
    // assert dropdown is visible
    //cy.get('.dropdown-menu').should('be.visible')
  })
})