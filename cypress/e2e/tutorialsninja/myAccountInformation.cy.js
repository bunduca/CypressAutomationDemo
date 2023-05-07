/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password } = tutorialNinjaUserDetails

describe('My Account Information', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })

    it('Verify navigating to My Account Information page from My Account page', () => {
        //TC_MAI_001


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

        //Click on 'Edit your account information' link on the displayed 'My Account' page
        cy.get('#content').contains('Edit your account information').click();

        //Check that User is navigated to 'My Account Information' page
        cy.get('#content > h1').contains('My Account Information').should('be.visible');
        cy.get('.breadcrumb').contains('Edit Information').should('be.visible');
    })

    it('Verify navigating to My Account Information page using Edit Account Right column option', () => {
        //TC_MAI_002


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

        //Click on 'Edit Account' Right Column option
        cy.get('#column-right').contains('Edit Account').click();

        //Check that User is navigated to 'My Account Information' page
        cy.get('#content > h1').contains('My Account Information').should('be.visible');
        cy.get('.breadcrumb').contains('Edit Information').should('be.visible');
    })

    it('Verify navigating to My Account Information page from Site Map page', () => {
        //TC_MAI_003


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

        //Click on 'Site Map' footer option
        cy.get('footer > .container').contains('Site Map').should('be.visible').click();

        //Click on 'Account Information' link in the displayed 'Site Map' pag
        cy.get('#content').contains('Account Information').should('be.visible').click();

        //Check that User is navigated to 'My Account Information' page
        cy.get('#content > h1').contains('My Account Information').should('be.visible');
        cy.get('.breadcrumb').contains('Edit Information').should('be.visible');
    })

    it('Verify updating the Account Details in the My Account Information page', () => {
        //TC_MAI_004


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

        //Click on 'Edit your account information' link on the displayed 'My Account' page
        cy.get('#content').contains('Edit your account information').click();

        //Update all the details in the fields - First  Name, Last Name, E-Mail and Telephone
        cy.get('#input-firstname').clear().type('Ionescu');
        cy.get('#input-lastname').clear().type('Ioana');
        cy.get('#input-email').clear().type(email);
        cy.get('#input-telephone').clear().type('012345678900');

        //Click on 'Continue' buttton 
        cy.get('.pull-right > .btn').click();

        //Check that Success message with text - ' Success: Your account has been successfully updated.' is displayed
        cy.get('.alert').contains(' Success: Your account has been successfully updated.').should('be.visible');


        //Click on 'Edit Account' Right Column option
        cy.get('#column-right').contains('Edit Account').click();

        //Check that all the account details are updated
        cy.get('#input-firstname').contains('Ionescu').should('be.visible');
        cy.get('#input-lastname').contains('Ioana').should('be.visible');
        cy.get('#input-email').contains(email).should('be.visible');
        cy.get('#input-telephone').contains('012345678900').should('be.visible');
    })

    it('Verify making all the fields in the My Account Information page empty and update ', () => {
        //TC_MAI_005


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

        //Click on 'Edit your account information' link on the displayed 'My Account' page
        cy.get('#content').contains('Edit your account information').click();

        //Clear all  the fields - First  Name, Last Name, E-Mail and Telephone in the displayed 'My Account Information' page
        cy.get('#input-firstname').clear();
        cy.get('#input-lastname').clear();
        cy.get('#input-email').clear();
        cy.get('#input-telephone').clear();

        //Click on 'Continue' buttton 
        cy.get('.pull-right > .btn').click();

        //Check that field level validation message information the User to enter the required details is displayed for all the fields 
        cy.get('.text-danger').eq(0).contains('First Name must be between 1 and 32 characters!').should('be.visible');
        cy.get('.text-danger').eq(1).contains('Last Name must be between 1 and 32 characters!').should('be.visible');
        cy.get('.text-danger').eq(2).contains('E-Mail Address does not appear to be valid!').should('be.visible');
        cy.get('.text-danger').eq(3).contains('Telephone must be between 3 and 32 characters!').should('be.visible');
    })

    it('Verify all the fields in the My Account Information page have placeholders', () => {
        //TC_MAI_006


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

        //Click on 'Edit your account information' link on the displayed 'My Account' page
        cy.get('#content').contains('Edit your account information').click();

        //Clear all  the fields - First  Name, Last Name, E-Mail and Telephone in the displayed 'My Account Information' page
        cy.get('#input-firstname').clear();
        cy.get('#input-lastname').clear();
        cy.get('#input-email').clear();
        cy.get('#input-telephone').clear();

        //Check that proper placeholder texts are displayed in the all  the fields - First  Name, Last Name, E-Mail and Telephone of 'My Account Information' page
        cy.get('#input-firstname').should('have.attr', 'placeholder', 'First Name');
        cy.get('#input-lastname').should('have.attr', 'placeholder', 'Last Name');
        cy.get('#input-email').should('have.attr', 'placeholder', 'E-Mail');
        cy.get('#input-telephone').should('have.attr', 'placeholder', 'Telephone');
    })

    it('Verifty Back button in the My Acccount Information page', () => {
        //TC_MAI_009


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

        //Click on 'Edit your account information' link on the displayed 'My Account' page
        cy.get('#content').contains('Edit your account information').click();

        //Update the fields in the 'My Account Information' page 
        cy.get('#input-firstname').clear().type('Popescu');
        cy.get('#input-lastname').clear().type('Elena');
        cy.get('#input-email').clear().type(email);
        cy.get('#input-telephone').clear().type('0123456789');

        //Click on 'Back' button
        cy.go('back');

        //Check that User is navigated to 'My Account Information' page
        cy.get('#content').contains('My Account').should('be.visible');
        cy.get('.breadcrumb').contains('Account').should('be.visible');

        //Click on 'Edit your account information' link on the displayed 'My Account' page
        cy.get('#content').contains('Edit your account information').click();

        //Check that User is taken to 'My Account Information' page and the updated details are lost
        cy.get('#content > h1').contains('My Account Information').should('be.visible');
        cy.get('.breadcrumb').contains('Edit Information').should('be.visible');
        cy.get('input[name=firstname]').should('have.value', 'Ionescu');
        cy.get('input[name=lastname]').should('have.value', 'Ioana');
        cy.get('input[name=email]').should('have.value', email);
        cy.get('input[name=telephone]').should('have.value', '012345678900');
    })

    it('Verifty Back button in the My Acccount Information page', () => {
        //TC_MAI_010


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

        //Click on 'Edit your account information' link on the displayed 'My Account' page
        cy.get('#content').contains('Edit your account information').click();

        //Check the Breadcrumb in the displayed 'My Account Information' page
        cy.get('.breadcrumb').contains('Edit Information').should('be.visible');

        //Check that Breadcrumb is working properly
        cy.get('.breadcrumb').contains('Account').click();

        //Check that user is redirected to Account Information page
        cy.get('#content > :nth-child(1)').contains('My Account').should('be.visible');
    })

    it('Verify Page Heading, Page Title and Page URL in the My Account Information page', () => {
        //TC_MAI_011


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

        //Click on 'Edit your account information' link on the displayed 'My Account' page
        cy.get('#content').contains('Edit your account information').click();

        //Check the Page Heading, Page URL and Page Title in the displayed 'My Account Information' page
        cy.url().should('contain', '/index.php?route=account/edit');
        cy.title().should('eq', 'My Account Information');
        cy.get('#content').contains('My Account Information').should('be.visible');


    })
})