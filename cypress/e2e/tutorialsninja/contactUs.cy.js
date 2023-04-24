/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
describe('Contact Us', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();
    })


    it('Verify navigating to Contact Us page from Header options', () => {
        //TC_CU_001

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Phone' icon option from the header options
        cy.get('i.fa.fa-phone').click();

        //Check that User is taken to 'Contact Us' page
        cy.get('#content > h1').contains('Contact Us').should('be.visible');
        cy.get('.breadcrumb').contains('Contact Us').should('be.visible');
    })

    it('Verify navigating to Contact Us page from Footer options', () => {
        //TC_CU_002

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Contact Us' link from the Footer options
        cy.get('footer').contains('Contact Us').should('be.visible').click();

        //Check that User is taken to 'Contact Us' page
        cy.get('#content > h1').contains('Contact Us').should('be.visible');
        cy.get('.breadcrumb').contains('Contact Us').should('be.visible');
    })

    it('Verify whether the required details and fields are displayed in the Contact Us page', () => {
        //TC_CU_004

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Phone' icon option from the header options
        cy.get('i.fa.fa-phone').click();

        //Check that User is taken to 'Contact Us' page
        cy.get('#content > h1').contains('Contact Us').should('be.visible');
        cy.get('.breadcrumb').contains('Contact Us').should('be.visible');

        //Check that 'Contact Us' page  have the below details and fields:
        // Our Location - Your Store and Telephone (Store details and Telephone details should be displayed)
        //Contact Form - Your Name, E-Mail Address and Enquiry   
        cy.get('#content').within(() => {
            cy.contains('Your Store').should('be.visible');
            cy.contains('Telephone').should('be.visible');
            cy.contains('Your Name').should('be.visible');
            cy.contains('E-Mail Address').should('be.visible');
            cy.contains('Enquiry').should('be.visible');
        })
    })

    it('Verify all the text fields in the Contact Us page are mandatory', () => {
        //TC_CU_005/6

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Phone' icon option from the header options
        cy.get('i.fa.fa-phone').click();

        //Check that User is taken to 'Contact Us' page
        cy.get('#content > h1').contains('Contact Us').should('be.visible');
        cy.get('.breadcrumb').contains('Contact Us').should('be.visible');

        //Enter all the fields in the 'Contact Form' with valid details
        cy.get('#input-name').type('Maria Ioana');
        cy.get('#input-email').type('testtest@test.ro');
        cy.get('#input-enquiry').type('sdkjhsafiadfjkfakjafnakdfjnfkjfdaskjsadfkjfdkj');

        //Click on 'Submit' button
        cy.get('.btn').eq(7).click();

        //Click on 'Continue' button
        cy.get('.btn').eq(7).click();

        //Check that user is navigated to the homepage
        cy.get('h1 > a').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');
        cy.title().should('eq', 'Your Store');
    })

    it('Verify submitting the Contact Form in Contact Us page by not providing any details', () => {
        //TC_CU_007

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Phone' icon option from the header options
        cy.get('i.fa.fa-phone').click();

        //Check that User is taken to 'Contact Us' page
        cy.get('#content > h1').contains('Contact Us').should('be.visible');
        cy.get('.breadcrumb').contains('Contact Us').should('be.visible');

        //Don't enter any fields in the 'Contact Form' and Click on 'Submit' button 
        cy.get('.btn').eq(7).click();

        //Check that Field level validation messages informing the User to fill the mandatory fields is displayed for all the fields 
        cy.get('fieldset').within(() => {
            cy.contains('Name must be between 3 and 32 characters!').should('be.visible');
            cy.contains('E-Mail Address does not appear to be valid!').should('be.visible');
            cy.contains('Enquiry must be between 10 and 3000 characters!').should('be.visible');
        })
    })

    it('Verify entering invalid email address into the E-Mail Address field and submit the form', () => {
        //TC_CU_008

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Phone' icon option from the header options
        cy.get('i.fa.fa-phone').click();

        //Check that User is taken to 'Contact Us' page
        cy.get('#content > h1').contains('Contact Us').should('be.visible');
        cy.get('.breadcrumb').contains('Contact Us').should('be.visible');

        //Enter valid details into the 'Your Name' and 'Enquiry' text fields
        cy.get('#input-name').type('Marinescu');
        cy.get('#input-enquiry').type('jdsalksafjkfsalsfaklsfakjfsnfasklafsnadskfadnhjkdsfajdf');

        //Enter invalid email address into the 'E-Mail Address' field and click the Submit button
        cy.get('#input-email').type('amotoori');
        cy.get('.btn').eq(7).click();

        //Check that field level validation messages informing the User to enter a valid email address is displayed
        cy.get('.text-danger').contains('E-Mail Address does not appear to be valid!').should('be.visible');

        //Enter invalid email address into the 'E-Mail Address' field and click the Submit button
        cy.get('#input-email').type('amotoori@');
        cy.get('.btn').eq(7).click();

        //Check that field level validation messages informing the User to enter a valid email address is displayed
        cy.get('.text-danger').contains('E-Mail Address does not appear to be valid!').should('be.visible');

        //Enter invalid email address into the 'E-Mail Address' field and click the Submit button
        cy.get('#input-email').type('amotoori@gmail');
        cy.get('.btn').eq(7).click();

        //Check that field level validation messages informing the User to enter a valid email address is displayed
        cy.get('.text-danger').contains('E-Mail Address does not appear to be valid!').should('be.visible');

        //Enter invalid email address into the 'E-Mail Address' field and click the Submit button
        cy.get('#input-email').type('amotoori@gmail.');
        cy.get('.btn').eq(7).click();

        //Check that field level validation messages informing the User to enter a valid email address is displayed
        cy.get('.text-danger').contains('E-Mail Address does not appear to be valid!').should('be.visible');
    })

    it('Verify submitting the Contact Form in Contact Us page by providing all the details after login', () => {
        //TC_CU_009

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

        //Click on 'Phone' icon option from the header options
        cy.get('i.fa.fa-phone').click();

        //Check that User is taken to 'Contact Us' page
        cy.get('#content > h1').contains('Contact Us').should('be.visible');
        cy.get('.breadcrumb').contains('Contact Us').should('be.visible');

        //Check that Logged in User name and Logged in email address is displayed by in the 'Your Name' and 'E-Mail Address' fields
        cy.get('#input-name').should('have.value', 'Ionescu');
        cy.get('#input-email').should('have.value', 'bunductesteaza+1@gmail.com');

        //Enter any text into the 'Enquiry' field
        cy.get('#input-enquiry').type('kjzzjzjkzdjdjfdjfdncfdnjcdkdfkjdfsk')

        //Click on 'Submit' button
        cy.get('.btn').eq(8).click();

        //Click on 'Continue' button
        cy.get('.btn').eq(8).click();

        //Check that user is navigated to the homepage
        cy.get('h1 > a').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');
        cy.title().should('eq', 'Your Store');
    })

    it('Verify the Breadcrumb of Contact Us page', () => {
        //TC_CU_010

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

        //Click on 'Phone' icon option from the header options
        cy.get('i.fa.fa-phone').click();

        //Check that User is taken to 'Contact Us' page and the breadcrumb is displayed
        cy.get('#content > h1').contains('Contact Us').should('be.visible');
        cy.get('.breadcrumb').contains('Contact Us').should('be.visible');
    })

    it('Verify the Page URL, Page Heading and Page Title of Contact Us page', () => {
        //TC_CU_011

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
 
         //Click on 'Phone' icon option from the header options
         cy.get('i.fa.fa-phone').click();
 
        //Check that Correct Page URL, Page Heading and Page Title should be displayed in the 'Contact Us' page. 
        cy.url().should('contain', '/index.php?route=information/contact');
        cy.title().should('eq', 'Contact Us');
        cy.get('#content').contains('Contact Us').should('be.visible');

})
})