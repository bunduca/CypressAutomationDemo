/// <reference types="cypress" />

const { baseUrl } = Cypress.config();
const uniqueEmailTag = () => Math.floor(Math.random() * 10000000);
const uniquePasswordTag = () => Math.floor(Math.random() * 100);
const uniquePhone = () => Math.floor(Math.random() * 1000000000);

import nopCommerceUserDetails from "../../fixtures/nopCommerceUserDetails.json"
const { email, password, emailPrefix, emailDomain } = nopCommerceUserDetails



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

  it.skip('Verify Registering an Account by filling all the fields ', () => {


    //Click on "Register" button
    cy.get('.ico-register').click();

    //Verify redirect to the register account page
    cy.url().should('contain', '/register');
    cy.get('h1').contains('Register').should('be.visible');

    //generate a unique email 
    uniqueEmail = emailPrefix + uniqueEmailTag() + emailDomain

    //generate a unique password
    uniquePassword = password + uniquePasswordTag()

    //generate a unique phone number
    uniquePhoneNumber = uniquePhone()

    //Enter New Account Details  (Gender, First Name, Last Name, DOB, Company name, Password, Conform Password)
    cy.get('#gender-female').click();
    cy.get('#FirstName').type('Maria');
    cy.get('#LastName').type('Popescu');
    cy.get('[name="DateOfBirthDay"]').should('contain','26').select('26');
    cy.get('[name="DateOfBirthMonth"]').should('contain','November').select('November');
    cy.get('[name="DateOfBirthYear"]').should('contain','1991').select('1991');
    cy.get('#Email').type(uniqueEmail);
    cy.get('#Company').type('BunducTesteazaINC');
    cy.get('#Password').type(uniquePassword);
    cy.get('#ConfirmPassword').type(uniquePassword);

    // Click on 'Register' button 
    cy.get('#register-button').click();

    //Check that user is redirected to the Register result page 
    cy.url().should('contain', '/registerresult');
    cy.get('.result').contains('Your registration completed').should('be.visible');
  })

  it.skip('Verify Registering an Account when the Newsletter field is not checked', () => {


    //Click on "Register" button
    cy.get('.ico-register').click();

    //Verify redirect to the register account page
    cy.url().should('contain', '/register');
    cy.get('h1').contains('Register').should('be.visible');

    //generate a unique email 
    uniqueEmail = emailPrefix + uniqueEmailTag() + emailDomain

    //generate a unique password
    uniquePassword = password + uniquePasswordTag()

    //generate a unique phone number
    uniquePhoneNumber = uniquePhone()

    //Enter New Account Details  (Gender, First Name, Last Name, DOB, Company name, Password, Conform Password)
    cy.get('#gender-female').click();
    cy.get('#FirstName').type('Maria');
    cy.get('#LastName').type('Popescu');
    cy.get('[name="DateOfBirthDay"]').should('contain','26').select('26');
    cy.get('[name="DateOfBirthMonth"]').should('contain','November').select('November');
    cy.get('[name="DateOfBirthYear"]').should('contain','1991').select('1991');
    cy.get('#Email').type(uniqueEmail);
    cy.get('#Company').type('BunducTesteazaINC');
    cy.get('#Password').type(uniquePassword);
    cy.get('#ConfirmPassword').type(uniquePassword);

    //Uncheck the Newsletter checkbox
    cy.get('#Newsletter').click();

    // Click on 'Register' button 
    cy.get('#register-button').click();

    //Check that user is redirected to the Register result page 
    cy.url().should('contain', '/registerresult');
    cy.get('.result').contains('Your registration completed').should('be.visible');
})

