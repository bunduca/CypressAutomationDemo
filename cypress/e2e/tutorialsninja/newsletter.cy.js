/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
import { it } from "mocha";
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password } = tutorialNinjaUserDetails

describe('Newsletter', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })


    it('Verify navigating to Newsletter Subscription page from My Account page', () => {
        //TC_NLT_001


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

        //Click on 'Subscribe/unsubscribe to newsletter' link in the displayed 'My Account' page
        cy.get('#content').contains('Subscribe / unsubscribe to newsletter').click();

        //Check that User is taken to 'Newsletter Subscription' page
        cy.get('#content').contains('Newsletter Subscription').should('be.visible');
        cy.get('.breadcrumb').contains('Newsletter').should('be.visible');

    })

    it('Verify navigating to Newsletter Subscription page using Right Column options', () => {
        //TC_NLT_002


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

        //Click on 'Newsletter' Right Column option
        cy.get('#column-right').contains('Newsletter').click();

        //Check that User is taken to 'Newsletter Subscription' page
        cy.get('#content').contains('Newsletter Subscription').should('be.visible');
        cy.get('.breadcrumb').contains('Newsletter').should('be.visible');
    })

    it('Verify navigating to Newsletter page by selecting the option from Right Column options before login', () => {
        //TC_NLT_003


        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Click on 'Newsletter' Right Column option
        cy.get('#column-right').contains('Newsletter').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get(':nth-child(2) > .well > h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        //Check that User is taken to 'Newsletter Subscription' page
        cy.get('#content').contains('Newsletter Subscription').should('be.visible');
        cy.get('.breadcrumb').contains('Newsletter').should('be.visible');
    })

    it('Verify navigating to Newsletter page by selecting the option using Newsletter Footer option before login', () => {
        //TC_NLT_004


        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Click on 'Newsletter' link from the Footer of the page
        cy.get('footer').contains('Newsletter').should('be.visible').click();
        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get(':nth-child(2) > .well > h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        //Check that User is taken to 'Newsletter Subscription' page
        cy.get('#content').contains('Newsletter Subscription').should('be.visible');
        cy.get('.breadcrumb').contains('Newsletter').should('be.visible');
    })

    it('Verify navigating to Newsletter page by selecting the option using Newsletter Footer option after login', () => {
        //TC_NLT_005


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

        //Click on 'Newsletter' link from the Footer of the page
        cy.get('footer').contains('Newsletter').click();

        //Check that User is taken to 'Newsletter Subscription' page
        cy.get('#content').contains('Newsletter Subscription').should('be.visible');
        cy.get('.breadcrumb').contains('Newsletter').should('be.visible');
    })

    it('Verify Back button in the Newsletter Subscription page', () => {
        //TC_NLT_006


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

        //Click on 'Newsletter' Right Column option
        cy.get('#column-right').contains('Newsletter').click();

        //Click on 'Back' button in the displayed 'Newsletter Subscription' page
        cy.go('back');

        //Check that User is taken to 'My Account' page
        cy.get('#content').contains('My Account').should('be.visible');
    })

    it('Verify udpating the Subscribe option in the Newsletter Subscription page', () => {
        //TC_NLT_007


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

        //Click on 'Newsletter' Right Column option
        cy.get('#column-right').contains('Newsletter').click();

        //Select 'Yes' radio option if 'No' is displayed as selected by default or Select 'No' radio option if 'Yes' is displayed as selected by default 
        cy.get('.col-sm-10 > :nth-child(1) > input').click();

        //Click on 'Continue' button
        cy.get('.btn').eq(11).click();

        //Check that Success message with text - 'Success: Your newsletter subscription has been successfully updated!' is displayed and the User is taken to 'My Account' page
        cy.get('.alert').contains('Success: Your newsletter subscription has been successfully updated!').should('be.visible');

        //Check that User is taken to 'My Account' page
        cy.get('#content').contains('My Account').should('be.visible');

        //Click on 'Newsletter' Right Column option
        cy.get('#column-right').contains('Newsletter').click();

        //Check that  User should be taken to 'Newsletter Subscription' page and the Updated option is displayed as selected
        cy.get('#content').contains('Newsletter Subscription').should('be.visible');
        cy.get('.breadcrumb').contains('Newsletter').should('be.visible');
        cy.get('.col-sm-10 > :nth-child(1) > input').should('be.checked');
    })

    it('Register a new Account by opting for Newsletter and check the Newsletter Subscription page', () => {
        //TC_NLT_008


        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Register" option
        cy.get('.dropdown-menu > :nth-child(1) > a').click();

        //Verify redirect to the register account page
        cy.url().should('contain', '/index.php?route=account/register');
        cy.get('#content > h1').contains('Register Account').should('be.visible');

        //Enter the new account details into mandatory fields only (First Name, Last Name, email, phone, password, password confirm)
        cy.get('#input-firstname').type('Dancescu');
        cy.get('#input-lastname').type('Marian');
        cy.get('#input-email').type('testtestautomation+1@gmail.com');
        cy.get('#input-telephone').type(password);
        cy.get('#input-password').type(password);
        cy.get('#input-confirm').type(password);

        //Select the "Privacy Policy" checkbox option
        cy.get('[type="checkbox"]').click();

        //Click on 'Continue' button
        cy.get('.pull-right > .btn').click();

        //Check that User is taken to 'Account Success' page
        cy.get('.breadcrumb').contains('Success').should('be.visible');
        cy.get('#content').contains('Your Account Has Been Created!').should('be.visible');

        //Click on 'Newsletter' Right Column option from the displayed 'Account Success' page
        cy.get('#column-right').contains('Newsletter').click();

        //Check that User is taken to 'Newsletter Subscription' page and 'No' radio option should be displayed as selected by default (i.e. The same option which is selected while registring the account)
        cy.get('.col-sm-10 > :nth-child(2) > input').should('be.checked');
    })

    it('Verify the Breadcrumb of Newsletter Subscription page', () => {
        //TC_NLT_010


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

        //Click on 'Newsletter' Right Column option
        cy.get('#column-right').contains('Newsletter').click();

        //Check the Breadcrumb of the displayed  'Newsletter Subscription' page
        cy.get('.breadcrumb').contains('Newsletter').should('be.visible');
    })

    it('Verify the Page URL, Page Heading and Page Title of Newsletter Subscription page', () => {
        //TC_NLT_011


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

        //Click on 'Newsletter' Right Column option
        cy.get('#column-right').contains('Newsletter').click();

        //Check that Correct Page URL, Page Heading and Page Title should be displayed in the 'Newsletter Subscription' page. 
        cy.url().should('contain', '/index.php?route=account/newsletter');
        cy.title().should('eq', 'Newsletter Subscription');
        cy.get('#content').contains('Newsletter Subscription').should('be.visible');

    })
})