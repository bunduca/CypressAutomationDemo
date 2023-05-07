/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password } = tutorialNinjaUserDetails

describe('Wishlist', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })

    it('Verify adding a product to Wish List page from the Product that is displayed in the Related Products section of Product Display page', () => {
        //TC_WL_001

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

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        // Click on 'Add to Wish List' option on a product that is displayed in the 'Related Products' section of displayed 'Product Display' page
        cy.get('button').eq(15).click();

        //Check that success message with text - 'Success: You have added Product Name to your wish list!' is displayed
        cy.get('.alert').contains('Success: You have added Apple Cinema 30" to your wish list!').should('be.visible');

        //Click on the 'wish list!' link in the displayed success message
        cy.get('.alert').contains('wish list').click();

        //Check that product is successfully displayed in the 'My Wish List' page
        cy.get('#content').contains('Apple Cinema 30"');
    })

    it('Verify adding a product to Wish List page from the Product that is displayed in the Featured section of Home page', () => {
        //TC_WL_002

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

        //Click on the 'Store logo'
        cy.get('h1').click();

        //Check that  User is taken to Home page
        cy.get('h1').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');

        //Click on 'Add to Wish List' option on a product that is displayed in the 'Featured' section
        cy.get('button').eq(14).click();

        //Check that success message is dislayed
        cy.get('.alert').contains('Success: You have added iPhone to your wish list!').should('be.visible');

        //Click on the 'wish list!' link in the displayed success message
        cy.get('.alert').contains('wish list').click();

        //Check that product is successfully displayed in the 'My Wish List' page
        cy.get('#content').contains('iPhone').should('be.visible');
    })

    it('Verify adding the product to Wish List from the Products displayed in the category or sub-category page', () => {
        //TC_WL_003

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

        //Click on the 'Store logo'
        cy.get('h1').click();

        //Check that  User is taken to Home page
        cy.get('h1').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');

        //Click on 'Desktops' menu option
        cy.get('.collapse').contains('Desktops').click();

        //Click on 'Show All Desktops' option 
        cy.get('.open > .dropdown-menu').contains('Show All Desktops').should('be.visible').click();

        //Select 'Mac' subcategory option from the left side options 
        cy.get('#column-left').contains('Mac').click();

        //Click on 'Add to Wish List' option that is availble on any of the Products of the displayed Category or Sub-category pages
        cy.get('button').eq(13).click();

        //Check that success message is dislayed
        cy.get('.alert').contains('Success: You have added iMac to your wish list!').should('be.visible');

        //Click on the 'wish list!' link in the displayed success message
        cy.get('.alert').contains('wish list').click();

        //Check that product is successfully displayed in the 'My Wish List' page
        cy.get('#content').contains('iMac').should('be.visible');
    })

    it('Verify adding a product to Wish List page from the Search Results page', () => {
        //TC_WL_004

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

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on 'Wishlist' option on the product that is displayed in the Search Results
        cy.get('button').eq(13).click();

        //Check that success message is dislayed
        cy.get('.alert').contains('Success: You have added iMac to your wish list!').should('be.visible');

        //Click on the 'wish list!' link in the displayed success message
        cy.get('.alert').contains('wish list').click();

        //Check that product is successfully displayed in the 'My Wish List' page
        cy.get('#content').contains('iMac').should('be.visible');
    })

    it('Verify navigating to My Wish List page using the wish list! link in the success message', () => {
        //TC_WL_005

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

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on 'Wishlist' option on the product that is displayed in the Search Results
        cy.get('button').eq(13).click();

        //Check that success message is dislayed
        cy.get('.alert').contains('Success: You have added iMac to your wish list!').should('be.visible');

        //Click on the 'wish list!' link in the displayed success message
        cy.get('.alert').contains('wish list').click();

        //Check that user is taken to 'My Wish List' page
        cy.get('h2').contains('My Wish List').should('be.visible');
        cy.get('.breadcrumb').contains('My Wish List').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/wishlist');
    })

    it('Verify navigating to My Wish List page using the Wish List header option', () => {
        //TC_WL_006

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

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Wish List' option in the displayed 'Product Display' page 
        cy.get('button').eq(11).click();

        // Click on the 'Wish List' header option
        cy.get('#wishlist-total > .fa').click();

        //Check that user is taken to 'My Wish List' page
        cy.get('h2').contains('My Wish List').should('be.visible');
        cy.get('.breadcrumb').contains('My Wish List').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/wishlist');
    })

    it('Verify navigating to My Wish List page using the Right Column header options', () => {
        //TC_WL_007

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

        //Click on 'Wish List' option from the 'Right Column' options
        cy.get('#column-right').contains('Wish List').click();

        //Check that user is taken to 'My Wish List' page
        cy.get('h2').contains('My Wish List').should('be.visible');
        cy.get('.breadcrumb').contains('My Wish List').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/wishlist');

    })

    it('Verify navigating to My Wish List page from the My Account page ', () => {
        //TC_WL_008

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

        //Click on 'Modify your wish list' option
        cy.get('#content').contains('Modify your wish list').should('be.visible').click();

        //Check that user is taken to 'My Wish List' page
        cy.get('h2').contains('My Wish List').should('be.visible');
        cy.get('.breadcrumb').contains('My Wish List').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/wishlist');
    })

    it('Verify navigating to My Wish List page from the Footer options ', () => {
        //TC_WL_009

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

        //Click on 'Wish List' link in the Footer options
        cy.get('footer').contains('Wish List').should('be.visible').click();

        //Check that user is taken to 'My Wish List' page
        cy.get('h2').contains('My Wish List').should('be.visible');
        cy.get('.breadcrumb').contains('My Wish List').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/wishlist');
    })

    it('Verify the Breadcrumb in the Wish List page', () => {
        //TC_WL_010

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

        //Click on 'Modify your wish list' option
        cy.get('#content').contains('Modify your wish list').should('be.visible').click();

        //Check the Breadcrumb that is displayed in the 'Wish List' page
        cy.get('.breadcrumb').contains('My Wish List').should('be.visible');
    })

    it('Verify the Page Title, Page URL and Page Heading of Wish List page', () => {
        //TC_WL_011

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

        //Click on 'Modify your wish list' option
        cy.get('#content').contains('Modify your wish list').should('be.visible').click();

        //Check that Correct Page Title, Page URL and Page Heading is displayed
        cy.get('h2').contains('Wish List').should('be.visible');
        cy.url().should('contain', '/index.php?route=account/wishlist');
        cy.title().should('eq', 'My Wish List');
    })

    it('Verify the removing the Product  from My Wish List page', () => {
        //TC_WL_014


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

        //Click on 'Modify your wish list' option
        cy.get('#content').contains('Modify your wish list').should('be.visible').click();

        //Remove a product from the Wish List
        cy.get(':nth-child(1) > :nth-child(6) > .btn-danger').click();

        //Check that success message is displayed correctly
        cy.get('.alert').contains('Success: You have modified your wish list!').should('be.visible');
        cy.get('#content > p').contains('Your wish list is empty.').should('be.visible');
    })

    it('Verify adding the product to Cart from the My Wish List page', () => {
        //TC_WL_015


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

        //Click on the 'Store logo'
        cy.get('h1').click();

        //Check that  User is taken to Home page
        cy.get('h1').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');

        //Click on 'Add to Wish List' option on a product that is displayed in the 'Featured' section
        cy.get('button').eq(14).click();

        //Click on the 'wish list!' link in the displayed success message
        cy.get('.alert').contains('wish list').click();

        //Click on 'Add to Cart' icon option
        cy.get('button').eq(10).click();

        //Check that success message with text - 'Success: You have added Product Name to your shopping cart!' is displayed
        cy.get('.alert').contains('Success: You have added iPhone to your shopping cart!').should('be.visible');
    })

    it('Verify adding the product to Cart from the My Wish List page', () => {
        //TC_WL_016

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

        //Click on the 'Store logo'
        cy.get('h1').click();

        //Check that  User is taken to Home page
        cy.get('h1').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');

        //Click on 'Add to Wish List' option on multiple products that are displayed in the 'Featured' section
        cy.get(':nth-child(2) > .product-thumb').within(() => {
            cy.get('button').eq(1).click();
        });

        cy.get(':nth-child(3) > .product-thumb').within(() => {
            cy.get('button').eq(1).click();
        });

        cy.get(':nth-child(4) > .product-thumb').within(() => {
            cy.get('button').eq(1).click();
        });

        //Go to My Account and click on 'Modify your wish list' option
        cy.get('.dropdown > .dropdown-toggle > .fa').click();
        cy.get('.list-inline > .dropdown > .dropdown-menu').contains('My Account').click();
        cy.get('#content').contains('Modify your wish list').should('be.visible').click();

        //Check that multiple products are displayed in the Wish List
        cy.get('.table-responsive > .table').within(() => {
            cy.contains('Canon EOS 5D').should('be.visible');
            cy.contains('iPhone').should('be.visible');
            cy.contains('Apple Cinema 30"').should('be.visible');
            cy.contains('MacBook').should('be.visible');

        });

    })
})