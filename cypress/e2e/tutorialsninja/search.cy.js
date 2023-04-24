/// <reference types="cypress" />


const { baseUrl } = Cypress.config();

describe('Search', () => {

    beforeEach(() => {
        //Clear cookies and session storage
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();
    })

    it.skip('Verify searching with an existing Product Name', () => {
        //TC_SF_001

        //visit the Homepage
        cy.visit(baseUrl);

        //Type iMac in the Search input field
        cy.get('input[name=search]').type('iMac');
        cy.get('input[name=search]').should('have.value', 'iMac');
        cy.get('.input-group-btn > .btn').click();

        //Verify that the user is shown the results page 
        cy.get('#content > h1').contains('iMac').should('be.visible');
        cy.get('#input-search').should('have.value', 'iMac');
        cy.get('.product-thumb').contains('iMac').should('be.visible');

    })

    it.skip('Verify searching with a non existing Product Name', () => {
        //TC_SF_002

        //visit the Homepage
        cy.visit(baseUrl);

        //Type Fitbit in the Search input field
        cy.get('input[name=search]').type('Fitbit');
        cy.get('input[name=search]').should('have.value', 'Fitbit');
        cy.get('.input-group-btn > .btn').click();

        //Check that a warning message is displayed
        cy.get('#content > :nth-child(7)').contains('There is no product that matches the search criteria.').should('be.visible');

    })

    it.skip('Verify searching without providing any Product Name', () => {
        //TC_SF_003

        //visit the Homepage
        cy.visit(baseUrl);

        //Press searching button without providing any Product Name
        cy.get('.input-group-btn > .btn').click();

        //Check that a warning message is displayed
        cy.get('#content > :nth-child(7)').contains('There is no product that matches the search criteria.').should('be.visible');
    })

    it.skip('Verify searching for a product after login to the Application', () => {
        //TC_SF_004

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on "My Account" dropmenu
        cy.get('.caret').click();

        //Click on "Login" option
        cy.get('.dropdown-menu > :nth-child(2) > a').click();

        //Verify redirect to the login page
        cy.url().should('contain', '/index.php?route=account/login');
        cy.get(':nth-child(2) > .well > h2').contains('Returning Customer').should('be.visible');

        //Type in the login details and click Login button
        cy.get('#input-email').type('bunductesteaza+1@gmail.com');
        cy.get('#input-password').type('123456789');
        cy.get('form > .btn').click();

        //Verify successfull login and redirect to My Account page
        cy.get('#content > :nth-child(1)').contains('My Account').should('be.visible');

        //Type iMac in the Search input field
        cy.get('input[name=search]').type('iMac');
        cy.get('input[name=search]').should('have.value', 'iMac');
        cy.get('.input-group-btn > .btn').click();

        //Verify that the user is shown the results page 
        cy.get('#content > h1').contains('iMac').should('be.visible');
        cy.get('#input-search').should('have.value', 'iMac');
        cy.get('.product-thumb').contains('iMac').should('be.visible');
    })

    it.skip('Verify searching by providing a search criteria which results in multiple products', () => {
        //TC_SF_005

        //visit the Homepage
        cy.visit(baseUrl);

        //Type Mac in the Search input field
        cy.get('input[name=search]').type('Mac');
        cy.get('input[name=search]').should('have.value', 'Mac');
        cy.get('.input-group-btn > .btn').click();

        //Verify that the user is shown multiple results
        cy.get('#content > h1').contains('Mac').should('be.visible');
        cy.get('#input-search').should('have.value', 'Mac');
        cy.get(':nth-child(1) > .product-thumb').contains('Mac').should('be.visible');
        cy.get('#content > :nth-child(8) > :nth-child(2)').contains('Mac').should('be.visible');
    })

    it.skip('Verify all the fields in the Search functionality and Search page have placeholders', () => {
        //TC_SF_006

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button without entering any text into the search text box field
        cy.get('.input-group-btn > .btn').click();

        //Check that Proper placeholder text is displayed in the Search text box field and Search Criteria text box field
        cy.get('#search > .form-control').should('have.attr', 'placeholder', 'Search');
        cy.get('#input-search').should('have.attr', 'placeholder', 'Keywords');
    })

    it.skip('Verify searching using Search Criteria field', () => {
        //TC_SF_007

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button without entering any text into the search text box field
        cy.get('.input-group-btn > .btn').click();

        //Enter any existing product name into the 'Search Criteria' text box field and click Search button
        cy.get('#input-search').type('iMac');
        cy.get('#button-search').click();

        //Check that searched product is displayed in the search results
        cy.get('#content > h1').contains('iMac').should('be.visible');
        cy.get('#input-search').should('have.value', 'iMac');
        cy.get('.product-thumb').contains('iMac').should('be.visible');
    })

    it.skip('Verify Search using the text from the product description', () => {
        //TC_SF_008

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button without entering any text into the search text box field
        cy.get('.input-group-btn > .btn').click();

        // Enter any text from the Product Description into the 'Search Criteria' text box field
        cy.get('#input-search').type('Intel Core 2');

        //Select 'Search in product descriptions' checkbox option
        cy.get('#description').click();

        //Click on 'Search' button
        cy.get('#button-search').click();

        //Verify that the user is shown multiple results
        cy.get('#content > :nth-child(8)').contains('Intel Core 2').should('be.visible');

    })


    it.skip('Verify Search by selecting the correct category of product', () => {
        //TC_SF_009

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button without entering any text into the search text box field
        cy.get('.input-group-btn > .btn').click();

        // Enter iMac the Product Description into the 'Search Criteria' text box field and choose Mac from the Ctegory dropdown option
        cy.get('#input-search').type('iMac');
        cy.get(':nth-child(2) > .form-control').select('Mac');

        //Click on 'Search' button
        cy.get('#button-search').click();

        //Check that product is successfully displayed in the search results.
        cy.get('#content > :nth-child(8)').contains('Mac').should('be.visible');

    })

    it.skip('Verify Search by selecting the wrong category of product', () => {
        //TC_SF_009

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button without entering any text into the search text box field
        cy.get('.input-group-btn > .btn').click();

        // Enter iMac the Product Description into the 'Search Criteria' text box field and choose PC from the Ctegory dropdown option
        cy.get('#input-search').type('iMac');
        cy.get(':nth-child(2) > .form-control').select('PC');

        //Click on 'Search' button
        cy.get('#button-search').click();

        //Check that a warning message is displayed
        cy.get('#content').contains('There is no product that matches the search criteria.').should('be.visible');
    })

    it.skip('Verify Search by selecting  to search in subcategories', () => {
        //TC_SF_010

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button without entering any text into the search text box field
        cy.get('.input-group-btn > .btn').click();

        // Enter iMac the Product Description into the 'Search Criteria' text box field and choose Desktop from the Category dropdown option
        cy.get('#input-search').type('iMac');
        cy.get(':nth-child(2) > .form-control').select('Desktops');

        //Click on 'Search' button
        cy.get('#button-search').click();

        //Check that a warning message is displayed
        cy.get('#content').contains('There is no product that matches the search criteria.').should('be.visible');

        //Select 'Search in subcategories' checkbox field
        cy.get(':nth-child(3) > .checkbox-inline > input').click();

        //Click on 'Search' button
        cy.get('#button-search').click();

        //Searched product should be displayed in the search results
        cy.get('#content > :nth-child(8)').contains('Mac').should('be.visible');
    })


    it.skip('Verify List and Grid views when only one Product is displayed in the search results', () => {
        //TC_SF_011

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button after entering any text into the search text box field
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Select 'List' option
        cy.get('#list-view').click();

        //Single product should be dislayed in the List view without any problems and all the options are working 

        //Add to Cart
        cy.get('.product-layout').contains('iMac').should('be.visible');
        cy.get('button').eq(9).click();
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');
        //Wish List  
        cy.get('#list-view').click();
        cy.get('button').eq(12).click();
        cy.get('.alert').contains('You must login or create an account to save iMac to your wish list!').should('be.visible');
        //Compare Product
        cy.get('button').eq(13).click();
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Click the image of the product 
        cy.get('.img-responsive').click();

        //Check that User is navigated to the Product Display Page of the product
        cy.get('#content > :nth-child(1) > .col-sm-4').contains('iMac').should('be.visible');
        cy.url().should('contain', '/product&product_id=41&search=iMac');

        //Go back to the Search page using browser back function
        cy.go('back');

        //Click the name of the product 
        cy.get('h4').contains('iMac').click();

        //Check that User is navigated to the Product Display Page of the product
        cy.get('#content > :nth-child(1) > .col-sm-4').contains('iMac').should('be.visible');
        cy.url().should('contain', '/product&product_id=41&search=iMac');

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button after entering any text into the search text box field
        cy.get('.form-control').type('iMac');
        cy.get('.input-group-btn > .btn').click();

        //Select 'Grid' option
        cy.get('#grid-view').click();

        //Single product should be dislayed in the List view without any problems and all the options are working 

        //Add to Cart
        cy.get('.product-layout').contains('iMac').should('be.visible');
        cy.get('button').eq(10).click();
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');
        //Wish List  
        cy.get('button').eq(11).click();
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');
        //Compare Product
        cy.get('button').eq(13).click();
        cy.get('.alert').contains('Success: You have added iMac to your product comparison!').should('be.visible');

        //Check that single product is dislayed in the grid view
        cy.get('.product-thumb').contains('iMac').should('be.visible');
        cy.url().should('contain', '?route=product/search&search=iMac');

        //Click on the Image of the Product 
        cy.get('.img-responsive').click();

        //Check that user is navigated to the Product Display Page of the product
        cy.get('h1').contains('iMac').should('be.visible');
        cy.url().should('contain', '/product&product_id=41&search=iMac');

        //Go back to the Search page using browser back function
        cy.go('back');

        //Click the name of the Product
        cy.get('h4').contains('iMac').click();

        //Check that user is navigated to the Product Display Page of the product
        cy.get('h1').contains('iMac').should('be.visible');
        cy.url().should('contain', '/product&product_id=41&search=iMac');
    })

    it.skip('Verify List and Grid views when  multiple Products are displayed in the search results', () => {
        //TC_SF_012

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button after entering any text into the search text box field
        cy.get('.form-control').type('Mac');
        cy.get('.input-group-btn > .btn').click();

        //Click on 'Search' button
        cy.get('#button-search').click();

        //Check that 4 products are displayed in the search results page
        cy.get('.product-thumb').should('have.length', 4).and('be.visible');
        cy.get('.text-right').contains('Showing 1 to 4 of 4 (1 Pages)').should('be.visible');

        //Select 'List' option
        cy.get('#list-view').click();

        //Verify that List option is activated
        cy.get('#list-view').should('have.attr', 'class', 'btn btn-default active');

        //Check that Add to Cart, Wish List and Compare Product buttons are working
        //Add to cart first product and check confirmation message
        cy.get('button').eq(9).scrollIntoView().click();
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');

        //Add to wishlist second product and check warning message
        cy.get('button').eq(14).scrollIntoView().click();
        cy.get('.alert').contains(' You must login or create an account to save MacBook to your wish list!').should('be.visible');

        //Add to Compare third and check success message
        cy.get('button').eq(19).scrollIntoView().click();
        cy.get('.alert').contains('Success: You have added MacBook Air to your product comparison!').should('be.visible');

        //Select 'List' option
        cy.get('#grid-view').click();

        //Verify that Grid option is activated
        cy.get('#grid-view').should('have.attr', 'class', 'btn btn-default active');

        //Check that Add to Cart, Wish List and Compare Product buttons are working
        //Add to cart first product and check confirmation message
        cy.get('button').eq(11).scrollIntoView().click();
        cy.get('.alert').contains('Success: You have added iMac to your shopping cart!').should('be.visible');

        //Add to wishlist second product and check warning message
        cy.get('button').eq(15).scrollIntoView().click();
        cy.get('.alert').contains(' You must login or create an account to save MacBook to your wish list!').should('be.visible');


        //Add to Compare third and check success message
        cy.get('button').eq(19).scrollIntoView().click();
        cy.get('.alert').contains('Success: You have added MacBook Air to your product comparison!').should('be.visible');

        //Click on the Image of the Product 
        cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').click();

        //Check that user is navigated to the Product Display Page of the product
        cy.get('h1').contains('Mac').should('be.visible');
        cy.url().should('contain', 'product/product&product_id=41&search=Mac');

        //Go back to the Search page using browser back function
        cy.go('back');

        //Click the name of the Product
        cy.get('h4').contains('Mac').click();

        //Check that user is navigated to the Product Display Page of the product
        cy.get('h1').contains('Mac').should('be.visible');
        cy.url().should('contain', 'product/product&product_id=41&search=Mac');
    })


    it.skip('Verify navigating to Product Compare Page from Search Results page', () => {
        //TC_SF_013

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button after entering any text into the search text box field
        cy.get('.form-control').type('Mac');
        cy.get('.input-group-btn > .btn').click();

        //Click on 'Search' button
        cy.get('#button-search').click();

        //Click the compare button from the first product element box
        cy.get('button').eq(20).scrollIntoView().click();

        //Click on Product compare link from the succes message
        cy.get('.alert > [href="http://tutorialsninja.com/demo/index.php?route=product/compare"]').click();

        //Check that user is navigated to the Product Comparision page
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
    })

    it.skip('Verify User is able to sort the Products displayed in the Search Results', () => {
        //TC_SF_014

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button after entering any text into the search text box field
        cy.get('.form-control').type('Mac');
        cy.get('.input-group-btn > .btn').click();

        //Click on 'Search' button
        cy.get('#button-search').click();

        //Check that 4 products are displayed in the search results page
        cy.get('.product-thumb').should('have.length', 4).and('be.visible');
        cy.get('.text-right').contains('Showing 1 to 4 of 4 (1 Pages)').should('be.visible');

        //Click the Sort By button and select Name(A-Z) option from the dropdown 
        cy.get('#input-sort').select('Name (A - Z)');

        //Check that the items are sorted alphabetically
        cy.get('.product-thumb').eq(0).contains('iMac').should('be.visible');
        cy.get('.product-thumb').eq(1).contains('MacBook').should('be.visible');
        cy.get('.product-thumb').eq(2).contains('MacBook Air').should('be.visible');
        cy.get('.product-thumb').eq(3).contains('MacBook Pro').should('be.visible');

        //Click the Sort By button and select Name(Z-A) option from the dropdown 
        cy.get('#input-sort').select('Name (Z - A)');

        //Check that items are sorted alphabetically (Z-A)
        cy.get('.product-thumb').eq(0).contains('MacBook Pro').should('be.visible');
        cy.get('.product-thumb').eq(1).contains('MacBook Air').should('be.visible');
        cy.get('.product-thumb').eq(2).contains('MacBook').should('be.visible');
        cy.get('.product-thumb').eq(3).contains('iMac').should('be.visible');

        //Click the Sort By button and select Price(Low>High) option from the dropdown
        cy.get('#input-sort').select('Price (Low > High)');

        //Check that items are sorted by Price(Low>High)
        cy.get('.product-thumb').eq(0).contains('$122.00').should('be.visible');
        cy.get('.product-thumb').eq(1).contains('$602.00').should('be.visible');
        cy.get('.product-thumb').eq(2).contains('$1,202.00').should('be.visible');
        cy.get('.product-thumb').eq(3).contains('$2,000.00').should('be.visible');

        //Click the Sort By button and select Price(High>Low) option from the dropdown
        cy.get('#input-sort').select('Price (High > Low)');

        //Check that items are sorted by Price(High>Low)
        cy.get('.product-thumb').eq(0).contains('$2,000.00').should('be.visible');
        cy.get('.product-thumb').eq(1).contains('$1,202.00').should('be.visible');
        cy.get('.product-thumb').eq(2).contains('$602.00').should('be.visible');
        cy.get('.product-thumb').eq(3).contains('$122.00').should('be.visible');
    })


    it.skip('Verify the User can select how many products can be displayed in the Search Results', () => {
        //TC_SF_015

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the search button after entering any text into the search text box field
        cy.get('.form-control').type('Mac');
        cy.get('.input-group-btn > .btn').click();

        //Click on 'Search' button
        cy.get('#button-search').click();

        //Check that 4 products are displayed in the search results page
        cy.get('.product-thumb').should('have.length', 4).and('be.visible');
        cy.get('.text-right').contains('Showing 1 to 4 of 4 (1 Pages)').should('be.visible');

        //Select the number of Products to be displayed from the 'Show' dropdown
        cy.get('#input-limit').select('75');

        //Check that selected number of products should be displayed in the current search page
        cy.get('.col-md-3.col-xs-6').contains('75').should('be.visible');
        cy.url().should('contain', 'limit=75');

        //Select the number of Products to be displayed from the 'Show' dropdown
        cy.get('#input-limit').select('50');

        //Check that selected number of products should be displayed in the current search page
        cy.get('.col-md-3.col-xs-6').contains('50').should('be.visible');
        cy.url().should('contain', 'limit=50');

    })

    it.skip('Verify Search textbox field and the button having search icon are displayed on all the page of the Application', () => {
        //TC_SF_016

        //visit the Homepage
        cy.visit(baseUrl);

        //Check that search box field and search button are displayed on every page of the Application
        cy.get('.form-control').should('be.visible');
        cy.get('.input-group-btn > .btn').should('be.visible');

        //Click the Tablets option and Check that search box field and search button are displayed on every page of the Application
        cy.get('.nav > :nth-child(4) > a').click();
        cy.get('.form-control').should('be.visible');
        cy.get('.input-group-btn > .btn').should('be.visible');

        //Click the Cameras option and Check that search box field and search button are displayed on every page of the Application
        cy.get(':nth-child(7) > a').click();
        cy.get('.form-control').should('be.visible');
        cy.get('.input-group-btn > .btn').should('be.visible');


        //Click the About Us and Check that search box field and search button are displayed on every page of the Application
        cy.get('.row > :nth-child(1) > .list-unstyled > :nth-child(1) > a').click();
        cy.get('.form-control').should('be.visible');
        cy.get('.input-group-btn > .btn').should('be.visible');
    })

    it.skip('Verify navigating to Search page from the Site Map page', () => {
        //TC_SF_017

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the Site Map option
        cy.get('footer').contains('Site Map').click();

        //Check that page is redirected to the Site Map
        cy.get('h1').contains('Site Map').should('be.visible');
        cy.get('.breadcrumb').contains('Site Map').should('be.visible');
        cy.url().should('contain', 'information/sitemap');

        //Click the 'Search' link from the 'Site Map' page
        cy.get('#information-sitemap').contains('Search').click();

        //Check that  User is navigated to 'Search' page
        cy.get('#content > h1').contains('Search').should('be.visible');
        cy.get('.breadcrumb').contains('Search').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/search');
    })

    it.skip('Verify Breadcrumb of the Search page', () => {
        //TC_SF_018

        //visit the Homepage
        cy.visit(baseUrl);

        //Enter "iMac" into the 'Search' text box field and click Search button
        cy.get('.form-control').type('iMac')
        cy.get('.input-group-btn > .btn').click();

        //Check the Breadcrumb of the Page
        cy.get('.breadcrumb').should('contain', 'Search').should('be.visible');
    })

    it('Verify Breadcrumb of the Search page', () => {
        //TC_SF_020

        //visit the Homepage
        cy.visit(baseUrl);

        //Enter "iMac" into the 'Search' text box field and click Search button
        cy.get('.form-control').type('iMac')
        cy.get('.input-group-btn > .btn').click();

        //Check the Page Heading, Page URL and Page Title of the 'Search' page
        cy.get('h1 > a').should('contain', 'Your Store').should('be.visible');
        cy.get('#content > h1').should('contain', 'Search - iMac').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/search&search=iMac');
        cy.title().should('eq', 'Search - iMac');
    })
})