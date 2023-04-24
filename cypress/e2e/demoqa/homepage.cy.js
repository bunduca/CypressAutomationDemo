/// <reference types="cypress" />
const {baseUrl} = Cypress.config();

describe('Homepage', () => {

  it('Should display Homepage logo', () => {

    //visit the Homepage
    cy.visit(baseUrl);

    //The Homepage logo should be displayed
    cy.get('header > a > img').should('be.visible')
  
  })

})
