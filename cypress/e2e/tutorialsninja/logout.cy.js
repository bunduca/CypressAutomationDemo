/// <reference types="cypress" />


const { baseUrl } = Cypress.config();

describe('Login', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();
    })

    it.skip('Verify Logging out by selecting Logout option from My Account dropmenu', () => {
        //TC_LG_001

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

        //Click My account dropmenu and select Logout option
        cy.get('.caret').click();
        cy.get('.dropdown-menu > :nth-child(5) > a').click();

        //Verify successfull logout and redirect to Account Logout page
        cy.get('#content').contains('Account Logout').should('be.visible');

        //Click the continue button and check that user is redirected to Homepage
        cy.get('.pull-right > .btn').click();
        cy.url().should('contain', '/index.php?route=common/home');
    })


    it.skip('Verify Logging out by selecting Logout option from Right Column options', () => {
        //TC_LG_002

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

        //Click Logout button from Right Column options
        cy.get('.list-group').contains('Logout').click();

        //Verify successfull logout and redirect to Account Logout page
        cy.get('#content').contains('Account Logout').should('be.visible');

        //Click the continue button and check that user is redirected to Homepage
        cy.get('.pull-right > .btn').click();
        cy.url().should('contain', '/index.php?route=common/home');

    })


    it.skip('Verify logging out and browsing back', () => {
        //TC_LG_004

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

        //Click My account dropmenu and select Logout option
        cy.get('.caret').click();
        cy.get('.dropdown-menu > :nth-child(5) > a').click();

        //Verify successfull logout and redirect to Account Logout page
        cy.get('#content').contains('Account Logout').should('be.visible');

        //Go back to the Logout page using browser back function
        cy.go('back');
        cy.reload();

        //Check that user is not logged in
        cy.get(':nth-child(2) > .well').contains('Returning Customer').should('be.visible');
    })


    it.skip('Verify Logout option is not displayed under My Account menu before logging in', () => {
        // TC_LG_005

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Check that Logout option is not displayed 
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('Logout').should('not.exist');
    })

    it.skip('Verify Logout option is not displayed under Right Column options before logging in', () => {
        // TC_LG_006

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click the Register button
        cy.get('.dropdown-menu > :nth-child(1) > a').click();

        //Check that Logout option is not displayed under Right Column options before logging in
        cy.get('#column-right').contains('Logout').should('not.exist');
    })

    it.skip('Verify logging out and loggin in immediately after logout ', () => {
        //TC_LG_008


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

        //Click My account dropmenu and select Logout option
        cy.get('.caret').click();
        cy.get('.dropdown-menu > :nth-child(5) > a').click();

        //Verify successfull logout and redirect to Account Logout page
        cy.get('#content').contains('Account Logout').should('be.visible');

        //Click the continue button and check that user is redirected to Homepage
        cy.get('.pull-right > .btn').click();
        cy.url().should('contain', '/index.php?route=common/home');

        //Log back in imediatly after loging out
        cy.get('.caret').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();
        cy.get('#content > :nth-child(1)').contains('My Account').should('be.visible');
    })

    it.skip('Verify the Breadcrumb, Page heading, Page Title and Page URL of Account Logout page', () => {
        //TC_LG_009

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

        //Click My account dropmenu and select Logout option
        cy.get('.caret').click();
        cy.get('.dropdown-menu > :nth-child(5) > a').click();

        //Check that proper breadcrumb is displayed
        cy.get('.breadcrumb').within(() => {
            cy.contains('Account').should('be.visible');
            cy.contains('Logout').should('be.visible');
        })
        //Check that proper Page Heading is displayed
        cy.get('h1').eq(1).contains('Account Logout').should('be.visible');

        //Check that proper Page Title is displayed
        cy.title().should('eq', 'Account Logout');

        //Check that proper URL is displayed
        cy.url().should('contain', '/index.php?route=account/logout');

})

it('Verify the UI of the Logout option and the Account Logout page', () => {
    //TC_LG_010

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

    //Click My account dropmenu and select Logout option
    cy.get('.caret').click();
    cy.get('.dropdown-menu > :nth-child(5) > a').click();

    //Verify the Ui of the Logout page
    cy.get('#content > h1').contains('Account Logout').should('be.visible');
    cy.get('#column-right').contains('Logout').should('not.exist');
    cy.title().should('eq', 'Account Logout');
    cy.get('.breadcrumb').contains('Logout').should('be.visible');
    cy.get('.pull-right > .btn').click();
    cy.url().should('contain', '/index.php?route=common/home');


})

})