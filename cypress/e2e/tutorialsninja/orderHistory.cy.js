/// <reference types="cypress" />hover


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
describe('Order History', () => {




    it.skip('Verify navigating to Order History page from My Account page', () => {
        //TC_OH_001

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();

        //Click on 'View your order history' link in the displayed 'My Account' page
        cy.get('#column-right').contains('Order History').click();

        //Check that User is taken to the 'Order History' page
        cy.get('#content > h1').contains('Order History').should('be.visible');
        cy.get('.breadcrumb').contains('Order History').should('be.visible');
    })

    it.skip('Verify navigating to Order History page from My Account dropmenu', () => {
        //TC_OH_002


        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Select 'Order History' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('Order History').click();

        //Check that User is taken to the 'Order History' page
        cy.get('#content > h1').contains('Order History').should('be.visible');
        cy.get('.breadcrumb').contains('Order History').should('be.visible');
    })

    it.skip('Verify navigating to Order History page using Address Book Right Column option', () => {
        //TC_OH_003

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();

        //Click on 'Address Book' option from Right Column options
        cy.get('#column-right').contains('Address Book').click();

        //Click on 'Order History' Right column option
        cy.get('#column-right').contains('Order History').click();

        //Check that User is taken to the 'Order History' page
        cy.get('#content > h1').contains('Order History').should('be.visible');
        cy.get('.breadcrumb').contains('Order History').should('be.visible');
    })

    it.skip('Verify navigating to Order History page from Site Map page', () => {
        //TC_OH_004

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Click on 'Site Map' footer option
        cy.get('footer').contains('Site Map').click();

        // Click on 'Order History' option in the displayed 'Site Map' page
        cy.get('#content').contains('Order History').click();

        //Check that User is taken to the 'Order History' page
        cy.get('#content > h1').contains('Order History').should('be.visible');
        cy.get('.breadcrumb').contains('Order History').should('be.visible');
    })

    it.skip('Verify navigating to Order History page from Right Column options before logging into the Application', () => {
        //TC_OH_005

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Register" option
        cy.get('.dropdown-menu > :nth-child(1) > a').click();

        //Verify redirect to the register account page
        cy.url().should('contain', '/index.php?route=account/register');
        cy.get('#content > h1').contains('Register Account').should('be.visible');

        //Click on 'Order History' Right Column option in the displayed 'Registered Account' page
        cy.get('#column-right').contains('Order History').click();

        //Enter the credentials and click on 'Login' button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Check that User is taken to the 'Order History' page
        cy.get('#content > h1').contains('Order History').should('be.visible');
        cy.get('.breadcrumb').contains('Order History').should('be.visible');
    })

    it('Verify Continue button in the Order History page', () => {
        //TC_OH_007

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();


        //Click on 'Order History' Right column option
        cy.get('#column-right').contains('Order History').click();

        //Check that User is taken to the 'Order History' page
        cy.get('#content > h1').contains('Order History').should('be.visible');
        cy.get('.breadcrumb').contains('Order History').should('be.visible');

        //Click on 'Continue' button in the 'Order History' page
        cy.get('.btn').eq(8).click();

        //Verify successfull redirect to My Account page
        cy.get('#content > :nth-child(1)').contains('My Account').should('be.visible');
    })

    it('Verify the Breadcrumb of Order History page', () => {
        //TC_OH_009

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();


        //Click on 'Order History' Right column option
        cy.get('#column-right').contains('Order History').click();

        //Check that Breadcrumb is displayed and properly working in the 'Order History' page. 
        cy.get('.breadcrumb').contains('Order History').should('be.visible');
    })

    it('Verify the Page URL, Page Heading and Page Title of Order History page', () => {
        //TC_OH_010

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        // Click on 'My Account' dropmenu
        cy.get('.caret').click();

        //Click on 'My Account' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();


        //Click on 'Order History' Right column option
        cy.get('#column-right').contains('Order History').click();

        //Check that Correct Page URL, Page Heading and Page Title is displayed in the 'Order History' page
        cy.url().should('contain', '/index.php?route=account/order');
        cy.get('#content > h1').contains('Order History').should('be.visible');
        cy.title().should('eq', 'Order History');

    })
})