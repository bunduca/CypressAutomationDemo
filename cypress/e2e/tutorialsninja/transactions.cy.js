// <reference types="cypress" />hover


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
describe('Transactions', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();
    })


    it.skip('Verify navigating to Your Transactions page from My Account page', () => {
        //TC_TS_001

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

        //Click on 'Your Transactions' link from 'My Account' page
        cy.get('#content').contains('Your Transactions').should('be.visible').click();

        //Check that User is taken to 'Your Transactions' page
        cy.get('#content > h1').contains('Your Transactions').should('be.visible');
        cy.get('.breadcrumb').contains('Your Transactions').should('be.visible');
    })

    it.skip('Verify navigating to Your Transactions page from My Account Dropmenu', () => {
        //TC_TS_002

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

        //Select 'Transactions' option
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('Transactions').click();

        //Check that User is taken to 'Your Transactions' page
        cy.get('#content > h1').contains('Your Transactions').should('be.visible');
        cy.get('.breadcrumb').contains('Your Transactions').should('be.visible');
    })

    it.skip('Verify navigating to Your Transactions page using Right Column options', () => {
        //TC_TS_003

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

        //Click on 'Transactions' Right Column option
        cy.get('#column-right').contains('Transactions').should('be.visible').click();

        //Check that User is taken to 'Your Transactions' page
        cy.get('#content > h1').contains('Your Transactions').should('be.visible');
        cy.get('.breadcrumb').contains('Your Transactions').should('be.visible');
    })

    it.skip('Verify navigating to Your Transactions page by selecting the option from Right Column options before login', () => {
        //TC_TS_004

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

        //Click on 'Transactions' Right Column option in the displayed 'Registered Account' page
        cy.get('#column-right').contains('Transactions').should('be.visible').click();

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Check that User is taken to 'Your Transactions' page
        cy.get('#content > h1').contains('Your Transactions').should('be.visible');
        cy.get('.breadcrumb').contains('Your Transactions').should('be.visible');
    })

    it.skip('Verify Your Transactions page when the User has not placed any orders or the payments for the order made is not completed ', () => {
        //TC_TS_005

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

        //Click on 'Transactions' Right Column option
        cy.get('#column-right').contains('Transactions').should('be.visible').click();

        //Check that Text - 'Your current balance is: $0.00.' is displayed
        cy.get('#content > p').contains('Your current balance is: $0.00.').should('be.visible');

        //Check that Table with columns - Date Added, Description and Amount should be displayed without any details under these columns
        cy.get('.table-responsive').within(() => {
            cy.contains('Date Added').should('be.visible');
            cy.contains('Description').should('be.visible');
            cy.contains('Amount (USD)').should('be.visible');
            cy.contains('You do not have any transactions!').should('be.visible');
        })
    })

    it.skip('Verify Continue button in the Your Transactions page', () => {
        //TC_TS_006

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

        //Click on 'Transactions' Right Column option
        cy.get('#column-right').contains('Transactions').should('be.visible').click();

        //Check that User is taken to 'Your Transactions' page
        cy.get('#content > h1').contains('Your Transactions').should('be.visible');
        cy.get('.breadcrumb').contains('Your Transactions').should('be.visible');

        //Click on 'Continue' button in the displayed 'Your Transactions' page
        cy.get('.btn').eq(8).click();

        //Check that User is taken to 'My Account' page
        cy.get('#content').contains('My Account').should('be.visible');
        cy.get('.breadcrumb').contains('Account').should('be.visible');
    })

    it.skip('Verify the Breadcrumb of Your Transactions page', () => {
        //TC_TS_008

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
 
         //Click on 'Transactions' Right Column option
         cy.get('#column-right').contains('Transactions').should('be.visible').click();
 
        //Check the Breadcrumb of the displayed  'Your Transactions' page
         cy.get('.breadcrumb').contains('Your Transactions').should('be.visible');
        })
         
        it('Verify the Page URL, Page Heading and Page Title of Your Transactions page', () => {
            //TC_TS_009
    
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
 
         //Click on 'Transactions' Right Column option
         cy.get('#column-right').contains('Transactions').should('be.visible').click();
 
        // Check the 'Page URL', 'Page Title' and 'Page Heading' of 'Your Transactions' page   
        cy.url().should('contain', '/index.php?route=account/transaction');
        cy.title().should('eq', 'Your Transactions');
        cy.get('#content').contains('Your Transactions').should('be.visible');


    })
})