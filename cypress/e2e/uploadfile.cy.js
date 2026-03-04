describe('select & upload file demo', () => {
  it('select and upload file demo', () => {
    cy.visit('https://www.zoho.com/us/books/accounting-software-demo/#/documents/inbox')
    cy.get("span > input[type='file']").scrollIntoView()
    cy.get("span > input[type='file']").selectFile("C:\\Users\\MUBARQ\\Desktop\\5.png")
    // cy.get("button > input[type='file']").selectFile("C:\\Users\\MUBARQ\\Desktop\\5.png", {force: true})
    
  })

})