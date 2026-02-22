describe('RadioBox Functionality', () => {
  it('radio button demo', () => {
   cy.visit('https://www.zoho.com/us/books/accounting-software-demo/#/home/gettingstarted', {headers: { 'Accept-Encoding': 'gzip, deflate' }})
   cy.get('.font-small > .nav-link').click()
   cy.get('[type="radio"]').check(['letter', 'landscape'])
   cy.get('[type="radio"]').check()
   cy.get('#savedusername').check()

  })
})