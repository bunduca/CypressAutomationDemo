/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password } = tutorialNinjaUserDetails

describe('Returns', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })

    it('Verify navigating to Product Returns page from My Account page', () => {
        //TC_RS_001

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();

        // Click on 'View your return requests' from the 'My Account' page
        cy.get('#content').contains('View your return requests').should('be.visible').click();

        //Check that User is taken to 'Product Returns' page
        cy.get('#content').contains('Product Returns').should('be.visible');
        cy.get('.breadcrumb').contains('Product Returns').should('be.visible');
    })

    it('Verify navigating to Product Returns page using Right column option', () => {
        //TC_RS_002

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();

        //Click on 'Returns' from the Right Column options
        cy.get('#column-right').contains('Returns').click();

        //Check that User is taken to 'Product Returns' page
        cy.get('#content').contains('Product Returns').should('be.visible');
        cy.get('.breadcrumb').contains('Product Returns').should('be.visible');
    })

    it('Verify navigating to Product Returns page by selecting the option from Right Column options before login', () => {
        //TC_RS_003

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Click on 'Returns' Right Column option in the displayed 'Registered Account' page
        cy.get('#column-right').contains('Returns').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        //Check that User is taken to 'Product Returns' page
        cy.get('#content').contains('Product Returns').should('be.visible');
        cy.get('.breadcrumb').contains('Product Returns').should('be.visible');
    })

    it('Verify navigating to Product Returns page when there are no products returned by the User', () => {
        //TC_RS_004

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
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();

        // Click on 'View your return requests' from the 'My Account' page
        cy.get('#content').contains('View your return requests').should('be.visible').click();

        //Check that User is taken to 'Product Returns' page
        cy.get('#content').contains('Product Returns').should('be.visible');
        cy.get('.breadcrumb').contains('Product Returns').should('be.visible');

        //Check that Text - 'You have not made any previous returns!' is displayed on the page 
        cy.get('#content').contains('You have not made any previous returns!').should('be.visible');
    })

    it('Verify Continue button on the Product Returns page', () => {
        //TC_RS_005

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();

        // Click on 'View your return requests' from the 'My Account' page
        cy.get('#content').contains('View your return requests').should('be.visible').click();

        //Check that User is taken to 'Product Returns' page
        cy.get('#content').contains('Product Returns').should('be.visible');
        cy.get('.breadcrumb').contains('Product Returns').should('be.visible');

        //Click on 'Continue' button on the displayed 'Product Returns' page
        cy.get('.btn').eq(10).click();

        //Check that User is taken to 'My Account' page
        cy.get('#content').contains('My Account').should('be.visible');
        cy.get('.breadcrumb').contains('Account').should('be.visible');
    })

    it('Verify the Breadcrumb of Product Returns page', () => {
        //TC_RS_008

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
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();

        // Click on 'View your return requests' from the 'My Account' page
        cy.get('#content').contains('View your return requests').should('be.visible').click();

        //CCheck the Breadcrumb of the displayed  'Product Returns' page
        cy.get('.breadcrumb').contains('Product Returns').should('be.visible');
    })

    it('Verify the Page URL, Page Heading and Page Title of Product Returns page', () => {
        //TC_RS_009

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
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();

        //Click on 'Returns' from the Right Column options
        cy.get('#column-right').contains('Returns').click();

        //Check the 'Page URL', 'Page Title' and 'Page Heading' of 'Product Returns' page
        cy.url().should('contain', '/index.php?route=account/return');
        cy.title().should('eq', 'Product Returns');
        cy.get('#content').contains('Product Returns').should('be.visible');


    })
})