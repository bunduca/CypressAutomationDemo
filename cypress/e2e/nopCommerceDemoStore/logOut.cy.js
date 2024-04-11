/// <reference types="cypress" />

const { baseUrl } = Cypress.config();


import nopCommerceUserDetails from "../../fixtures/nopCommerceUserDetails.json"
const { email, password, emailPrefix, emailDomain } = nopCommerceUserDetails



describe('Log Out', () => {


  beforeEach(() => {
    //Clear cookies and session storage (so that we are no longer logged in from previous test)
    //Hook that is executed before the start of each test case
    cy.viewport(1920, 1080);
    cy.clearAllCookies();
    sessionStorage.clear();

    //visit the Homepage
    cy.visit(baseUrl);
  })

  it('Verify Logging out by selecting Logout option ', () => {

   //Log in 
    cy.login(email, password)

    //Check that user is logged in and click the Log Out button
    cy.get('.ico-account').contains('My account').should('be.visible');
    cy.contains('Log out').should('be.visible').click();
    cy.contains('Log out').should('be.visible').click();//it doesnt work with only one click or with the dblclick command

    //Verify that the user is logged out
    cy.contains('Log in').should('be.visible');
  })

  it('Verify logging out and browsing back', () => {
    
    //Log in 
    cy.login(email, password)

    //Check that user is logged in and click the Log Out button
    cy.get('.ico-account').contains('My account').should('be.visible');
    cy.contains('Log out').should('be.visible').click();
    cy.contains('Log out').should('be.visible').click();//it doesnt work with only one click or with the dblclick command

    //Verify that the user is logged out
    cy.contains('Log in').should('be.visible');

    //Click on Browser back button
    cy.go('back');

    //Check that user is not logged in
    cy.contains('Log in').should('be.visible');
})
  })