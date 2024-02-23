/// <reference types="cypress" />

const { baseUrl } = Cypress.config();
const uniqueEmailTag = () => Math.floor(Math.random() * 10000000);
const uniquePasswordTag = () => Math.floor(Math.random() * 100);
const uniquePhone = () => Math.floor(Math.random() * 1000000000);

const picture = 'samy.jpg'
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password, emailPrefix, emailDomain } = tutorialNinjaUserDetails

describe('Register Functionality', () => {

  let uniqueEmail;
  let uniquePassword;
  let uniquePhoneNumber;

  beforeEach(() => {
    //Clear cookies and session storage (so that we are no longer logged in from previous test)
    //Hook that is executed before the start of each test case
    cy.clearAllCookies();
    sessionStorage.clear();

    //visit the Homepage
    cy.visit(baseUrl);
  })

  it('Verify Registering an Account by providing only the Mandatory fields', () => {

    //Click on "My Account" dropmenu
    cy.get('.caret').click();

    //Click on "Register" option
    cy.get('.dropdown-menu > :nth-child(1) > a').click();

    //Verify redirect to the register account page
    cy.url().should('contain', '/index.php?route=account/register');
    cy.get('#content > h1').contains('Register Account').should('be.visible');
    
    //generate a unique email 
    uniqueEmail = emailPrefix + uniqueEmailTag() + emailDomain
    
    //generate a unique password
    uniquePassword = password + uniquePasswordTag()

    //generate a unique phone number
    uniquePhoneNumber = uniquePhone()

    //Enter the new account details into mandatory fields only (First Name, Last Name, email, phone, password, password confirm)
    cy.get('#input-firstname').type('Popescu');
    cy.get('#input-lastname').type('Maria');
    cy.get('#input-email').type(uniqueEmail);
    cy.get('#input-telephone').type(uniquePhoneNumber);
    cy.get('#input-password').type(uniquePassword);
    cy.get('#input-confirm').type(uniquePassword);

    //Select the "Privacy Policy" checkbox option
    cy.get('[type="checkbox"]').click();

    //Click on 'Continue' button
    cy.get('.pull-right > .btn').click();
  })

})
