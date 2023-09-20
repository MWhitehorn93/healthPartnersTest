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
    })
})