it.skip('Verify Registering an Account by entering different passwords into Password and Password Confirm fields', () => {


  //Click on "Register" button
  cy.get('.ico-register').click();

  //Verify redirect to the register account page
  cy.url().should('contain', '/register');
  cy.get('h1').contains('Register').should('be.visible');

  //generate a unique email 
  uniqueEmail = emailPrefix + uniqueEmailTag() + emailDomain

  //generate a unique password
  uniquePassword = password + uniquePasswordTag()

  //generate a unique phone number
  uniquePhoneNumber = uniquePhone()

  //Enter New Account Details  (Gender, First Name, Last Name, DOB, Company name, Password, Conform Password)
  cy.get('#gender-female').click();
  cy.get('#FirstName').type('Maria');
  cy.get('#LastName').type('Popescu');
  cy.get('[name="DateOfBirthDay"]').should('contain','26').select('26');
  cy.get('[name="DateOfBirthMonth"]').should('contain','November').select('November');
  cy.get('[name="DateOfBirthYear"]').should('contain','1991').select('1991');
  cy.get('#Email').type(uniqueEmail);
  cy.get('#Company').type('BunducTesteazaINC');
  cy.get('#Password').type(uniquePassword);
  cy.get('#ConfirmPassword').type(123456);

  // Click on 'Register' button 
  cy.get('#register-button').click();

  //Check that ''The password and confirmation password do not match.'' error message is displayed
  cy.get('#ConfirmPassword-error').contains('The password and confirmation password do not match.').should('be.visible')
})

it.skip('Verify Registering an Account by providing the existing account details (i.e. existing email address)', () => {


  //Click on "Register" button
  cy.get('.ico-register').click();

  //Verify redirect to the register account page
  cy.url().should('contain', '/register');
  cy.get('h1').contains('Register').should('be.visible');

  cy.get('#gender-female').click();
  cy.get('#FirstName').type('Maria');
  cy.get('#LastName').type('Popescu');
  cy.get('[name="DateOfBirthDay"]').should('contain','26').select('26');
  cy.get('[name="DateOfBirthMonth"]').should('contain','November').select('November');
  cy.get('[name="DateOfBirthYear"]').should('contain','1991').select('1991');
  cy.get('#Email').type(email);
  cy.get('#Company').type('BunducTesteaza Inc');
  cy.get('#Password').type(password);
  cy.get('#ConfirmPassword').type(password);

   // Click on 'Register' button 
   cy.get('#register-button').click();

   //Check that the error message''The specified email already exists'' is displayed
   cy.get('.message-error').contains('The specified email already exists').should('be.visible');
  
})

it.skip('Verify Registering an Account by providing an invalid email address into the E-Mail field)', () => {

 //Click on "Register" button
 cy.get('.ico-register').click();

 //Verify redirect to the register account page
 cy.url().should('contain', '/register');
 cy.get('h1').contains('Register').should('be.visible');

 cy.get('#gender-female').click();
 cy.get('#FirstName').type('Maria');
 cy.get('#LastName').type('Popescu');
 cy.get('[name="DateOfBirthDay"]').should('contain','26').select('26');
 cy.get('[name="DateOfBirthMonth"]').should('contain','November').select('November');
 cy.get('[name="DateOfBirthYear"]').should('contain','1991').select('1991');
 cy.get('#Email').type('bunductesteaza');
 cy.get('#Company').type('BunducTesteaza Inc');
 cy.get('#Password').type(password);
 cy.get('#ConfirmPassword').type(password);

  // Click on 'Register' button 
  cy.get('#register-button').click();

  //Check that 'Wrong email" error message is displayed
  cy.get('#Email-error').contains('Wrong email').should('be.visible');

})


it('Verify Registering an Account by providing only the mandatory fields)', () => {
   
  
  //Click on "Register" button
   cy.get('.ico-register').click();

   //Verify redirect to the register account page
   cy.url().should('contain', '/register');
   cy.get('h1').contains('Register').should('be.visible');

   //generate a unique email 
   uniqueEmail = emailPrefix + uniqueEmailTag() + emailDomain

   //generate a unique password
   uniquePassword = password + uniquePasswordTag()

   //generate a unique phone number
   uniquePhoneNumber = uniquePhone()

   //Enter New Account Details  (Gender, First Name, Last Name, DOB, Company name, Password, Conform Password)
   cy.get('#gender-female').click();
   cy.get('#FirstName').type('Maria');
   cy.get('#LastName').type('Popescu');
   cy.get('#Email').type(uniqueEmail);
   cy.get('#Password').type(uniquePassword);
   cy.get('#ConfirmPassword').type(uniquePassword);

   // Click on 'Register' button 
   cy.get('#register-button').click();

   //Check that user is redirected to the Register result page 
   cy.url().should('contain', '/registerresult');
   cy.get('.result').contains('Your registration completed').should('be.visible');



})
})