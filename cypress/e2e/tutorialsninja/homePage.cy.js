/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
describe('Home Page', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();
    })


    it('Verify navigating to Home Page from Shopping Cart page', () => {
        //TC_HP_001

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

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        // Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Check that Success message with text - 'Success: You have added Product Name to your shopping cart!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Continue Shopping' button in the displayed 'Shopping Cart' page
        cy.get('.pull-left > .btn').click();

        //Check that User is taken to 'Home' Page
        cy.get('h1 > a').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');
        cy.title().should('eq', 'Your Store');
    })

    it('Verify navigating to Home page from any page of the Applcation using Logo', () => {
        //TC_HP_003

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

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        // Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the Logo 'Your Store' in our application
        cy.get('h1 > a').click();

        //Check that User is taken to 'Home' Page
        cy.get('h1 > a').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');
        cy.title().should('eq', 'Your Store');
    })

    it('Verify navigating to Home page from any Category Page which dont have any products', () => {
        //TC_HP_004

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on on 'Desktops' menu 
        cy.get('.collapse').contains('Desktops').click();

        //Select 'PC(0)' option which has zero products
        cy.get('.open > .dropdown-menu').contains('PC').click();

        //Click on 'Continue' button in the PC Category page having zero products displayed
        cy.get('.btn-primary').click();

        //Check that User is taken to 'Home' Page
        cy.get('h1 > a').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');
        cy.title().should('eq', 'Your Store');

    })

    it('Verify Hero Images and its slider options in the Home page', () => {
        //TC_HP_005

        //visit the Homepage
        cy.visit(baseUrl);

        //Check that Hero Images are dislayed
        cy.get('.img-responsive').eq(3).should('exist');

        //Hero Images should automatically slide
        cy.get('#slideshow0').should('be.visible');

        //Check that user is able to slide the images using < and > options
        cy.get('.swiper-button-next').eq(0).click();
        cy.get('.img-responsive').eq(1).should('be.visible');
        cy.get('.swiper-button-prev').eq(0).click();
        cy.get('.img-responsive').eq(1).should('be.visible');

        //Check that user is able to slide the Hero Images using Swiper Pagination bullets under the Hero Images
        cy.get('.swiper-pagination-bullet').eq(0).click();
        cy.get('.img-responsive').eq(1).should('be.visible');
        cy.get('.swiper-pagination-bullet').eq(1).click();
        cy.get('.img-responsive').eq(1).should('be.visible');
    })

    it('Verify four featured products should be displayed in the Home Page', () => {
        //TC_HP_006

        //visit the Homepage
        cy.visit(baseUrl);

        //Check that four Featured Products are displayed in the Featured Section 
        cy.get('#content > .row > :nth-child(1)').should('be.visible');
        cy.get('#content > .row > :nth-child(2)').should('be.visible');
        cy.get('#content > .row > :nth-child(3)').should('be.visible');
        cy.get('#content > .row > :nth-child(4)').should('be.visible');
    })

    it('Verify navigating to Home Page using Home icon option of the Breadcrumb in different pages of the Application', () => {
        //TC_HP_007

          //visit the Homepage
          cy.visit(baseUrl);

          //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('Apple Cinema 30"');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        // Click on 'Add to Cart' button on one of the Products displayed in the Related Products section of the displayed 'Product Display' page
        cy.get('button').eq(15).click();

        //Check that success message with text - 'Success: You have added Product Name to your shopping cart!' is displayed
        cy.get('.alert').contains('Success: You have added iPhone to your shopping cart!').should('be.visible');

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click the home icon displayed in the breadcrumb
        cy.get('.breadcrumb > :nth-child(1) > a > .fa').click();

        //Check that user is navigated to the homepage
        cy.get('h1 > a').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');
        cy.title().should('eq', 'Your Store');



    })
})