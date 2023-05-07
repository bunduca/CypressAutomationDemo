/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password } = tutorialNinjaUserDetails

describe('Downloads', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })

    it('Verify navigating to Account Downloads page from My Account page', () => {
        //TC_DL_001

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

        //Verify successfull login and redirect to My Account page
        cy.get('#content > :nth-child(1)').contains('My Account').should('be.visible');

        // Click on 'Downloads' link in the displayed 'My Account' page
        cy.get('#column-right').contains('Downloads').click();

        //Check that User is taken to the 'Account Downloads' page
        cy.get('h2').contains('Account Downloads').should('be.visible');
        cy.get('.breadcrumb').contains('Downloads').should('be.visible');
    })

    it('Verify navigating to Account Downloads page from My Account dropmenu', () => {
        //TC_DL_002

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

        //Select 'Downloads' option
        cy.get('.dropdown-menu').eq(1).contains('Downloads').click();

        //Check that User is taken to the 'Account Downloads' page
        cy.get('h2').contains('Account Downloads').should('be.visible');
        cy.get('.breadcrumb').contains('Downloads').should('be.visible');
    })

    it('Verify navigating to Account Downloads page using Downloads Right Column option', () => {
        //TC_DL_003

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


        //Click on 'Downloads' Right column option
        cy.get('#column-right').contains('Downloads').click();

        //Check that User is taken to the 'Account Downloads' page
        cy.get('h2').contains('Account Downloads').should('be.visible');
        cy.get('.breadcrumb').contains('Downloads').should('be.visible');
    })

    it('Verify navigating to Account Downloads page from Site Map page', () => {
        //TC_DL_004

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

        //Click on 'Site Map' footer option
        cy.get('footer').contains('Site Map').click();

        // Click on 'Downloads' option in the displayed 'Site Map' page
        cy.get('#content').contains('Downloads').click();

        //Check that User is taken to the 'Account Downloads' page
        cy.get('h2').contains('Account Downloads').should('be.visible');
        cy.get('.breadcrumb').contains('Downloads').should('be.visible');
    })

    it('Verify navigating to Account Downloads page from Right Column options before logging into the Application', () => {
        //TC_DL_005

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Register" option
        cy.get('.dropdown-menu > :nth-child(1) > a').click();

        //Verify redirect to the register account page
        cy.url().should('contain', '/index.php?route=account/register');
        cy.get('#content > h1').contains('Register Account').should('be.visible');

        //Click on 'Downloads' Right Column option in the displayed 'Registered Account' page
        cy.get('#column-right').contains('Downloads').click();

        //Enter the credentials and click on 'Login' button
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        //Check that User is taken to the 'Account Downloads' page
        cy.get('h2').contains('Account Downloads').should('be.visible');
        cy.get('.breadcrumb').contains('Downloads').should('be.visible');
    })
})