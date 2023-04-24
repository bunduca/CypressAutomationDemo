// <reference types="cypress" />hover


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
describe('Reward Points', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();
    })


    it.skip('Verify navigating to Your Reward Points page from My Account page', () => {
        //TC_RP_001

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

        //Click on 'Your Reward Points' in the displayed 'My Account' page
        cy.get('#content').contains('Your Reward Points').click();

        //Check that User is taken to 'Your Reward Points' page
        cy.get('#content > h1').contains('Your Reward Points').should('be.visible');
    })

    it.skip('Verify navigating to Your Reward Points page from Right Column options', () => {
        //TC_RP_002

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

        // Click on 'Reward Points' from the Right Column options
        cy.get('#column-right').contains('Reward Points').should('be.visible').click();

        //Check that User is taken to 'Your Reward Points' page
        cy.get('#content > h1').contains('Your Reward Points').should('be.visible');
    })

    it.skip('Verify navigating to Your Reward Points page by selecting the option from Right Column options before login', () => {
        //TC_RP_003

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Click on 'Reward Points' Right Column option in the displayed 'Registered Account' page
        cy.get('#column-right').contains('Reward Points').should('be.visible').click();

        //Check that User is redirected to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get('h2').contains('Returning Customer').should('be.visible');

         //Type in the login details and click Login button
         cy.get('#input-email').type('bunductesteaza+1@gmail.com');
         cy.get('#input-password').type('123456789');
         cy.get('form > .btn').click();

         //Check that User is taken to 'Your Reward Points' page
        cy.get('#content > h1').contains('Your Reward Points').should('be.visible');
    })

    it.skip('Verify navigating to Your Reward Points page by selecting the option from Right Column options before login', () => {
        //TC_RP_004

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

        // Click on 'Reward Points' from the Right Column options
        cy.get('#column-right').contains('Reward Points').should('be.visible').click();

        //Check that User is taken to 'Your Reward Points' page
        cy.get('#content > h1').contains('Your Reward Points').should('be.visible');

        //Check that Text - 'Your total number of reward points is: 0.' is displayed
        cy.get('#content').contains('Your total number of reward points is: 0.').should('be.visible');
        cy.get('.table-responsive').contains('You do not have any reward points!').should('be.visible');
    })

    it('Verify Continue button in the Your Reward Points page', () => {
        //TC_RP_005

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

        // Click on 'Reward Points' from the Right Column options
        cy.get('#column-right').contains('Reward Points').should('be.visible').click();

        //Check that User is taken to 'Your Reward Points' page
        cy.get('#content > h1').contains('Your Reward Points').should('be.visible');

        //Click on 'Continue' button in the displayed 'Your Reward Points' page
        cy.get('.btn').eq(8).click();

        //Check that user is redirected to My Account Page
        cy.get('#content').contains('My Account').should('be.visible');
    })

    it('Verify the Breadcrumb of Your Rewards Points page', () => {
        //TC_RP_007

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

        // Click on 'Reward Points' from the Right Column options
        cy.get('#column-right').contains('Reward Points').should('be.visible').click();

        //Breadcrumb should be displayed and properly working in the 'Your Reward Points' page.
        cy.get('.breadcrumb').contains('Reward Points').should('be.visible');
    })

    it('Verify the Page URL, Page Heading and Page Title of Your Reward Points page', () => {
        //TC_RP_008

        
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

        // Click on 'Reward Points' from the Right Column options
        cy.get('#column-right').contains('Reward Points').should('be.visible').click();

        //Check that Correct Page URL, Page Heading and Page Title is displayed in the 'Your Reward Points' page
        cy.url().should('contain', '/index.php?route=account/reward');
        cy.title().should('eq', 'Your Reward Points');
        cy.get('#content').contains('Your Reward Points').should('be.visible');



    })
})