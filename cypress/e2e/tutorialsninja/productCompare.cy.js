/// <reference types="cypress" />hover


const { baseUrl } = Cypress.config();

describe('Product Compare', () => {




    it('Verify adding the product for comparision from Product Display Page', () => {
        //TC_PC_001

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
        cy.get('.product-thumb').click();

        //Hover the mouse cursor on 'Compare this Product' option from the displayed Product Display Page 
        cy.get('button').eq(12).trigger('mouseover');

        //Check that tool tip ith the text - 'Compare this Product' is displayed
        cy.contains('Compare this Product').should('be.visible');

        //Select 'Compare this Product' option 
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Click on 'product comparison' link from the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Check that User is taken to the 'Product Comparison' page with the details of the Product that we have added for comparision. 
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
        cy.get('.table').eq(2).contains('iMac').should('be.visible');
    })

    it('Verify adding the product for comparision from List View of Search Results page', () => {
        //TC_PC_002

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

        //Select to view the search results in 'List' view
        cy.get('#list-view').click();

        //Hover the mouse cursor on 'Compare this Product' option from the displayed Product Display Page 
        cy.get('button').eq(12).trigger('mouseover');

        //Check that tool tip ith the text - 'Compare this Product' is displayed
        cy.contains('Compare this Product').should('be.visible');

        //Select 'Compare this Product' option 
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Click on 'product comparison' link from the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Check that User is taken to the 'Product Comparison' page with the details of the Product that we have added for comparision. 
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
        cy.get('.table').eq(2).contains('iMac').should('be.visible');
    })


    it('Verify adding the product for comparision from Grid View of Search Results page', () => {
        //TC_PC_003

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

        //Select to view the search results in 'List' view
        cy.get('#grid-view').click();

        //Hover the mouse cursor on 'Compare this Product' option from the displayed Product Display Page 
        cy.get('button').eq(11).trigger('mouseover');

        //Check that tool tip ith the text - 'Compare this Product' is displayed
        cy.contains('Compare this Product').should('be.visible');

        //Select 'Compare this Product' option 
        cy.get('button').eq(11).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Click on 'product comparison' link from the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Check that User is taken to the 'Product Comparison' page with the details of the Product that we have added for comparision. 
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
        cy.get('.table').contains('iMac').should('be.visible');
    })

    it('Verify adding the product for comparision from List View of Product Category or Sub Category page', () => {
        //TC_PC_004

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

        //Click 'Desktops' and select 'Show All Desktops' option 
        cy.get('.collapse').contains('Desktops').click();
        cy.get('.dropdown-menu').contains('Show All Desktops').should('be.visible').click();

        //In the displayed 'Desktops' category page, select 'List' View option
        cy.get('#list-view').click();

        //Hover the mouse cursor on 'Compare this Product' option available on the Product that is displayed in the Product Category page 
        cy.get('button').eq(11).trigger('mouseover');

        //Check that tool tip with the text - 'Compare this Product' is displayed
        cy.contains('Compare this Product').should('be.visible');

        //Select 'Compare this Product' option and check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('button').eq(11).click();
        cy.get('.alert').contains('Success: You have added Apple Cinema 30" to your product comparison!').should('be.visible');

        //Click on 'product comparison' link from the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Check that User is taken to the 'Product Comparison' page with the details of the Product that we have added for comparision.
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
        cy.get('.table').contains('Apple Cinema 30"').should('be.visible');
    })


    it('Verify adding the product for comparision from Grid View of Product Category or Sub Category page', () => {
        //TC_PC_005

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

        //Click 'Desktops' and select 'Show All Desktops' option 
        cy.get('.collapse').contains('Desktops').click();
        cy.get('.dropdown-menu').contains('Show All Desktops').should('be.visible').click();

        //In the displayed 'Desktops' category page, select 'Grid' View option
        cy.get('#grid-view').click();

        //Hover the mouse cursor on 'Compare this Product' option available on the Product that is displayed in the Product Category page 
        cy.get('button').eq(11).trigger('mouseover');

        //Check that tool tip with the text - 'Compare this Product' is displayed
        cy.contains('Compare this Product').should('be.visible');

        //Select 'Compare this Product' option and check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('button').eq(11).click();
        cy.get('.alert').contains('Success: You have added Apple Cinema 30" to your product comparison!').should('be.visible');

        //Click on 'product comparison' link from the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Check that User is taken to the 'Product Comparison' page with the details of the Product that we have added for comparision.
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
        cy.get('.table').contains('Apple Cinema 30"').should('be.visible');

    })


    it('Verify adding the product for comparision from Related Product section on Product Display Page', () => {
        //TC_PC_006

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

        //Hover the mouse cursor on 'Compare this Product' option from the Related Products section of Product Display Page
        cy.get('button').eq(13).trigger('mouseover');

        //Check that tool tip with the text - 'Compare this Product' is displayed
        cy.contains('Compare this Product').should('be.visible');

        //Select 'Compare this Product' option
        cy.get('button').eq(13).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added Apple Cinema 30" to your product comparison!').should('be.visible');

        //Click on 'product comparison' link from the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Check that User is taken to the 'Product Comparison' page with the details of the Product that we have added for comparision.
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
        cy.get('.table').contains('Apple Cinema 30"').should('be.visible');

    })

    it('Verify adding the product for comparision from Featured  section on Home Page', () => {
        //TC_PC_007


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

        //Go to Home Page
        cy.get('h1 > a').click();


        //Hover the mouse cursor on 'Compare this Product' option from one of the Product displayed in the Featured section of Home Page
        cy.get('button').eq(9).trigger('mouseover');

        //Check that tool tip with the text - 'Compare this Product' is displayed
        cy.contains('Compare this Product').should('be.visible');

        //Select 'Compare this Product' option
        cy.get('button').eq(9).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added MacBook to your product comparison!').should('be.visible');

        //Click on 'product comparison' link from the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Check that User is taken to the 'Product Comparison' page with the details of the Product that we have added for comparision.
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
        cy.get('.table').contains('MacBook').should('be.visible');
    })

    it('Verify navigating to Product Compare page from Search results page', () => {
        //TC_PC_008

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

        //Go to Home Page
        cy.get('h1 > a').click();

        //Enter any existing Product name into the Search text box field and click Search button
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Click on 'Product Compare' link displayed in the Search Results page 
        cy.get('#compare-total').click();

        //Check that User is taken to 'Product Compare' page
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');

    })

    it('Verify navigating to Product Compare page from Product Category page', () => {
        //TC_PC_009

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

        //Go to Home Page
        cy.get('h1 > a').click();

        //Click 'Desktops' and select 'Show All Desktops' option 
        cy.get('.collapse').contains('Desktops').click();
        cy.get('.dropdown-menu').contains('Show All Desktops').should('be.visible').click();

        //In the displayed 'Desktops' category page, click on 'Product Compare' link
        cy.get('#compare-total').click();

        //Check that User is taken to 'Product Compare' page
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
    })


    it('Verify Product Compare page when no products are added for comparison', () => {
        //TC_PC_010

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

        //Go to Home Page
        cy.get('h1 > a').click();

        //Click 'Desktops' and select 'Show All Desktops' option 
        cy.get('.collapse').contains('Desktops').click();
        cy.get('.dropdown-menu').contains('Show All Desktops').should('be.visible').click();

        //In the displayed 'Desktops' category page, click on 'Product Compare' link
        cy.get('#compare-total').click();

        //Check that User is taken to 'Product Compare' page
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');

        //Check that 'You have not chosen any products to compare.' is displayed on the page
        cy.get('#content').contains('You have not chosen any products to compare.').should('be.visible');

    })

    it('Verify  the working of Continue button on the Product Compare page', () => {
        //TC_PC_011

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

        //Go to Home Page
        cy.get('h1 > a').click();

        //Click 'Desktops' and select 'Show All Desktops' option 
        cy.get('.collapse').contains('Desktops').click();
        cy.get('.dropdown-menu').contains('Show All Desktops').should('be.visible').click();

        //In the displayed 'Desktops' category page, click on 'Product Compare' link
        cy.get('#compare-total').click();

        //Check that User is taken to 'Product Compare' page
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');

        //Click the "Continue" button and check that user is navigated to the Home page
        cy.get('.pull-right > .btn').click();
        cy.get('h1').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');
    })

    it('Verify the Breadcrumb that is displayed on the Product Compare page', () => {
        //TC_PC_012

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

        //Go to Home Page
        cy.get('h1 > a').click();

        //Click 'Desktops' and select 'Show All Desktops' option 
        cy.get('.collapse').contains('Desktops').click();
        cy.get('.dropdown-menu').contains('Show All Desktops').should('be.visible').click();

        //In the displayed 'Desktops' category page, click on 'Product Compare' link
        cy.get('#compare-total').click();

        //Check that breadcrumb is visible and functional
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb > :nth-child(1) > a > .fa').click();

        //Check that user is navigated to the Home Page
        cy.get('.pull-right > .btn').click();
        cy.get('h1').contains('Your Store').should('be.visible');
        cy.url().should('contain', '/index.php?route=common/home');
    })

    it('Verify the success message which will be displayed after adding the Products for Comparison', () => {
        //TC_PC_013

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

        //Select 'Compare this Product' option from the displayed Product Display Page
        cy.get('button').eq(9).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Click on the 'Product Name' link in the displayed success message
        cy.get('.alert').contains('iMac').click();

        //Check that User is navigated to the respective Product Display Page
        cy.get('.col-sm-4 > h1').contains('iMac').should('be.visible');
        cy.get('.breadcrumb').contains('iMac').should('be.visible');

        //Click the Product Compare button
        cy.get('button').eq(9).click();

        //Click on the 'Product Comparison' link in the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Check that user is taken to 'Product Comparison' page
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
    })

    it('Verify the Product Comparison page when only one producted is added to the page for comparison', () => {
        //TC_PC_014

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

        //Select 'Compare this Product' option from the displayed Product Display Page
        cy.get('button').eq(9).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Click on the 'Product Comparison' link in the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Verify that a single product is displayed in the 'Product Comparison' page with all the proper product details and the buttons (Add to Cart and Remove buttons)
        cy.get('.img-thumbnail').should('be.visible').should('have.length', 1);
        cy.get('.btn-primary').should('be.visible').should('have.length', 1);
        cy.get('.btn-danger').should('be.visible').should('have.length', 1);
    })

    it('Verify the Product Comparison page when only two products are added to the page for comparison', () => {
        //TC_PC_015

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

        //Select 'Compare this Product'option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Enter any other existing Product name into the Search text box field and click the SEarch button
        cy.get('#search > .form-control').clear().type('iPhone');
        cy.get('.input-group-btn > .btn').click();

        // Select 'Compare this Product' option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iPhone to your product comparison!').should('be.visible');

        // Click on the 'Product Comparison' link in the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Verify that two products are displayed in the 'Product Comparison' page with all the proper product details and the buttons (Add to Cart and Remove buttons)
        cy.get('.img-thumbnail').should('be.visible').should('have.length', 3);
        cy.get('.btn-primary').should('be.visible').should('have.length', 2);
        cy.get('.btn-danger').should('be.visible').should('have.length', 3);
    })

    it('Verify the Product Comparison page when the same product is added twice to the page for comparison', () => {
        //TC_PC_016

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

        //Select 'Compare this Product'option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Enter the same Product name into the Search text box field  and click the SEarch button
        cy.get('#search > .form-control').clear().type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Select 'Compare this Product'option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Click on the 'Product Comparison' link in the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Verify that the product shoud be displayed in the 'Product Comparison' page only one time with all the proper product details and the buttons (Add to Cart and Remove buttons) 
        cy.get('.img-thumbnail').should('be.visible').should('have.length', 2);
        cy.get('.btn-primary').should('be.visible').should('have.length', 1);
        cy.get('.btn-danger').should('be.visible').should('have.length', 2);
    })

    it('Verify the Product Comparison page when three products are added to the page for comparison', () => {
        //TC_PC_017

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

        //Select 'Compare this Product'option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Enter any other existing Product name into the Search text box field and click the SEarch button
        cy.get('#search > .form-control').clear().type('iPhone');
        cy.get('.input-group-btn > .btn').click();

        // Select 'Compare this Product' option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iPhone to your product comparison!').should('be.visible');

        //Enter any other existing Product name into the Search text box field and click the SEarch button
        cy.get('#search > .form-control').clear().type('MacBook Air');
        cy.get('.input-group-btn > .btn').click();

        // Select 'Compare this Product' option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Click on the 'Product Comparison' link in the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Verify that three products are displayed in the Product Comparison page with all the proper product details and the buttons (Add to Cart and Remove buttons)
        cy.get('.img-thumbnail').should('be.visible').should('have.length', 4);
        cy.get('.btn-primary').should('be.visible').should('have.length', 3);
        cy.get('.btn-danger').should('be.visible').should('have.length', 4);
    })

    it('Verify the Product Comparison page when four products are added to the page for comparison', () => {
        //TC_PC_018

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

        //Select 'Compare this Product'option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Enter any other existing Product name into the Search text box field and click the SEarch button
        cy.get('#search > .form-control').clear().type('iPhone');
        cy.get('.input-group-btn > .btn').click();

        // Select 'Compare this Product' option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iPhone to your product comparison!').should('be.visible');

        //Enter any other existing Product name into the Search text box field and click the SEarch button
        cy.get('#search > .form-control').clear().type('MacBook Air');
        cy.get('.input-group-btn > .btn').click();

        // Select 'Compare this Product' option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Enter any other existing Product name into the Search text box field and click the SEarch button
        cy.get('#search > .form-control').clear().type('MacBook');
        cy.get('.input-group-btn > .btn').click();

        // Select 'Compare this Product' option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Click on the 'Product Comparison' link in the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Verify that four products are displayed in the Product Comparison page with all the proper product details and the buttons (Add to Cart and Remove buttons)
        cy.get('.img-thumbnail').should('be.visible').should('have.length', 5);
        cy.get('.btn-primary').should('be.visible').should('have.length', 4);
        cy.get('.btn-danger').should('be.visible').should('have.length', 5);
    })

    it('Verify that more than 4 products cannot be added to the Product Comparison page', () => {
        //TC_PC_019

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

        //Select 'Compare this Product'option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Enter any other existing Product name into the Search text box field and click the SEarch button
        cy.get('#search > .form-control').clear().type('iPhone');
        cy.get('.input-group-btn > .btn').click();

        // Select 'Compare this Product' option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iPhone to your product comparison!').should('be.visible');

        //Enter any other existing Product name into the Search text box field and click the SEarch button
        cy.get('#search > .form-control').clear().type('MacBook Air');
        cy.get('.input-group-btn > .btn').click();

        // Select 'Compare this Product' option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Enter any other existing Product name into the Search text box field and click the SEarch button
        cy.get('#search > .form-control').clear().type('MacBook');
        cy.get('.input-group-btn > .btn').click();

        // Select 'Compare this Product' option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Enter any other existing Product name into the Search text box field and click the SEarch button
        cy.get('#search > .form-control').clear().type('MacBook Pro');
        cy.get('.input-group-btn > .btn').click();

        // Select 'Compare this Product' option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Click on the 'Product Comparison' link in the displayed success message
        cy.get('.alert').contains('product comparison').click();

        // Verify that lastest four products (Second Product Name to Fifth Product Name) are displayed in 
        //the 'Product Comparison' page with all the proper product details and the buttons (Add to Cart and Remove buttons)
        // and the First added Product is automatically removed from the 'Product Comparison' page as it allows only four products for comparision.
        cy.get('.img-thumbnail').should('be.visible').should('have.length', 5);
        cy.get('.btn-primary').should('be.visible').should('have.length', 4);
        cy.get('.btn-danger').should('be.visible').should('have.length', 5);
    })

    it('Verify adding the Products to cart from the Product Comparison page', () => {
        //TC_PC_020  

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

        //Select 'Compare this Product'option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Click on the 'Product Comparison' link in the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Click on 'Add to Cart' button of the Product from the 'Product Comparison' page
        cy.get('.btn-primary').click();

        //Verify that the products are successfully added to the 'Shopping Cart' page from the 'Product Compare' page.
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');
    }) 

    it('Verify removing the Products from the Product Comparison page', () => {
        //TC_PC_021  

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

        //Select 'Compare this Product'option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Click on the 'Product Comparison' link in the displayed success message
        cy.get('.alert').contains('product comparison').click();

        //Click on 'Remove' button of the Products from the 'Product Comparison' page
        cy.get(':nth-child(2) > .btn-danger').click();

        //Check that item was removed from 'Product Comparison' page
        cy.get('.alert').contains('Success: You have modified your product comparison!').should('be.visible')
        cy.get('#content > p').contains('You have not chosen any products to compare.').should('be.visible')
    })

    it('Verify Page Title, Page Heading and Page URL of the Product Comparison page', () => {
        //TC_PC_022 

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

        //Select 'Compare this Product'option on the Product that is displayed in the search results
        cy.get('button').eq(12).click();

        //Check that Success message with text - ' Success: You have added Product Name to your product comparison!' is displayed
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Click on the 'Product Comparison' link in the displayed success message
        cy.get('.alert').contains('product comparison').click();

       //Check that proper Page Heading is displayed
       cy.get('h1').eq(1).contains('Product Comparison').should('be.visible');

       //Check that proper Page Title is displayed
       cy.title().should('eq', 'Product Comparison');

       //Check that proper URL is displayed
       cy.url().should('contain', '/index.php?route=product/compare');


})

})