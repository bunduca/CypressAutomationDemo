// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('login', (email, password) => { 

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

 Cypress.Commands.add('registerAndLogin', (email, password) => { 

   //Click on "Log in" button
   cy.get('.ico-login').click();

   //Enter valid email address into the "email address" field
   cy.get('#Email').type(email);

   //Enter valid password into the "password" field
   cy.get('#Password').type(password);

   //Click the Log in button
   cy.get('button').contains('Log in').click();

   //if account is not found, register account
   cy.get('body').then(($ele) => {
     if ($ele.find('.message-error').length > 0) {

       //Click on "Register" button
       cy.get('.ico-register').click();

       //Verify redirect to the register account page
       cy.url().should('contain', '/register');
       cy.get('h1').contains('Register').should('be.visible');

       //Enter New Account Details  (Gender, First Name, Last Name, DOB, Company name, Password, Conform Password)
       cy.get('#gender-female').click();
       cy.get('#FirstName').type('Maria');
       cy.get('#LastName').type('Popescu');
       cy.get('[name="DateOfBirthDay"]').should('contain', '26').select('26');
       cy.get('[name="DateOfBirthMonth"]').should('contain', 'November').select('November');
       cy.get('[name="DateOfBirthYear"]').should('contain', '1991').select('1991');
       cy.get('#Email').type(email);
       cy.get('#Company').type('BunducTesteazaINC');
       cy.get('#Password').type(password);
       cy.get('#ConfirmPassword').type(password);

       // Click on 'Register' button 
       cy.get('#register-button').click();

       //Check that user is redirected to the Register result page 
       cy.url().should('contain', '/registerresult');
       cy.get('.result').contains('Your registration completed').should('be.visible');

       //Log In with the newly created account
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
       
     } else {
       //Check that user is logged in
       cy.get('.ico-account').contains('My account').should('be.visible');
       cy.get('.ico-logout').contains('Log out').should('be.visible');

     }
   })
   
    })