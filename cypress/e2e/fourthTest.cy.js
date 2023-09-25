describe('Add a product test', () => {
    it('Add a prodcut test', () => {
        const newProductName = "Product 3"
        const newProductPrice = "3"
        const newProductDate = "2023-09-18"
        const oldProductName = "Product 2"
        //Code visits the link below 
        cy.visit("https://commitquality.com/")
        //The code below asserts the add a product button text and then clicks on the button
        cy.get('[data-testid="add-a-product-button"]')
        .contains("Add a Product")
        .click()
        //The following code clears the product name text box and enters the test data stored above
        cy.get('[data-testid="product-textbox"]')
        .clear()
        .type(newProductName)
        //The following code clears the product price text box and enters the test data stored above
        cy.get('[data-testid="price-textbox"]')
        .clear()
        .type(newProductPrice)
        //The following code clears the product date text box and enters the test data stored above
        cy.get('[data-testid="date-stocked"]')
        .clear()
        .type(newProductDate)
        //The following code asserts tehe text on the submit button then clicks it 
        cy.get('[data-testid="submit-form"]')
        .contains("Submit")
        .click()
        //The following code asserts the new product name is in the grid
        cy.get('[data-testid="name"]')
        .contains(newProductName)
        //The following code asserts the new product price is in the grid
        cy.get('[data-testid="price"]')
        .contains(newProductPrice)
        //The following code asserts the new product date is in the grid
        cy.get(' [data-testid="dateStocked"]')
        .contains(newProductDate)
        //The following code types the product name into the text box
        cy.get('.filter-textbox')
        .clear()
        .type(newProductName)
        //The following code asserts the filter button text and clicks the button 
        cy.get('[data-testid="filter-button"]')
        .contains("Filter")
        .click()
        //The following code asserts the new product name is in the grid
        cy.get('[data-testid="name"]')
        .contains(newProductName)
        //The following code asserts the new product price is in the grid
        cy.get('[data-testid="price"]')
        .contains(newProductPrice)
        //The following code asserts the new product date is in the grid
        cy.get(' [data-testid="dateStocked"]')
        .contains(newProductDate)
        //The following code asserts the reset button test and then clicks the button 
        cy.get('[data-testid="reset-filter-button"]')
        .contains("Reset")
        .click()
        //The final assertion in this test is to check if an older product is on show after the reset 
        cy.get('[data-testid="name"]')
        .contains(oldProductName)
        cy.visit("https://www.demoblaze.com/index.html")
        //using cy.origin to interact with other elements on https://www.demoblaze.com/index.html
        cy.origin("https://www.demoblaze.com/index.html",() => {
            //These values were created to run this test
            const username = "BuggsBunny"
            const password = "qwertyuiop"
            //#narvbarx is te ID of the banner
            cy.get('#narvbarx')
            //Instead of retreived the elemenet directly I am searching for the text to ensure it is visible
            .contains("Log in")
            .click()
            //The following code enters the username Buggs bunny. The Delay is to slowly type the text as this was very flakey
            cy.get('#loginusername')
            .clear()
            .type(username, {delay:500})
            //Following code asserts the correct username
            cy.get('#loginpassword')
            .clear()
            .type(password)
            cy.get('#loginusername')
            .should('have.value', username)
            //If I had access, I would add an easier selector to this element
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
            .click()
            //This final assertion checks the user name of the test account is dislayed on the banner
            cy.get('#narvbarx')
            .contains(username)
        })
        
        
        })
})