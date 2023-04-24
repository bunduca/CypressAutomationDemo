// <reference types="cypress" />hover


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
describe('Recurring Payments', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();
    })


    it.skip('Verify navigating to Recurring Payments page from My Account page', () => {
        //TC_RCP_001

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

    it.skip('Verify navigating to Recurring Payments page using Right Column options', () => {
        //TC_RCP_002

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

    it.skip('Verify Recurring Payments page when there are no recurring payments done by the User', () => {
        //TC_RCP_003

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

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();

        //Click on 'Recurring payments' Right Column option
        cy.get('#column-right').contains('Recurring payments').should('be.visible').click();

        //Check that Text - 'No recurring payments found!' is displayed 
        cy.get('#content').contains('No recurring payments found!').should('be.visible');
    })

    it.skip('Verify Continue button in the Recurring Payments page', () => {
        //TC_RCP_004

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

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();

        //Click on 'Recurring payments' Right Column option
        cy.get('#column-right').contains('Recurring payments').should('be.visible').click();

        //Click on 'Continue' button
        cy.get('.btn').eq(8).click();

        //Check that User is taken to 'My Account' page
        cy.get('#content').contains('My Account').should('be.visible');
        cy.get('.breadcrumb').contains('Account').should('be.visible');
    })

    it.skip('Verify the Breadcrumb of Recurring Payments page', () => {
        //TC_RCP_006

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