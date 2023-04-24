/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
describe('Checkout', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();
    })


    it('Verify navigating to Checkout page when there are no products added to the Shopping Cart', () => {
        //TC_CO_001

         //visit the Homepage
         cy.visit(baseUrl);

        //Click on 'Checkout' header option
        cy.get('.fa').eq(5).click();

        //Check that user is taken to an empty 'Shopping Cart' page instead of 'Checkout' page
        cy.get('#content').contains('Your shopping cart is empty!').should('be.visible');
        cy.get('#content > h1').contains('Shopping Cart').should('be.visible');
    })

    it('Verify navigating to Checkout page from Shopping Cart page', () => {
        //TC_CO_002

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

        //Click on 'Checkout' button in the 'Shopping Cart' page
        cy.get('.btn-primary').contains('Checkout').click();//can not test because there is no available product on this website and it doesnt allow me to go to checkout
        

    })
})