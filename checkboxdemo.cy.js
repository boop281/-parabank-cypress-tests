describe('CheckBox Functionality', () => {
  it('checkbox demo', () => {
    cy.visit('https://www.zoho.com/us/books/accounting-software-demo/#/home/gettingstarted', {headers: { 'Accept-Encoding': 'gzip, deflate' }})
   cy.get('.font-small > .nav-link').click()
   cy.get(':nth-child(4) > .form-check > .form-check-label').click()
   cy.get('[type="checkbox"]').click({ multiple: true })
  })
})