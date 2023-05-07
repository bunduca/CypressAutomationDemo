/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password } = tutorialNinjaUserDetails

describe('Currency', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })

    it('Verify the complete functionality of the Application by selecting Euro currency', () => {
        //TC_CR_001

        //Click on 'Currency' header option and select 'Euro' option
        cy.get('.dropdown-toggle').eq(0).click();
        cy.get('#form-currency').contains('Euro').click();

        //Check that prices are displayed in Euro currency
        cy.get('.product-thumb').eq(0).contains('€');
        cy.get('.product-thumb').eq(1).contains('€');
        cy.get('.product-thumb').eq(2).contains('€');
        cy.get('.product-thumb').eq(3).contains('€');
    })

    it('Verify the complete functionality of the Application by selecting Pound Sterling currency', () => {
        //TC_CR_002

        //Click on 'Currency' header option and select 'Pound Sterling' option
        cy.get('.dropdown-toggle').eq(0).click();
        cy.get('#form-currency').contains('Pound Sterling').click();

        //Check that prices are displayed in Euro currency
        cy.get('.product-thumb').eq(0).contains('£');
        cy.get('.product-thumb').eq(1).contains('£');
        cy.get('.product-thumb').eq(2).contains('£');
        cy.get('.product-thumb').eq(3).contains('£');
    })

    it('Verify the complete functionality of the Application by selecting US Dollar currency', () => {
        //TC_CR_003

        //Click on 'Currency' header option and select 'US Dollar' option
        cy.get('.dropdown-toggle').eq(0).click();
        cy.get('#form-currency').contains('US Dollar').click();

        //Check that prices are displayed in Euro currency
        cy.get('.product-thumb').eq(0).contains('$');
        cy.get('.product-thumb').eq(1).contains('$');
        cy.get('.product-thumb').eq(2).contains('$');
        cy.get('.product-thumb').eq(3).contains('$');

    })
})