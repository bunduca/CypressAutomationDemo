/// <reference types="cypress" />

const { baseUrl } = Cypress.config();


import nopCommerceUserDetails from "../../fixtures/nopCommerceUserDetails.json"
const { email, password, emailPrefix, emailDomain } = nopCommerceUserDetails



describe('Log In', () => {


    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.viewport(1920, 1080);
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })

    it('Verify searching with an existing Product Name', () => {

        //Enter any existing product name into the 'Search' text box field
        cy.get('#small-searchterms').type('pride and prejudice');

        //Click on the search button 
        cy.get('.button-1').contains('Search').should('be.visible').click();

        //Check that searched product is diplayed  in the search results
        cy.get('.item-grid').contains('Pride and Prejudice').should('be.visible')

    })

    it('Verify searching with a non existing Product Name', () => {

        //Enter any non existing product name into the 'Search' text box field
        cy.get('#small-searchterms').type('atomic habits');

        //Click on the search button 
        cy.get('.button-1').contains('Search').should('be.visible').click();

        //Check that "No products were found that matched your criteria." message is displayed
        cy.get('.no-result').contains('No products were found that matched your criteria.').should('be.visible');
    })

    it('Verify searching without providing any Product Name', () => {

        // Don't enter anything into the 'Search' text box field and Click on the button having search icon
        cy.get('.button-1').contains('Search').should('be.visible').click();

        //Check that error message is displayed
        cy.get('.warning').contains('Search term minimum length is 3 characters').should('be.visible');
    })

    it('Verify searching for a product after login to the Application', () => {

        //Log in into application
        cy.login(email, password);

        //Enter any existing product name into the 'Search' text box field
        cy.get('#small-searchterms').type('pride and prejudice');

        //Click on the search button 
        cy.get('.button-1').contains('Search').should('be.visible').click();

        //Check that searched product is diplayed  in the search results
        cy.get('.item-grid').contains('Pride and Prejudice').should('be.visible')
    })

    it('Verify searching by providing a search criteria which results in mulitple products', () => {

        //Enter the search criteria in the 'Search' text box field which can result in mutliple products 
        cy.get('#small-searchterms').type('Apple');

        //Click on the search button 
        cy.get('.button-1').contains('Search').should('be.visible').click();

        //Check that more than one product is displayed
        cy.get('.product-item').should('be.visible').and('have.length', 2);

    })

    it('Verify List and Grid views when only one Product is displayed in the search results', () => {

        //Enter any existing product name into the 'Search' text box field
        cy.get('#small-searchterms').type('pride and prejudice');

        //Click on the search button 
        cy.get('.button-1').contains('Search').should('be.visible').click();

        //Check that searched product is diplayed  in the search results
        cy.get('.item-grid').contains('Pride and Prejudice').should('be.visible')

        // Select 'List' option
        cy.get('.product-viewmode > .list').click();
        cy.get('.product-viewmode > .list').click();//workaround for click action not working properly on the website

        //Check that product display is in list mode
        cy.url().should('contain', '?viewmode=list');

        //Select 'Grid' option
        cy.get('.product-viewmode > .grid').click();
        cy.get('.product-viewmode > .grid').click();//workaround for click action not working properly on the website


        //Check that product display is in grid mode
        cy.url().should('contain', '?viewmode=grid');

    })


    it('Verify List and Grid views when  multiple Products are displayed in the search results', {
        retries: {
            runMode: 2,
            openMode: 2,
        },
    },
        () => {

            //Enter any existing product name into the 'Search' text box field
            cy.get('#small-searchterms').type('apple');

            //Click on the search button 
            cy.get('.button-1').contains('Search').should('be.visible').click();

            //Check that searched product is diplayed  in the search results
            cy.get('.item-grid').contains('Apple').should('be.visible')

            //Select 'List' option
            cy.get('.product-viewmode > .list').click();
            cy.get('.product-viewmode > .list').click();//workaround for click action not working properly on the website

            //Check that product display is in list mode
            cy.url().should('contain', 'viewmode=list');

            //Select 'Grid' option
            cy.get('.product-viewmode > .grid').click();
            cy.get('.product-viewmode > .grid').click();//workaround for click action not working properly on the website


            //Check that product display is in grid mode
            cy.url().should('contain', 'viewmode=grid');
        })

    it('Verify navigating to Product Compare Page from Search Results page', () => {

        //Enter any existing product name into the 'Search' text box field
        cy.get('#small-searchterms').type('pride and prejudice');

        //Click on the search button 
        cy.get('.button-1').contains('Search').should('be.visible').click();

        //Check that searched product is diplayed  in the search results
        cy.get('.item-grid').contains('Pride and Prejudice').should('be.visible');

        //Click the product compare button
        cy.get('.add-to-compare-list-button').click();
        cy.get('.add-to-compare-list-button').click();//workaround for click action not working properly on the website

        //Check that product is succesfully added to product comparision
        cy.get('.content').contains('The product has been added to your product comparison').should('be.visible');

        //Click the product comparision link  from the green notification bar
        cy.get('.content').contains('product comparison').click();

        //Check that user is redirected to the Compare Products page
        cy.url().should('contain', '/compareproducts');
        cy.get('h1').contains('Compare products');
    })

    it('Verify User is able to sort the Products displayed in the Search Results', () => {

        //Enter the search criteria in the 'Search' text box field which can result in mutliple products
        cy.get('#small-searchterms').type('apple');

        //Click on the search button 
        cy.get('.button-1').contains('Search').should('be.visible').click();

        //Check that searched product is diplayed  in the search results
        cy.get('.item-grid').contains('Apple').should('be.visible')

        //Select serveral options from the 'Sort By' dropdown and check that products are sorted
        cy.get('#products-orderby').select('Created on');
        cy.get('.product-selectors').contains('Created on').should('be.visible');

        cy.get('#products-orderby').select('Name: A to Z');
        cy.get('.product-selectors').contains('Name: A to Z').should('be.visible');

        cy.get('#products-orderby').select('Name: Z to A');
        cy.get('.product-selectors').contains('Name: Z to A').should('be.visible');

        cy.get('#products-orderby').select('Price: Low to High');
        cy.get('.product-selectors').contains('Price: Low to High').should('be.visible');

        cy.get('#products-orderby').select('Price: High to Low');
        cy.get('.product-selectors').contains('Price: High to Low').should('be.visible');

    })

    it('Verify the User can select how many produts can be displayed in the Search Results', () => {

        //Enter the search criteria in the 'Search' text box field which can result in mutliple products
        cy.get('#small-searchterms').type('apple');

        //Click on the search button 
        cy.get('.button-1').contains('Search').should('be.visible').click();

        //Check that searched product is diplayed  in the search results
        cy.get('.item-grid').contains('Apple').should('be.visible')

        //Select the number of Products to be displayed from the 'Display' dropdown
        cy.get('#products-pagesize').select('3');

        //Check that the selected number of products should be displayed in the current search page
        cy.get('#products-pagesize').contains('3').should('be.visible');
    })

    it('Verify navigating to Search page from the Site Map page', () => {

        // Click on 'Site Map' link in the footer options
        cy.get('.footer').contains('Sitemap').click();

        //Click on the 'Search' link from the 'Site Map' page
        cy.get('.page').contains('Search').click();

        //Check that user is redirected to the Search page
        cy.get('h1').contains('Search').should('be.visible');
        cy.url.should('contain', '/search');
    })

        it('Verify Page Heading, Page URL and Page Title of the Search page', () => {

            // Click on 'Site Map' link in the footer options
        cy.get('.footer').contains('Sitemap').click();

        //Click on the 'Search' link from the 'Site Map' page
        cy.get('.page').contains('Search').click();

         //Check that proper Page Headings are displayed
            cy.get('h1').should('be.visible');
        
        //Check that proper Page Title is displayed
        cy.title().should('eq','nopCommerce demo store. Search');

        //Check that proper URL is displayed
        cy.url().should('contain', '/search');


    })
    })