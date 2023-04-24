/// <reference types="cypress" />


const { baseUrl } = Cypress.config();

describe('Login', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();
    })

    it('Verify logging into application using valid credentials', () => {

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get(':nth-child(2) > .well > h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Verify successfull login and redirect to My Account page
        cy.get('#content > :nth-child(1)').contains('My Account').should('be.visible');

    })

    it('Verify logging into application using invalid credentials', () => {

        //visit the Login Page
        cy.visit('/index.php?route=account/account');

        //Enter invalid credentials into the email address and password fields and click Login button
        cy.get('#input-email').type('bunducnutesteaza@gmail.com');
        cy.get('#input-password').type('123456');
        cy.get('form > .btn').click();

        //Check that a warning message is displayed
        cy.get('.alert').contains('Warning: No match for E-Mail Address and/or Password.').should('be.visible');
    })


    it('Verify logging into application using a invalid username and a valid password ', () => {

        //visit the Login Page
        cy.visit('/index.php?route=account/account');

        //Enter an invalid email address into the email address field
        cy.get('#input-email').type('bunducnutesteaza@gmail.com');

        //Enter a valid password into the password field and click Login button
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Check that a warning message is displayed
        cy.get('.alert').contains('Warning: No match for E-Mail Address and/or Password.').should('be.visible');
    })

    it('Verify logging into application using a valid username and an invalid password ', () => {

        //visit the Login Page
        cy.visit('/index.php?route=account/account');

        //Enter a valid email address into the email address field
        cy.get('#input-email').type('bunductesteaza@gmail.com');

        //Enter an invalid password into the password field and click Login button
        cy.get('#input-password').type('12345678');
        cy.get('form > .btn').click();

        //Check that a warning message is displayed
        cy.get('.alert').contains('Warning: No match for E-Mail Address and/or Password.').should('be.visible');
    })

    it('Verify logging into application without providing any credentials ', () => {

        //visit the Login Page
        cy.visit('/index.php?route=account/account');

        //Dont enter any data into the email and password field and click Login button
        cy.get('form > .btn').click();

        //Check that a warning message is displayed
        cy.get('.alert').contains('Warning: No match for E-Mail Address and/or Password.').should('be.visible');

    })

    it('Verify "Forgotten Password" link is available on the Login Functionality and is working ', () => {

        //visit the Login Page
        cy.visit('/index.php?route=account/account');

        //Check that the Forgotten Password is visible and click it without entering any data
        cy.get('form > :nth-child(2) > a').should('be.visible');
        cy.get('form > :nth-child(2) > a').click();

        //Check the redirect to the Forgot your password page
        cy.url().should('contain', '/index.php?route=account/forgotten');
        cy.get('#content > h1').contains('Forgot Your Password?').should('be.visible');
    })

    it('Verify Email address and Password text fields in the loging page have the placeholder text ', () => {

        //visit the Login Page
        cy.visit('/index.php?route=account/account');

        //Check that Email address and Password text fields in the loging page have the placeholder text
        cy.get('input[name=email]').should('have.attr', 'placeholder', 'E-Mail Address');
        cy.get('input[name=password]').should('have.attr', 'placeholder', 'Password');

    })

    it('Verify Logging into the application and browsing back using browser back button ', () => {

        //visit the Login Page
        cy.visit('/index.php?route=account/account');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Go back to the Login page using browser back function
        cy.go('back');

        //Verify that the user is still logged in
        cy.get('#content > :nth-child(1)').contains('My Account').should('be.visible');
        cy.get('#column-right').contains('Logout').should('be.visible');
    })

    it('Verify Logging into the application and browsing back using browser back button ', () => {

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click the "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Click the Logout button 
        cy.get('#column-right').contains('Logout').should('be.visible').click();

        //Verify that the user is logged out
        cy.get('#content > h1').contains('Account Logout').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/logout');

        //Go back to the Login page using browser back function 
        cy.go('back');

        //Verify that the user is not logged in again, instead redirected to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get(':nth-child(2) > .well > h2').contains('Returning Customer').should('be.visible');

    })

    it('Verify the number of unsuccesful login attemps ', () => {

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get(':nth-child(2) > .well > h2').contains('Returning Customer').should('be.visible');

        //Type in invalid details into email and password fields and click Login button 5 times
        cy.get('#input-email').type('bunducnutesteaza@gmail.com');
        cy.get('#input-password').type('123456');
        cy.get('form > .btn').click();
        cy.get('form > .btn').click();
        cy.get('form > .btn').click();
        cy.get('form > .btn').click();
        cy.get('form > .btn').click();

        //Verify warning message for exceeded allowed number of login attempts
        cy.get('.alert').contains('Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.').should('be.visible');

    })

    it('Verify if the text entered into the password field is toggled to hide its visibility', () => {

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Type in a password into the password field and check that  is toggled to hide its visibility
        cy.get('#input-password').type('abcdef');
        cy.get('form').eq(1).contains('abcdef').should('not.exist');

    })


    it('Verify the different ways to navigate to the Login Page', () => {


        //visit the Homepage
        cy.visit(baseUrl);

        //Click the "My Account" dropmenu
        cy.get('.caret').click();

        //Click the "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Check that user is redirected to the LOgin Page
        cy.get('h2').eq(1).contains('Returning Customer').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/login');


        //Click the Login option from the Right Column option
        cy.get('.list-group').contains('Login').click();

        //Check that user is redirected to the LOgin Page
        cy.get('h2').eq(1).contains('Returning Customer').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/login');

        //Click the "My Account" dropmenu, select Register and then Click the Login option from the Right Column option
        cy.get('.caret').click();
        cy.get('.dropdown-menu > :nth-child(1) > a').click();
        cy.get('.list-group').contains('Login').click();

        //Check that user is redirected to the LOgin Page
        cy.get('h2').eq(1).contains('Returning Customer').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/login');

    })

        it('Verify the Breadcrumb, Page heading, Page Title and Page URL of Login Page', () => {

          //visit the Homepage
        cy.visit(baseUrl);

        //Click the "My Account" dropmenu
        cy.get('.caret').click();

        //Click the "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();   

        //Check that proper breadcrumb is displayed
        cy.get('.breadcrumb').within(() => {
            cy.contains('Account').should('be.visible');
            cy.contains('Login').should('be.visible');
        })

        //Check that proper Page Headings are displayed
        cy.get('h2').eq(0).should('be.visible');
        cy.get('h2').eq(1).should('be.visible');
        
        //Check that proper Page Title is displayed
        cy.title().should('eq','Account Login');

        //Check that proper URL is displayed
        cy.url().should('contain', '/index.php?route=account/login');








    })
})


