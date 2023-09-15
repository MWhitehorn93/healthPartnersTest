describe('Amazon text search test', () => {
  it('Amazon text search test', () => {
    //Cy visit amazons website
    cy.visit('https://www.amazon.co.uk/')
    //a-autoid-0 is the ID selector for the accept cookies button. In a commerical setting I would assign a [data-testid] to every element to give them a clear name. 
    //Element is cicked
    cy.get('#a-autoid-0').click()
    //#twotabsearchtextbox is the selector for the search bar on amazns website
    //I put a clear in first, just in case there is already some text in the search bar. This is something I have implemented commercially
    //Cypress then types health products
    cy.get('#twotabsearchtextbox').clear({force: true }).type("Health Products").clear({force: true })
    //I tried asserting the line of code below but I was struggling to reach the correct elemnent, as seen in the Force true's above 
    //cy.get('#twotabsearchtextbox').should("have.text", "Health Products")

  })
})