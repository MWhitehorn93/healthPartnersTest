describe('Amazon text search test', () => {
    it('Amazon text search test', () => {
        //The CSS selectors in this test are very poor and this is not what I would use in a commercial setting. In a commercial setting I would enter data-testID all over the site
        //The todays deals square is not located on cypress (I assume it needs a cookie or a user to be logged in). I have used the the macbook resolution for the link to appear on the banner which is just below the search bar
        cy.viewport('macbook-15')
        //Cy visit amazons website
        cy.visit('https://www.amazon.co.uk/')
        //a-autoid-0 is the ID selector for the accept cookies button. In a commerical setting I would assign a [data-testid] to every element to give them a clear name. 
        //Element is cicked
        cy.get('#a-autoid-0').click()
        //#nav-xshop is the element ID for the banner that locates Today' Deals. The link is clicked
        cy.get('#nav-xshop').contains("Today's Deals").click()
        //As this is a simple test, the first item is selected. 
        cy.get('[data-testid="grid-deals-container"] > :nth-child(1)').click()
        //As this is a simple test, the first item is selected. 
        cy.get('#octopus-dlp-asin-stream > .a-unordered-list > :nth-child(1) > .a-list-item').click()
        //The add to cart button is clicked
        cy.get('#add-to-cart-button').click()
        //#sc-buy-box-ptc-button > .a-button-inner > .a-button-input is the locator for the proceed to checkout button
        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
        //This is the end of the test as the next stop requires login credentials 
    
        
  
    })
  })