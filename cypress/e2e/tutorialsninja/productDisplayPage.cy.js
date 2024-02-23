/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password } = tutorialNinjaUserDetails

describe('Product Display Page', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })

    it('Verify the Thumbnails of the Product displayed in the Product Display Page', () => {
        //TC_PDP_001

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

        //Click on the main bigger sized Thumbnail image displayed on the 'Product Display Page'
        cy.get(':nth-child(1) > .thumbnail').click();

        //Check that Light box view of the main Thumnail image is displayed with options to view the previous and next Thumnail images in Light box view.
        cy.get('.mfp-img').should('be.visible');
        cy.get('.mfp-arrow-left').should('be.visible');
        cy.get('.mfp-arrow-right').should('be.visible');

        // Click on '<' and '>' options and check that user is able to navigate thumbnail images in the Lightbox view
        cy.get('.mfp-arrow-left').click();
        cy.get('.mfp-counter').contains('3 of 3').should('be.visible');
        cy.get('.mfp-arrow-right').click();
        cy.get('.mfp-counter').contains('1 of 3').should('be.visible');
        cy.get('.mfp-arrow-right').click();
        cy.get('.mfp-counter').contains('2 of 3').should('be.visible');

        //Click on 'x' option when the thumbnails are displayed in Light box view
        cy.get('.mfp-close').click();

        //Check that Light box view is closed 
        cy.get('.mfp-img').should('not.exist');
        cy.get('.mfp-arrow-left').should('not.exist');
        cy.get('.mfp-arrow-right').should('not.exist');

        //Click on the normal sized Thumbnail images, then Click on '<' and '>' options and check that user is able to navigate thumbnail images in the Lightbox view
        cy.get(':nth-child(2) > .thumbnail').click();
        cy.get('.mfp-arrow-left').click();
        cy.get('.mfp-counter').contains('1 of 3').should('be.visible');
        cy.get('.mfp-arrow-right').click();
        cy.get('.mfp-counter').contains('2 of 3').should('be.visible');
        cy.get('.mfp-arrow-right').click();
        cy.get('.mfp-counter').contains('3 of 3').should('be.visible');

        //Click on 'x' option when the thumbnails are displayed in Light box view
        cy.get('.mfp-close').click();

        //Check that Light box view is closed 
        cy.get('.mfp-img').should('not.exist');
        cy.get('.mfp-arrow-left').should('not.exist');
        cy.get('.mfp-arrow-right').should('not.exist');
    })

    it('Verify that Product Name, Brand and Product Code are displayed in the Product Display Page', () => {
        //TC_PDP_002

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

        //Proper Product Name, Brand and Product Code should be displayed for the different types of Products in the Product Display Page.
        cy.get('.col-sm-4 > h1').contains('iMac').should('be.visible');
        cy.get('.col-sm-4 > :nth-child(3) > :nth-child(1)').contains('Brand: Apple').should('be.visible');
        cy.get('.col-sm-4 > :nth-child(3) > :nth-child(2)').contains('Product Code:Product 14').should('be.visible');
    })

    it('Verify the availabilty status of the Product in the Product Display Page', () => {
        //TC_PDP_003

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

        //Check the availability status of the Products in the displayed Product Display Page
        cy.get('.col-sm-4 > :nth-child(3) > :nth-child(3)').contains('Availability:').should('be.visible');
    })

    it('Verify the Price of the Product with and without tax is displayed in the Product Display Page', () => {
        //TC_PDP_004

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

        //Check that price and Ex Tax is visible in the displayed Product Display Page
        cy.get('h2').contains('$100.00').should('be.visible');
        cy.get('#product-product').contains('Ex Tax:$100.00').should('be.visible');
    })

    it('Verify the default quanity for the Product is displayed as 1 in the Product Display Page, when there is no minimum quantity set for the Product', () => {
        //TC_PDP_005

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

        //Check that default quantity is displayed 1 for this product which has not minimum quantity set
        cy.get('input[name=quantity]').should('have.value', '1');

        //Increase the quantity to 2 and check that qty field has changed
        cy.get('#input-quantity').clear();
        cy.get('#input-quantity').type('2');
        cy.get('input[name=quantity]').should('have.value', '2');

        //Add to cart and check that 2 products were added to cart without any issue
        cy.get('#button-cart').click();
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');
    })

    it('Verify the negative quantity or zero quantity or null quantity should not be allowed in the Product Display Page', () => {
        //TC_PDP_006
        //test failed due to error message not showing up

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

        //Update the quantity in the Qty text field by providing a negative number or zero number or null quantity and click on 'Add to Cart' button
        cy.get('#input-quantity').clear();
        cy.get('#input-quantity').type('-1');
        cy.get('input[name=quantity]').should('have.value', '-1');
        cy.get('#button-cart').click();

        //Check that a field level message - 'Quantity should be a positive number' or 'Quantity cannot be zero, null or negative' is displayed under the Qty text field
        cy.get('.alert').contains('Quantity should be a positive number').should('be.visible');
    })


    it('Verify the description of the Product in the Product Display Page ', () => {
        //TC_PDP_008

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

        //Check that correct description of the product without any spelling or grammatical mistakes is displayed
        cy.get('.active > a').click();
        cy.get('#tab-description > div').should('be.visible');
    })

    it('Verify the specifications of the Product in the Product Display Page ', () => {
        //TC_PDP_009

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
        cy.get('.form-control').type('Apple Cinema 30"');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        // Click on the Specification tab of the Product in the displayed 'Product Display' page
        cy.get('.col-sm-8 > .nav > :nth-child(2) > a').click();

        // Correct Specifications of the product without any spelling or grammatrical mistakes should be displayed 
        cy.get('table').should('be.visible');
    })

    it('Verify the description of the Product in the Product Display Page ', () => {
        //TC_PDP_010

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
        cy.get('.form-control').type('Apple Cinema 30"');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on the Reviews tab of the Product in the displayed 'Product Display' page
        cy.get('.nav-tabs').contains('Reviews').click();

        //Enter your name into the 'Your Name' text field
        cy.get('#input-name').clear().type('Popescu Maria');

        //Enter review text into the 'Your Review' text are field
        cy.get('#input-review').type('I love my new Apple Cinema 30", I cannot reccommend it enough');

        //Select any radio button to give the rating
        cy.get('.col-sm-12 > [value="5"]').click();

        //Click on 'Continue' button
        cy.get('#button-review').click();

        // Success message with text - 'Thank you for your review. It has been submitted to the webmaster for approval.' should be displayed. 
        cy.get('.alert').contains('Thank you for your review. It has been submitted to the webmaster for approval.').should('be.visible');
    })

    it('Verify the Reviews tab when there are no reviews or zero reviews added', () => {
        //TC_PDP_011

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

        //Click on the Reviews tab of the Product in the displayed 'Product Display' page
        cy.get('.nav-tabs').contains('Reviews').click();

        //Check that 'There are no reviews for this product.' text is displayed under the 'Reviews' tab
        cy.get('#review > p').contains('There are no reviews for this product.').should('be.visible');
    })

    it('Verify Write a review link under Add to Cart button on the Product Display page', () => {
        //TC_PDP_013

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

        //Click on 'Write a review' link under 'Add to Cart' button of the 'Product Display' page
        cy.get('.rating').contains(' Write a review').click();

        //Check that 'Reviews' tab in the Product Display page is coming to the focus.  
        cy.get('#form-review').should('be.visible');
        cy.get('.active > a').should('be.visible');
    })

    it('Verify submitting a review without filling the mandatory fields ', () => {
        //TC_PDP_017

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

        //Select the Reviews tab of the Product in the displayed 'Product Display' page
        cy.get('.col-sm-8 > .nav > :nth-child(2) > a').click();

        //Don't provide Name, Your Review and Ratings and click on 'Continue' button
        cy.get('#button-review').click();

        //Check that proper warning messages informing the User to fill the mandatory fields to submit the review is displayed.
        cy.get('.alert').contains('Warning: Please select a review rating!').should('be.visible');
    })

    it('Verify the review text given while writing is accepted according to the specified number of characters', () => {
        //TC_PDP_018

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

        //Select the Reviews tab of the Product in the displayed 'Product Display' page
        cy.get('.col-sm-8 > .nav > :nth-child(2) > a').click();

        //Provide Name and Ratings and click the Continue button
        cy.get('#input-name').clear().type('Popescu Maria');
        cy.get('[value="3"]').click();
        cy.get('#button-review').click();

        //Check that proper warning message with the text - 'Warning: Review Text must be between 25 and 1000 characters!' is displayed
        cy.get('.alert').contains('Warning: Review Text must be between 25 and 1000 characters!').should('be.visible');
    })

    it('Verify adding the product to Wish List from the Product Display page', () => {
        //TC_PDP_019

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
        cy.get('[data-original-title="Add to Wish List"]').eq(0).click();

        //Check that Success message with text - 'Success: You have added Product Name to your wish list!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your wish list!').should('be.visible');

        //Click on 'wish list' link in the success message 
        cy.get('.alert > [href="https://tutorialsninja.com/demo/index.php?route=account/wishlist"]').click();

        //Check that user is taken to 'Wish List page and the product added is displayed in the 'Wish List' page
        cy.get('h2').contains('My Wish List').should('be.visible');
        cy.get('.breadcrumb').contains('My Wish List').should('be.visible');
    })

    it('Verify adding the product for comparision from the Product Display page', () => {
        //TC_PDP_020

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

        //Click on 'Compare this Product' option in the displayed 'Product Display' page
        cy.get('[data-original-title="Compare this Product"]').eq(0).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Click on 'product comparisoin' link in the success message
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=product/compare"]').click();

        //Check that user is taken to 'Product Comparison' page and the product details are displayed in the page
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
    })

    it('Verify Related Products section in Product Display page', () => {
        //TC_PDP_022

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

        //Click on the 'Related Products' section in the displayed Product Display Page
        cy.get('.img-responsive').should('be.visible').click();

        //Check that  User is navigated to the Product Display Page of the related product
        cy.get('.col-sm-4 > h1').contains('Apple Cinema 30"').should('be.visible');
        cy.get('.breadcrumb').contains('Apple Cinema 30"').should('be.visible');
    })

    it('Verify navigating to the Product Display page by using the Product image in the Wish List page', () => {
        //TC_PDP_023

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
        cy.get('[data-original-title="Add to Wish List"]').eq(0).click();

        //Check that Success message with text - 'Success: You have added Product Name to your wish list!' is displayed
        cy.get('.alert').contains(' Success: You have added iMac to your wish list!').should('be.visible');

        //Click on the 'Wish List' header option
        cy.get('#wishlist-total > .fa').click();

        // Click on the Image icon displayed under the 'Image' section of the displayed 'Wish List' page
        cy.get('.table-responsive > .table > tbody > :nth-child(1) > .text-center > a > img').click();

        //Check that User is taken the Product Display page of the Product that is displayed in the 'Wish List' page
        cy.get('.col-sm-4 > h1').contains('iMac').should('be.visible');
        cy.get('.breadcrumb').contains('iMac').should('be.visible');
    })

    it('Verify navigating to the Product Display page by using the Product Name link in the Wish List page', () => {
        //TC_PDP_024

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
        cy.get('[data-original-title="Add to Wish List"]').eq(0).click();

        //Check that Success message with text - 'Success: You have added Product Name to your wish list!' is displayed
        cy.get('.alert').contains(' Success: You have added iMac to your wish list!').should('be.visible');

        //Click on the 'Wish List' header option
        cy.get('#wishlist-total > .fa').click();

        //Click on the Product Name link displayed under the 'Product Name' section of the displayed 'Wish List' page
        cy.get('.table-responsive').contains('iMac').click();

        //Check that user is taken to the Product Display page of the Product that is displayed in the 'Wish List' page
        cy.get('.col-sm-4 > h1').contains('iMac').should('be.visible');
        cy.get('.breadcrumb').contains('iMac').should('be.visible');
    })

    it('Verify navigating to the Product Display page by using the Product Name link in Success message on adding the Product to Cart', () => {
        //TC_PDP_025

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

        //Click on 'Add to Cart' button
        cy.get('#button-cart').click();

        //Click on 'Product Name' link from the displayed success page
        cy.get('.alert').contains('iMac').click();

        //Check that User is taken to the Product Display page of the Product 
        cy.get('.col-sm-4 > h1').contains('iMac').should('be.visible');
        cy.get('.breadcrumb').contains('iMac').should('be.visible');
    })

    it('Verify navigating to the Product Display page by using the Product Image in the Shopping Cart page', () => {
        //TC_PDP_026

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

        //Click on 'Add to Cart' button
        cy.get('#button-cart').click();

        // Click on 'shopping cart!' link from the displayed success page
        cy.get('.alert').contains('shopping cart').click();

        //Click on the Product image from the displayed Shopping Cart page
        cy.get('.table-responsive > .table > tbody > :nth-child(2) > .text-center > a > .img-thumbnail').click();

        //Check that User is taken to the Product Display page of the Product 
        cy.get('.col-sm-4 > h1').contains('iMac').should('be.visible');
        cy.get('.breadcrumb').contains('iMac').should('be.visible');
    })

    it('Verify navigating to the Product Display page by using the Product Name link in the Shopping Cart page', () => {
        //TC_PDP_027

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

        //Click on 'Add to Cart' button
        cy.get('#button-cart').click();

        // Click on 'shopping cart!' link from the displayed success page
        cy.get('.alert').contains('shopping cart').click();

        //Click on the Product Name link from the displayed Shopping Cart page
        cy.get('.table-responsive').contains('iMac').click();

        //Check that User is taken to the Product Display page of the Product 
        cy.get('.col-sm-4 > h1').contains('iMac').should('be.visible');
        cy.get('.breadcrumb').contains('iMac').should('be.visible');
    })

    it('Verify the Reward Points displayed in the Product Display page', () => {
        //TC_PDP_031

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
        cy.get('.form-control').type('Apple Cinema 30"');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Check that 'Reward Points' in the displayed 'Product Display' page are visible
        cy.get('#content > :nth-child(1) > .col-sm-4').contains('Reward Points:100').should('be.visible');

    })

    it('Verify the original price of the Product without offer in the Product Display page', () => {
        //TC_PDP_032

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
        cy.get('.form-control').type('Apple Cinema 30"');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Check that orignal price is displayed as striked off
        cy.get('.col-sm-4 > :nth-child(4) > :nth-child(1) > span').should('have.css', 'text-decoration', 'line-through solid rgb(102, 102, 102)')
    })

    it('Verify the prices of the Product when purchased in bulk ', () => {
        //TC_PDP_033

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
        cy.get('.form-control').type('Apple Cinema 30"');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Check that Prices when purchased in bulk are displayed correctly for 10 products, 20 products and 30 products 
        cy.get('.col-sm-4 > :nth-child(4)').contains('10 or more $88.00').should('be.visible');
        cy.get('.col-sm-4 > :nth-child(4)').contains('20 or more $77.00').should('be.visible');
        cy.get('.col-sm-4 > :nth-child(4)').contains('30 or more $66.00').should('be.visible');
    })

    it('Verify all the extra available options in the Product Display page', () => {
        //TC_PDP_034

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
        cy.get('.form-control').type('Apple Cinema 30"');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //User should be able to select all the available options 
        cy.get('#product > h3').contains('Available Options').should('be.visible');
        cy.get('.radio > label > input').click();
        cy.get(':nth-child(2) > label > input').click();
    })

    it('Verify Page Title, Page Heading and Page URL of the Product Display page', () => {
        //TC_PDP_035

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

        //Check that proper Page Heading is displayed
        cy.get('.col-sm-4 > h1').contains('iMac').should('be.visible');

        //Check that proper Page Title is displayed
        cy.title().should('eq', 'iMac');

        //Check that proper URL is displayed
        cy.url().should('contain', '/index.php?route=product/product&product_id=41&search=iMac');
    })
})