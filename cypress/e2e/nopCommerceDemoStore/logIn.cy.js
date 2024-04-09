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


})
})