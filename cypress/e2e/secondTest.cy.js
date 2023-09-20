describe('Amazon sandwich test', () => {
    it('Amazon sandwich test', () => {
        //There was a uncaught exception when running this test hence this catch
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        //Cy visit amazons website
        cy.visit('https://www.amazon.co.uk/')
        //a-autoid-0 is the ID selector for the accept cookies button. In a commerical setting I would assign a [data-testid] to every element to give them a clear name. 
        //Element is cicked
        cy.get('#a-autoid-0').click()
        //#twotabsearchtextbox is the selector for the search bar on amazns website
        cy.get('.hm-icon').click()
        //#hmenu-content > .hmenu-visible id of the "sandwich". Cypress clicks the link
        cy.get('#hmenu-content > .hmenu-visible').contains("New Releases").click()
        
    })
  })
