/// <reference types="cypress" />

const { baseUrl } = Cypress.config();


import nopCommerceUserDetails from "../../fixtures/nopCommerceUserDetails.json"
const { email, password, emailPrefix, emailDomain } = nopCommerceUserDetails



describe('Log In', () => {


  beforeEach(() => {
    //Clear cookies and session storage (so that we are no longer logged in from previous test)
    //Hook that is executed before the start of each test case
    cy.clearAllCookies();
    sessionStorage.clear();

    //visit the Homepage
    cy.visit(baseUrl);
  })

  it('Verify logging into application using valid credentials ', () => {

    //dedicated custom command that checks existing account-if user doesn't exist, register accoun and login; else just log in
   cy.registerAndLogin(email,password);

  })


  it('Verify logging into application using invalid credentials ', () => {

    //Click on "Log in" button
    cy.get('.ico-login').click();

    //Enter invalid email address into the "email address" field
    cy.get('#Email').type('bunduc@gmail.com');

    //Enter invalid password into the "password" field
    cy.get('#Password').type('987654321');

    //Click the Log in button
    cy.get('button').contains('Log in').click();

    //Check that error messsage is displayed
    cy.get('.message-error').contains('Login was unsuccessful').should('be.visible');
  })

  it('Verify logging into application using an invalid email address and a valid password  ', () => {

    //Click on "Log in" button
    cy.get('.ico-login').click();

    //Enter invalid email address into the "email address" field
    cy.get('#Email').type('bunduc@gmail.com');

    //Enter valid password into the "password" field
    cy.get('#Password').type(password);

    //Click the Log in button
    cy.get('button').contains('Log in').click();

    //Check that error message is displayed
    cy.get('.message-error').contains('Login was unsuccessful. Please correct the errors and try again.').should('be.visible');
  })

  it('Verify logging into application using a valid username and an invalid password ', () => {

    //Click on "Log in" button
    cy.get('.ico-login').click();

    //Enter valid email address into the "email address" field
    cy.get('#Email').type(email);

    //Enter invalid password into the "password" field
    cy.get('#Password').type('987654321');

    //Click the Log in button
    cy.get('button').contains('Log in').click();

    //Check that error message is displayed
    cy.get('.message-error').contains('Login was unsuccessful. Please correct the errors and try again.').should('be.visible');
  })

  it('Verify logging into application without providing any credentials ', () => {

    //Click on "Log in" button
    cy.get('.ico-login').click();

    //Click the Log in button
    cy.get('button').contains('Log in').click();

    //Check that error message is diplayed
    cy.get('#Email-error').contains('Please enter your email').should('be.visible');
  })

  it('Verify "Forgotten Password" link is available on the Login Functionality and is working', () => {

    //Click on "Log in" button
    cy.get('.ico-login').click();

    //Click the "Forgot password?" button
    cy.get('.forgot-password > a').click();

    //Check that user is redirected to the password recovery page
    cy.get('h1').contains('Password recovery').should('be.visible');
    cy.get('.tooltip').contains('Please enter your email address below. You will receive a link to reset your password.').should('be.visible');
    cy.get('.buttons').contains('Recover').should('be.visible');
  })

  it('Verify Logging into the application and browsing back using browser back button', () => {

    //Click on "Log in" button
    cy.get('.ico-login').click();

    //Enter valid email address into the "email address" field
    cy.get('#Email').type(email);

    //Enter valid password into the "password" field
    cy.get('#Password').type(password);

    //Click the Log in button
    cy.get('button').contains('Log in').click();

    //Check that user is logged in
    cy.get('.ico-account').contains('My account').should('be.visible');
    cy.get('.ico-logout').contains('Log out').should('be.visible');

    //Use back function of the browser
    cy.go('back');

    //Check that user is not logged out
    cy.get('.bar-notification').contains('You are already logged in as').should('be.visible');
  })

  it('Verify Logging out from the application and browsing back using the browser back button', () => {

    //Click on "Log in" button
    cy.get('.ico-login').click();

    //Enter valid email address into the "email address" field
    cy.get('#Email').type(email);

    //Enter valid password into the "password" field
    cy.get('#Password').type(password);

    //Click the Log in button
    cy.get('button').contains('Log in').click();

    //Check that user is logged in
    cy.get('.ico-account').contains('My account').should('be.visible');
    cy.get('.ico-logout').contains('Log out').should('be.visible');

    //Click the Log out button
    cy.get('.ico-logout').click();

    //Use back function of the browser
    cy.go('back');

    //Check that user is not logged in
    cy.get('.ico-login').contains('Log in').should('be.visible');
    cy.get('.ico-register').contains('Register').should('be.visible');
  })

})