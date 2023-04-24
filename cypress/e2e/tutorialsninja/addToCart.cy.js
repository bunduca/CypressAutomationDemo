/// <reference types="cypress" />hover


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
describe('Add to Cart', () => {




    it('Verify adding the product to Cart from Product Display Page', () => {
        //TC_ATC_001

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        // Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Check that Success message with text - 'Success: You have added Product Name to your shopping cart!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Check that product is successfully displayed in the 'Shopping Cart' page
        cy.get('.table-responsive').contains('iMac').should('be.visible');
    })

    it('Verify adding the product to Cart from Wish List Page', () => {
        //TC_ATC_002

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Click on 'Wish List' header option 
        cy.get('#wishlist-total > .fa').click();

        //Click on 'Add to Cart' icon option in the displayed 'My Wish List' page
        cy.get('button').eq(8).click();

        //Check that success message with text - 'Success: You have added Product Name to your shopping cart!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');

        //Click on 'Shopping Cart' header option
        cy.get(':nth-child(4) > a > .fa').click();

        //Check that product is successfully displayed in the 'Shopping Cart' page
        cy.get('.table-responsive > .table').contains('iMac').should('be.visible');
    })

    it('Verify adding the product to Cart from Search Results Page', () => {
        //TC_ATC_003

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on 'Add to Cart' option on the product that is displayed in the Search Results
        cy.get('button').eq(10).click();

        //Check that success message with text - 'Success: You have added Product Name to your shopping cart!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');

        // Click on 'Cart' button which is in black color beside the search icon button on the top of the page
        cy.get('.btn-inverse').click();

        //Check that product is successfully displayed in the 'Shopping Cart' page
        cy.get('#cart > .dropdown-menu').contains('iMac').should('be.visible');
    })

    it('Verify adding the product to Cart from the Related Products section of the Product Display Page', () => {
        //TC_ATC_004

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('Apple Cinema 30"');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        // Click on 'Add to Cart' button on one of the Products displayed in the Related Products section of the displayed 'Product Display' page
        cy.get('button').eq(17).click();

        //Check that success message with text - 'Success: You have added Product Name to your shopping cart!' is displayed
        cy.get('.alert').contains('Success: You have added iPhone to your shopping cart!').should('be.visible');

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Check that product is successfully displayed in the 'Shopping Cart' page
        cy.get('.table-responsive').contains('iPhone').should('be.visible');
    })

    it('Verify adding the product to Cart from the Products displayed in the category or sub-category page', () => {
        //TC_ATC_005

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Click on 'Desktops' menu option
        cy.get('.collapse').contains('Desktops').click();

        //Click on 'Show All Desktops' option 
        cy.get('.open > .dropdown-menu').contains('Show All Desktops').should('be.visible').click();

        //Select 'Mac' subcategory option from the left side options 
        cy.get('#column-left').contains('Mac').click();

        //Click on 'Add to Cart' button that is availble on any of the Products of the displayed Category or Sub-category pages
        cy.get('button').eq(11).click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Check that product is successfully displayed in the 'Shopping Cart' page
        cy.get('.table-responsive').contains('iMac').should('be.visible');
    })

    it('Verify adding the product to Cart from the Products displayed in the Featured section of Home page', () => {
        //TC_ATC_006

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Go to Homepage
        cy.get('h1 > a').click();

        //Click on 'Add to Cart' button on the product that is displayed in the 'Featured' section of the Home page
        cy.get('button').eq(10).click();

         //Check that success message with text - 'Success: You have added Product Name to your shopping cart!' is displayed
         cy.get('.alert').contains('Success: You have added MacBook to your shopping cart!').should('be.visible');

         //Click on the 'shopping cart!' link in the displayed success message
         cy.get('.alert').contains('shopping cart').click();
 
         //Check that product is successfully displayed in the 'Shopping Cart' page
         cy.get('.table-responsive').contains('MacBook').should('be.visible');
        })

        it('Verify adding the product to Cart from Product Comparison Page', () => {
            //TC_ATC_007

             //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.product-thumb').click();

        //Add the product to Product Comparison and go to the Product Comparison page
        cy.get('button').eq(14).click();
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');
        cy.get('.alert').contains('product comparison').click();

        //Click on 'Add to Cart' button on the product that is displayed in the 'Product Comparison' page
        cy.get('.btn-primary').click();

        //Check that Success message with text - 'Success: You have added Product Name to your shopping cart!' is displayed
        cy.get('.alert').contains(' Success: You have added iMac to your shopping cart!').should('be.visible');

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();
 
        //Check that product is successfully displayed in the 'Shopping Cart' page
        cy.get('.table-responsive').contains('iMac').should('be.visible');


    })
})