/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password } = tutorialNinjaUserDetails

describe('Recurring Payments', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })

    it('Verify navigating to Recurring Payments page from My Account page', () => {
        //TC_RCP_001


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

        // Click on 'Recurring payments' from the 'My Account' page
        cy.get('#content').contains('Recurring payments').should('be.visible').click();

        //Check that User is taken to 'Recurring Payments' page
        cy.get('#content').contains('Recurring Payments').should('be.visible');
        cy.get('.breadcrumb').contains('Recurring Payments').should('be.visible');
    })

    it('Verify navigating to Recurring Payments page using Right Column options', () => {
        //TC_RCP_002


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

        //Click on 'Recurring payments' Right Column option
        cy.get('#column-right').contains('Recurring payments').should('be.visible').click();

        //Check that User is taken to 'Recurring Payments' page
        cy.get('#content').contains('Recurring Payments').should('be.visible');
        cy.get('.breadcrumb').contains('Recurring Payments').should('be.visible');
    })

    it('Verify Recurring Payments page when there are no recurring payments done by the User', () => {
        //TC_RCP_003


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

        //Click on 'Recurring payments' Right Column option
        cy.get('#column-right').contains('Recurring payments').should('be.visible').click();

        //Check that Text - 'No recurring payments found!' is displayed 
        cy.get('#content').contains('No recurring payments found!').should('be.visible');
    })

    it('Verify Continue button in the Recurring Payments page', () => {
        //TC_RCP_004


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

        //Click on 'Recurring payments' Right Column option
        cy.get('#column-right').contains('Recurring payments').should('be.visible').click();

        //Click on 'Continue' button
        cy.get('.btn').eq(10).click();

        //Check that User is taken to 'My Account' page
        cy.get('#content').contains('My Account').should('be.visible');
        cy.get('.breadcrumb').contains('Account').should('be.visible');
    })

    it('Verify the Breadcrumb of Recurring Payments page', () => {
        //TC_RCP_006


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

        //Click on 'Recurring payments' Right Column option
        cy.get('#column-right').contains('Recurring payments').should('be.visible').click();

        //Check the Breadcrumb of the displayed  'Recurring Payments' page
        cy.get('.breadcrumb').contains('Recurring Payments').should('be.visible');
    })

    it('Verify the Page URL, Page Heading and Page Title of Recurring Payments page', () => {
        //TC_RCP_007


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

        //Click on 'Recurring payments' Right Column option
        cy.get('#column-right').contains('Recurring payments').should('be.visible').click();

        //Check that  Correct Page URL, Page Heading and Page Title is displayed in the 'Recurring Payments' page
        cy.url().should('contain', '/index.php?route=account/recurring');
        cy.title().should('eq', 'Recurring Payments');
        cy.get('#content').contains('Recurring Payments').should('be.visible');



    })
})