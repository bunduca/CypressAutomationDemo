/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password } = tutorialNinjaUserDetails

describe('Shopping Cart', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })

    it('Verify navigating to Shopping Cart page from the Success message', () => {
        //TC_SC_001


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

        // Click on 'Add to Cart' option on a product that is displayed in the 'Related Products' section of displayed 'Product Display' page
        cy.get('button').eq(11).click();

        //Check that success message with text - 'Success: You have added iMac to your shopping cart!!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');

        //Click on the 'shopping cart' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Check that user is taken to the Shopping Cart page
        cy.get('#content > h1').contains('Shopping Cart').should('be.visible');
        cy.get('.breadcrumb').contains('Shopping Cart').should('be.visible');
    })

    it('Verify navigating to Shopping Cart page from the Shopping Cart header option', () => {
        //TC_SC_002

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

        //Click on 'Add to Cart' button on the Product displayed in the Search results
        cy.get('button').eq(10).click();

        //Click on the 'Shopping Cart' header option
        cy.get(':nth-child(4) > a > .fa').click();

        //Check that user is taken to the Shopping Cart page
        cy.get('#content > h1').contains('Shopping Cart').should('be.visible');
        cy.get('.breadcrumb').contains('Shopping Cart').should('be.visible');
    })

    it('Verify navigating to Shopping Cart page from the Site Map footer page', () => {
        //TC_SC_003
        //Test fails due to redirect issue
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
        cy.get('#input-email').type(email);
        cy.get('#input-password').type(password);
        cy.get('form > .btn').click();

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on 'Add to Cart' button on the Product displayed in the Search results
        cy.get('button').eq(10).click();

        //Click on 'Site Map' footer option 
        cy.get('footer').contains('Site Map').click();

        //Check that user is taken to Site Map page
        cy.get('#content > h1').contains('Site Map').should('be.visible');
        cy.get('.breadcrumb').contains('Site Map').should('be.visible');

        //Click on 'Shopping Cart' link in the displayed 'Site Map' page
        cy.get('#content').contains('Shopping Cart').should('be.visible').click();

        //Check that user is taken to the Shopping Cart page
        cy.get('#content > h1').contains('Shopping Cart').should('be.visible');
        cy.get('.breadcrumb').contains('Shopping Cart').should('be.visible');
    })

    it('Verify the Cart button when there are no products added to the Shopping Cart', () => {
        //TC_SC_004

        //Click on Cart button which is displayed in black color on the top of the page beside the search icon button
        cy.get('#cart > .btn').click();

        //'Your shopping cart is empty!' should be displayed
        cy.get('#cart > .dropdown-menu').contains('Your shopping cart is empty!').should('be.visible');
    })


    it('Verify navigating to Shopping Cart page using the View Cart option in the Cart block', () => {
        //TC_SC_005

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on 'Add to Cart' button on the Product displayed in the Search results
        cy.get('button').eq(9).click();

        //Click on Cart button which is displayed in black color on the top of the page beside the search icon button
        cy.get('#cart > .btn').click();

        //Click on 'View Cart' option in the displayed Cart block
        cy.get('#cart > .dropdown-menu').contains('View Cart').should('be.visible').click();

        //Check that user is navigated to the Shopping Cart page
        cy.get('#content > h1').contains('Shopping Cart').should('be.visible');
        cy.get('.breadcrumb').contains('Shopping Cart').should('be.visible');
    })

    it('Verify the weight of the Product in the Shopping Cart page', () => {
        //TC_SC_006

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Check the weight of the Prouduct is displayed on 'Shopping Cart' page
        cy.get('#content > h1').contains('5.00kg').should('be.visible');
    })


    it('Verify Image, Name, Model, Quantity, Unit Price and Total of the Product in the Shopping Cart page', () => {
        //TC_SC_007

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Check the Image, Name, Model, Quantity, Unit Price and Total of the Product in the displayed 'Shopping Cart' page
        cy.get('.img-thumbnail').should('be.visible');
        cy.get('.table-responsive').contains('iMac').should('be.visible');
        cy.get('.table-responsive').contains('Product 14').should('be.visible');
        cy.get('input[type=text]').eq(1).should('have.value', '1');
        cy.get('.table-responsive > .table > tbody > tr > :nth-child(5)').contains('$122.00').should('be.visible');
        cy.get('tbody > tr > :nth-child(6)').contains('$122.00').should('be.visible');
    })

    it('Verify updating the quantity of the Product in the Shopping Cart page', () => {
        //TC_SC_008

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Enter a new quantity into the 'Quantity' field of the Product in the displayed Shopping Cart page
        cy.get('input[type=text]').eq(1).clear().type('2');

        //Click on 'Update' icon option
        cy.get('button').eq(9).click();

        //Check that success message with text - ' Success: You have modified your shopping cart!' is displayed
        cy.get('.alert-success').contains(' Success: You have modified your shopping cart!').should('be.visible');
    })

    it('Verify updating the quantity of the Product in the Shopping Cart page to a negative or zero or a non-numerical value ', () => {
        //TC_SC_009
        //Test fails due to missing error message when entering invalid non-numeric value in the quantity field

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Enter a new quantity into the 'Quantity' field of the Product in the displayed Shopping Cart page
        cy.get('input[type=text]').eq(1).clear().type(-1);

        //Click on 'Update' icon option
        cy.get('button').eq(9).click();

        //Check that proper warning message is displayed informing the User to provide a positive numerical value
        cy.get('.alert').contains('Warning:').should('be.visible');
    })

    it('Verify removing the item from Shopping Cart page', () => {
        //TC_SC_010

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Remove' icon option
        cy.get('button').eq(10).click();

        //Check that 'Your shopping cart is empty!' is displayed
        cy.get('#content > p').contains('Your shopping cart is empty!').should('be.visible');
    })

    it('Verify Page Heading, Page Title and Page URL of Shopping Cart page', () => {
        //TC_SC_011

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Verify Page Heading, Page Title and Page URL of the dispalyed 'Shopping Cart' page
        cy.get('#content > h1').contains('Shopping Cart').should('be.visible');
        cy.title().should('eq', 'Shopping Cart');
        cy.url().should('contain', '/index.php?route=checkout/cart');
    })

    it('Verify Breadcrumb of Shopping Cart page', () => {
        //TC_SC_012


        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Check the Breadcrubm of the displayed 'Shopping Cart' page
        cy.get('.breadcrumb').contains('Shopping Cart').should('be.visible');
    })

    it('Verify Coupon code application in the Shopping Cart page by providing an invalid coupon code', () => {
        //TC_SC_014

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Use Coupon Code' section
        cy.get(':nth-child(1) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Enter any invalid Coupon code into the 'Enter your coupon here' text field
        cy.get('#input-coupon').type('XYZ');

        //Click on 'Apply Coupon' button
        cy.get('#button-coupon').click();

        //Check that Warning message with text - 'Warning: Coupon is either invalid, expired or reached its usage limit!' is displayed
        cy.get('.alert').contains(' Warning: Coupon is either invalid, expired or reached its usage limit!').should('be.visible');
    })

    it('Verify Coupon code functionality in the Shopping Cart page by not providing any coupon code ', () => {
        //TC_SC_017

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Use Coupon Code' section
        cy.get(':nth-child(1) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Click on 'Apply Coupon' button without entering any coupon code
        cy.get('#button-coupon').click();

        //Check that Warning message with text - 'Warning: Please enter a coupon code!' is displayed
        cy.get('.alert').contains(' Warning: Please enter a coupon code!').should('be.visible');

    })

    it('Verify Closing the Warning message in the Shopping Cart page', () => {
        //TC_SC_018

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Use Coupon Code' section
        cy.get(':nth-child(1) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Click on 'Apply Coupon' button without entering any coupon code
        cy.get('#button-coupon').click();

        //Check that Warning message with text - 'Warning: Please enter a coupon code!' is displayed
        cy.get('.alert').contains(' Warning: Please enter a coupon code!').should('be.visible');

        //Click on 'x' option on the displayed warning message
        cy.get('.close').click();

        //Check that Warning message dissappeared.
        cy.get('.alert').should('not.exist');
    })

    it('Verify Coupon code functionality in the Shopping Cart page is having Placeholder', () => {
        //TC_SC_019

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Use Coupon Code' section
        cy.get(':nth-child(1) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Check that Proper Place Holder text is displayed inside the text field.
        cy.get('input[name=coupon]').should('have.attr', 'placeholder', 'Enter your coupon here');
    })

    it('Verify Estimate Shipping and Taxes functionality in the Shopping Cart page by providing all mandatory fields', () => {
        //TC_SC_020

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Estimate Shipping & Taxes' section 
        cy.get(':nth-child(2) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Select any Country from the 'Country' dropdown field
        cy.get('#input-country').select('United States');

        //Select any State from the 'Region/State' field
        cy.get('#input-zone').select('California');

        //Click on 'Get Quotes' button
        cy.get('#button-quote').click();

        //Check that 'Please select the preferred shipping method to use on this order' dialog is displayed.  
        cy.get('.modal-content').should('be.visible');

        //Check that Flat Shipping Rate - $5.00 radio button is displayed in the displayed dialog and is not selected by default
        cy.get('.radio').should('be.visible').should('not.be.checked');

        //Select the radio button and Click on 'Apply Shipping' button
        cy.get('input[name=shipping_method').check();
        cy.get('#button-shipping').click();

        //Check that Success message with text - ' Success: Your shipping estimate has been applied!' is displayed
        cy.get('.alert-success').contains('Success: Your shipping estimate has been applied!').should('be.visible');

        //Check that Flat Shipping Rate is displayed and added to the Total Price
        cy.get('#content').contains('Flat Shipping Rate:').should('be.visible');
    })

    it('Verify Estimate Shipping and Taxes functionality in the Shopping Cart page by providing all the fields', () => {
        //TC_SC_021

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Estimate Shipping & Taxes' section 
        cy.get(':nth-child(2) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Select any Country from the 'Country' dropdown field
        cy.get('#input-country').select('United States');

        //Select any State from the 'Region/State' field
        cy.get('#input-zone').select('California');

        //Enter a post code on Post Code text field
        cy.get('#input-postcode').type('90007');

        //Click on 'Get Quotes' button
        cy.get('#button-quote').click();

        //Check that 'Please select the preferred shipping method to use on this order' dialog is displayed.  
        cy.get('.modal-content').should('be.visible');

        //Check that Flat Shipping Rate - $5.00 radio button is displayed in the displayed dialog and is not selected by default
        cy.get('.radio').should('be.visible').should('not.be.checked');

        //Select the radio button and Click on 'Apply Shipping' button
        cy.get('input[name=shipping_method').check();
        cy.get('#button-shipping').click();

        //Check that Success message with text - ' Success: Your shipping estimate has been applied!' is displayed
        cy.get('.alert-success').contains('Success: Your shipping estimate has been applied!').should('be.visible');

        //Check that Flat Shipping Rate is displayed and added to the Total Price
        cy.get('#content').contains('Flat Shipping Rate:').should('be.visible');
    })

    it('Verify Estimate Shipping and Taxes functionality in the Shopping Cart page by not providing anything', () => {
        //TC_SC_022

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Estimate Shipping & Taxes' section 
        cy.get(':nth-child(2) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Click on 'Get Quotes' button without enthering any data into the text fields
        cy.get('#button-quote').click();

        //Check that Field level messages with text - 'Please select a country!' and 'Please select a region / state!' is displayed under the respective mandatory fields
        cy.get('.form-horizontal').contains('Please select a region / state!').should('be.visible');
        cy.get('.form-horizontal').contains('Postcode must be between 2 and 10 characters!').should('be.visible');
    })

    it('Verify Estimate Shipping and Taxes functionality in the Shopping Cart page by not providing anything', () => {
        //TC_SC_023

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Estimate Shipping & Taxes' section 
        cy.get(':nth-child(2) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Select any Country from the 'Country' dropdown field
        cy.get('#input-country').select('United States');

        //Select any State from the 'Region/State' field
        cy.get('#input-zone').select('California');

        //Enter a post code on Post Code text field
        cy.get('#input-postcode').type('90007');

        //Click on 'Get Quotes' button
        cy.get('#button-quote').click();

        //Check that 'Please select the preferred shipping method to use on this order' dialog is displayed.  
        cy.get('.modal-content').should('be.visible');

        //Check that Flat Shipping Rate - $5.00 radio button is displayed in the displayed dialog and is not selected by default
        cy.get('.radio').should('be.visible').should('not.be.checked');

        //Select the radio button and Click on 'Cancel' button
        cy.get('input[name=shipping_method').check();
        cy.get('button').eq(11).click();

        //Check that Estimated Shipping & Taxes is not applied
        cy.get('#content > .row').contains('Flat Shipping Rate:').should('not.exist');
    })

    it('Verify Estimate Shipping and Taxes functionality in the Shopping Cart page for Placeholder', () => {
        //TC_SC_024

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Estimate Shipping & Taxes' section 
        cy.get(':nth-child(2) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Check that Proper Place Holder text should be displayed inside the Post Code text field.
        cy.get('input[name=postcode]').should('have.attr', 'placeholder', 'Post Code');
    })

    it('Verify Gift Certificate functionality in the Shopping Cart page by providing a invalid Gift Certificate', () => {
        //TC_SC_026

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Use Gift Cerrtificate' section
        cy.get(':nth-child(3) > .panel-heading > .panel-title > .accordion-toggle').click();

        // Enter any invalid Gift Certificate into the 'Enter your gift certificate code here' text field
        cy.get('#input-voucher').type('XYZ');

        //Click on 'Apply Gift Certificate' button
        cy.get('#button-voucher').click();

        //Check that Warning message with text - 'Warning: Gift Certificate is either invalid or the balance has been used up!' is displayed
        cy.get('.alert').contains('Warning: Gift Certificate is either invalid or the balance has been used up!').should('be.visible');
    })

    it('Verify Gift Certificate functionality in the Shopping Cart page by not providing any Gift Certificate', () => {
        //TC_SC_028

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Use Gift Cerrtificate' section
        cy.get(':nth-child(3) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Click on 'Apply Gift Certificate' button without entering any code
        cy.get('#button-voucher').click();

        //Check that Warning message with text - ' Warning: Please enter a gift certificate code!' is displayed
        cy.get('.alert').contains(' Warning: Please enter a gift certificate code!').should('be.visible');
    })

    it('Verify Gift Certificate functionality in the Shopping Cart page for Placeholder', () => {
        //TC_SC_029

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Use Gift Cerrtificate' section
        cy.get(':nth-child(3) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Check that  'Enter your gift certificate code here' text field has the proper Place Holder 
        cy.get('input[name=voucher]').should('have.attr', 'placeholder', 'Enter your gift certificate code here');
    })

    it('Continue shopping from the Shopping Cart page', () => {
        //TC_SC_031

        //visit the Homepage
        cy.visit(baseUrl);

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on the Product displayed in the Search results
        cy.get('.img-responsive').click();

        //Click on 'Add to Cart' button in the displayed 'Product Display' page
        cy.get('#button-cart').click();

        //Click on the 'shopping cart!' link in the displayed success message
        cy.get('.alert').contains('shopping cart').click();

        //Click on 'Estimate Shipping & Taxes' section 
        cy.get(':nth-child(2) > .panel-heading > .panel-title > .accordion-toggle').click();

        //Select any Country from the 'Country' dropdown field
        cy.get('#input-country').select('United States');

        //Select any State from the 'Region/State' field
        cy.get('#input-zone').select('California');

        //Enter a post code on Post Code text field
        cy.get('#input-postcode').type('90007');

        //Click on 'Get Quotes' button
        cy.get('#button-quote').click();

        //Check that 'Please select the preferred shipping method to use on this order' dialog is displayed.  
        cy.get('.modal-content').should('be.visible');

        //Check that Flat Shipping Rate - $5.00 radio button is displayed in the displayed dialog and is not selected by default
        cy.get('.radio').should('be.visible').should('not.be.checked');

        //Select the radio button and Click on 'Cancel' button
        cy.get('input[name=shipping_method').check();
        cy.get('button').eq(11).click();

        //Click on 'Continue Shopping' button
        cy.get('.pull-left > .btn').click();

        //Check that User is taken to 'Home' Page
        cy.get('h1 > a').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');
        cy.title().should('eq', 'Your Store');

    })
})