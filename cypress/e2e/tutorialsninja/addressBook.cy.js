/// <reference types="cypress" />

const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password } = tutorialNinjaUserDetails

describe('Address Book', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })

    it('Verify navigating to Address Book Entries page from My Account dropmenu', () => {
        //TC_AB_001

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

        //Click on 'Modify your address book entries' link
        cy.get('#content').contains('Modify your address book entries').click();

        //Check that user is taken to 'Address Book Entries' page
        cy.get('h2').contains('Address Book Entries').should('be.visible');
        cy.get('.breadcrumb').contains('Address Book').should('be.visible');
    })

    it('Verify navigating to Address Book Entries page from Right Column options', () => {
        //TC_AB_002

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type(email);
        cy.get('#input-password').type();
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();

        //Click on 'Address Book' option from Right Column options
        cy.get('#column-right').contains('Address Book').click();

        //Check that user is taken to 'Address Book Entries' page
        cy.get('h2').contains('Address Book Entries').should('be.visible');
        cy.get('.breadcrumb').contains('Address Book').should('be.visible');
    })

    it('Verify navigating to Address Book Entries page from Site Map page', () => {
        //TC_AB_003

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
        cy.get('footer').contains('Site Map').click();

        //Click on 'Address Book' link in the displayed 'Site Map' page
        cy.get('#content').contains('Address Book').click();

        //Check that user is taken to 'Address Book Entries' page
        cy.get('h2').contains('Address Book Entries').should('be.visible');
        cy.get('.breadcrumb').contains('Address Book').should('be.visible');
    })

    it('Verify navigating to Address Book Entries page from Right Column options before logging into the Application', () => {
        //TC_AB_004

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Register" option
        cy.get('.dropdown-menu > :nth-child(1) > a').click();

        // Click on 'Address Book' option from the Right Column options in the displayed 'Register Account' page
        cy.get('#column-right').contains('Address Book').click();

        //Type in the login details and click Login button
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        //Check that user is taken to 'Address Book Entries' page
        cy.get('h2').contains('Address Book Entries').should('be.visible');
        cy.get('.breadcrumb').contains('Address Book').should('be.visible');
    })

    it('Verify default address displayed in the Address Book Entries page', () => {
        //TC_AB_005

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Register" option
        cy.get('.dropdown-menu > :nth-child(1) > a').click();

        //Newly register an account
        cy.get('#input-firstname').type('Ionescu');
        cy.get('#input-lastname').type('Ion');
        cy.get('#input-email').type('ionescuion+1@test.com');
        cy.get('#input-telephone').type('0123478596');
        cy.get('#input-password').type('987654321');
        cy.get('#input-confirm').type('987654321');
        cy.get('[type="checkbox"]').click();
        cy.get('.pull-right > .btn').click();

        // Click on 'Address Book' option from Right Column options
        cy.get('#column-right').contains('Address Book').click();

        //Check the default address displayed in the 'Address Book Entries' page
        cy.get('#content > p').contains('You have no addresses in your account.').should('be.visible');
    })

    it('Verify deleting the default address in the Address Book Entries page', () => {
        //TC_AB_006

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

        //Click on 'Modify your address book entries' link
        cy.get('#content').contains('Modify your address book entries').click();

        //Check that user is taken to 'Address Book Entries' page
        cy.get('h2').contains('Address Book Entries').should('be.visible');
        cy.get('.breadcrumb').contains('Address Book').should('be.visible');
    })

    it('Verify updating the Address in the Address Book Entries page', () => {
        //TC_AB_007

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

        //Click on 'Address Book' option from Right Column options
        cy.get('.list-group').contains('Address Book').click();

        // //Click on 'Edit' button of an address in the displayed 'Address Book Entries' page
        cy.get('.btn-info').click();

        //Check that User is taken to 'Edit Address' page
        cy.get('h2').contains('Edit Address').should('be.visible');
        cy.get('.breadcrumb').contains('Edit Address').should('be.visible');

        //Update all the fields in the displayed 'Edit Address' page with new details and click the Continue button
        cy.get('#input-firstname').clear().type('Ionescu');
        cy.get('#input-lastname').clear().type('Catalin');
        cy.get('#input-company').clear().type('XYZ');
        cy.get('#input-address-1').clear().type('Str Fantanele');
        cy.get('#input-city').clear().type('Timisoara');
        cy.get('#input-postcode').clear().type('12345678');
        cy.get('#input-country').select('Romania');
        cy.get('#input-zone').select('Timis');
        cy.get('.col-sm-10 > :nth-child(1) > input').click();
        cy.get('.pull-right > .btn').click();


        //Warning message with text - 'Your address has been successfully updated' should be displayed along by taking the User back to 'Address Book Entries' page
        cy.get('.alert').contains('Your address has been successfully updated').should('be.visible');
    })

    it('Verify changing the Default Address when there is only one address in the Address Book Entries page', () => {
        //TC_AB_008

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

        //Click on 'Address Book' option from Right Column options
        cy.get('.list-group').contains('Address Book').click();

        // //Click on 'Edit' button of an address in the displayed 'Address Book Entries' page
        cy.get('.btn-info').click();

        //Change the 'Default Address' to 'No' when there is only one address in the Address Book 
        cy.get('.col-sm-10 > :nth-child(2) > input').click();

        //Click on 'Continue' button
        cy.get('.btn').eq(9).click();

        //check that Succesful message " Your address has been successfully updated" is displayed
        cy.get('.alert').contains('Your address has been successfully updated').should('be.visible');
    })

    it('Verify updating the Address  by clearing all the non-mandatory fields', () => {
        //TC_AB_009

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

        //Click on 'Address Book' option from Right Column options
        cy.get('.list-group').contains('Address Book').click();

        //Click on 'Edit' button of an address in the displayed 'Address Book Entries' page
        cy.get('.btn-info').click();

        //Clear the details from all the non-mandatory fields of the address in the displayed 'Edit Address' page
        cy.get('#input-company').clear();
        cy.get('#input-postcode').clear();

        //Click on 'Continue' button
        cy.get('.btn').eq(9).click();

        //check that Succesful message " Your address has been successfully updated" is displayed
        cy.get('.alert').contains('Your address has been successfully updated').should('be.visible');
    })

    it('Verify clearing all the fields in the Edit Address page and updating the Address', () => {
        //TC_AB_010

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

        //Click on 'Address Book' option from Right Column options
        cy.get('.list-group').contains('Address Book').click();

        //Click on 'Edit' button of an address in the displayed 'Address Book Entries' page
        cy.get('.btn-info').click();

        //Clear all the fields of the address in the displayed 'Edit Address' page
        cy.get('#input-firstname').clear();
        cy.get('#input-lastname').clear();
        cy.get('#input-company').clear();
        cy.get('#input-address-1').clear();
        cy.get('#input-country').select('--- Please Select ---');
        cy.get('#input-zone').select('--- None ---');

        //Click on 'Continue' button
        cy.get('.btn').eq(9).click();

        //check that Field level warning messages should be displayed for all the mandatory fields
        cy.get('#content').contains('First Name must be between 1 and 32 characters!').should('be.visible');
        cy.get('#content').contains('Last Name must be between 1 and 32 characters!').should('be.visible');
        cy.get('#content').contains('Address must be between 3 and 128 characters!').should('be.visible');
        cy.get('#content').contains('Please select a country!').should('be.visible');
    })

    it('Verify Back button in the Edit Address page', () => {
        //TC_AB_011

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

        //Click on 'Address Book' option from Right Column options
        cy.get('.list-group').contains('Address Book').click();

        //Click on 'Edit' button of an address in the displayed 'Address Book Entries' page
        cy.get('.btn-info').click();

        //Update all the fields of the address in the displayed 'Edit Address' page
        cy.get('#input-firstname').clear().type('Vancescu');
        cy.get('#input-lastname').clear().type('Iulian');
        cy.get('#input-company').clear().type('Google');
        cy.get('#input-address-1').clear().type('str Napoca');
        cy.get('#input-city').clear().type('Turda');
        cy.get('#input-postcode').clear().type(password);
        cy.get('#input-country').select('Romania');
        cy.get('#input-zone').select('Cluj');

        //Click on 'Back' button 
        cy.go('back');

        //Check that user is taken to the 'Address Book Entries' page and the changes to the fields should be lost without getting updated.
        cy.get('h2').contains('Address Book Entries').should('be.visible');
        cy.get('.breadcrumb').contains('Address Book').should('be.visible');
        cy.get('.table-responsive').contains('Ionescu Catalin').should('be.visible');
        cy.get('.table-responsive').contains('Str Fantanele').should('be.visible');
        cy.get('.table-responsive').contains('Timisoara').should('be.visible');
        cy.get('.table-responsive').contains('Timis').should('be.visible');
        cy.get('.table-responsive').contains('Romania').should('be.visible')
    })

    it('Verify Back button in the Address Book Entries page', () => {
        //TC_AB_012

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

        //Click on 'Address Book' option from Right Column options
        cy.get('.list-group').contains('Address Book').click();

        //Click on 'Back' button in the displayed 'Address Book Entries' page
        cy.go('back');

        //Check that user is taken to 'My Account' page
        cy.get('#content').contains('My Account').should('be.visible');
        cy.get('.breadcrumb').contains('Account').should('be.visible');
    })

    it('Verify adding new Address by providing only the mandatory fields', () => {
        //TC_AB_013

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

        //Click on 'Address Book' option from Right Column options
        cy.get('.list-group').contains('Address Book').click();

        //Click on 'New Address' button
        cy.get('.btn').eq(11).click();

        //Check that User is taken to 'Add Address' page
        cy.get('h2').contains('Add Address').should('be.visible');
        cy.get('.breadcrumb').contains('Add Address').should('be.visible');

        //Enter details into only mandatory fields (First Name, Last Name, Address 1, City, Post Code, Country and Region/State)
        cy.get('#input-firstname').type('Vancescu');
        cy.get('#input-lastname').type('Maria');
        cy.get('#input-address-1').type('Str Fabricii');
        cy.get('#input-city').type('Cluj Napoca');
        cy.get('#input-postcode').type('1234567');
        cy.get('#input-country').select('Romania');
        cy.get('#input-zone').select('Cluj');

        //Click  on 'Continue' button 
        cy.get('.btn').eq(9).click();

        //Check that new address was added
        cy.get('.alert').contains('Your address has been successfully added').should('be.visible');
        cy.get('.table-responsive').within(() => {
            cy.contains('Vancescu Maria').should('be.visible');
            cy.contains('Str Fabricii').should('be.visible');
            cy.contains('Cluj Napoca 1234567').should('be.visible');
            cy.contains('Cluj').should('be.visible');
            cy.contains('Romania').should('be.visible');
        })
    })

    it('Verify selecting the newly added Address as default address', () => {
        //TC_AB_014

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

        //Click on 'Address Book' option from Right Column options
        cy.get('.list-group').contains('Address Book').click();

        //Click on 'Edit' button on the newly added address
        cy.get('.btn-info').eq(1).click();

        //Select 'Yes' radio option for the 'Default Address' field
        cy.get('.col-sm-10 > :nth-child(1) > input').click();

        //Click  on 'Continue' button 
        cy.get('.btn').eq(9).click();

        //Check that User is taken to 'Address Book Entries' page and the new address should become the default address and the old address should not be default address anymore.
        cy.get('.alert').contains(' Your address has been successfully updated').should('be.visible');
    })

    it('Verify the Breadcrumb, Page URL, Page Heading and Page Title of Address Book Entries page', () => {
        //TC_AB_017

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

        //Click on 'Address Book' option from Right Column options
        cy.get('.list-group').contains('Address Book').click();

        //Check Breadcrumb, Page URL, Page Heading and Page Title of 'Address Book Entries' page
        cy.get('.breadcrumb').contains('Address Book').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/address');
        cy.get('h2').contains('Address Book Entries').should('be.visible');
        cy.title().should('eq', 'Address Book');
    })

    it('Verify the Breadcrumb, Page URL, Page Heading and Page Title of Edit Address page', () => {
        //TC_AB_018

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

        //Click on 'Address Book' option from Right Column options
        cy.get('.list-group').contains('Address Book').click();

        //Click on 'Edit' button o of any address in the 'Address Book Entries' page 
        cy.get('.btn-info').eq(1).click();

        //Check Breadcrumb, Page URL, Page Heading and Page Title of 'Edit Address' page
        cy.get('.breadcrumb').contains('Edit Address').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/address/edit&address_id=14082');
        cy.get('h2').contains('Edit Address').should('be.visible');
        cy.title().should('eq', 'Address Book');
    })

    it('Verify the Breadcrumb, Page URL, Page Heading and Page Title of Add Address page', () => {
        //TC_AB_019

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

        //Click on 'Address Book' option from Right Column options
        cy.get('.list-group').contains('Address Book').click();

        //Click on 'New Address' button
        cy.get('.btn').eq(13).click();

        //Check Breadcrumb, Page URL, Page Heading and Page Title of 'Add Address' page
        cy.get('.breadcrumb').contains('Add Address').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/address/add');
        cy.get('h2').contains('Add Address').should('be.visible');
        cy.title().should('eq', 'Address Book');


    })
})