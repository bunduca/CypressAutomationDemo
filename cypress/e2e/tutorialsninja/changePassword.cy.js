/// <reference types="cypress" />hover


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
describe('Change Password', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();
    })


    it.skip('Verify navigating to Change Password page from My Account page', () => {
        //TC_CP_001

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

        //Click on 'Change your password' link on the displayed 'My Account' page
        cy.get('#content').contains('Change your password').click();

        //Check that user is navigated to 'Change Password' page
        cy.get('#content > h1').contains('Change Password').should('be.visible');
        cy.get('.breadcrumb').should('be.visible').contains('Change Password').should('be.visible');
    })

    it.skip('Verify navigating to Change Password page using Password Right column option', () => {
        //TC_CP_002

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

        //Click on 'Password' Right Column option
        cy.get('#column-right').contains('Password').click();

        //Check that user is navigated to 'Change Password' page
        cy.get('#content > h1').contains('Change Password').should('be.visible');
        cy.get('.breadcrumb').should('be.visible').contains('Change Password').should('be.visible');
    })

    it.skip('Verify navigating to Change Password page from Site Map page', () => {
        //TC_CP_003

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

        //Click on 'Site Map' footer option
        cy.get('footer').contains('Site Map').click();

        // Click on 'Password' link in the displayed 'Site Map' page
        cy.get('#content').contains('Password').should('be.visible').click();

        //Check that user is navigated to 'Change Password' page
        cy.get('#content > h1').contains('Change Password').should('be.visible');
        cy.get('.breadcrumb').should('be.visible').contains('Change Password').should('be.visible');
    

    

    })
})