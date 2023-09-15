describe('Amazon text search test', () => {
    it('Amazon text search test', () => {
      //Cy visit amazons website
      cy.visit('https://www.amazon.co.uk/')
      //a-autoid-0 is the ID selector for the accept cookies button. In a commerical setting I would assign a [data-testid] to every element to give them a clear name. 
      //Element is cicked
      cy.get('#a-autoid-0').click()
      //#twotabsearchtextbox is the selector for the search bar on amazns website
      //I put a clear in first, just in case there is already some text in the search bar. This is something I have implemented commercially
      //Cypress then types health products and then clears the text 
      cy.get('#twotabsearchtextbox').clear({force: true }).type("Sandwich")
      //#nav-search-submit-button is the ID for the search button, cypress clicks the element
      cy.get('#nav-search-submit-button').click();
      //This checks that the search"Sandwich" is in the url
      cy.url().should('include', "k=Sandwich");
  
    })
  })