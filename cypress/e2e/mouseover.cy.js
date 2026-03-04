describe('Mouseover', () => {
  it('mouseover demo', () => {
    cy.visit('https://www.w3schools.com')
    
    // trigger hover
    cy.get('#navbtn_tutorials').trigger('mouseover')  //Either way works, some websites works with trigger while some works with invoke

    
  //cy.get('.nav-item').invoke('show') Show the dropdown menu


    
    // assert dropdown is visible
    //cy.get('.dropdown-menu').should('be.visible')
  })
})