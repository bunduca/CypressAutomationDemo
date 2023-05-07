/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
import tutorialNinjaUserDetails from "../../fixtures/tutorialNinjaUserDetails.json"
const { email, password } = tutorialNinjaUserDetails

describe('Special Offers', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();

        //visit the Homepage
        cy.visit(baseUrl);
    })

    it('Verify navigating to Special Offers page using Specials footer link', () => {
        //TC_SPO_001


        //Click on 'Specials' footer link 
        cy.get('footer').contains('Specials').click();

        //Check that User is taken to 'Special Offers' page
        cy.get('#content').contains('Special Offers').should('be.visible');
        cy.get('.breadcrumb').contains('Special Offers').should('be.visible');
    })

    it('Verify navigating to Special Offers page from Site Map page', () => {
        //TC_SPO_002


        //Click on 'Site Map' footer link
        cy.get('footer').contains('Site Map').click();

        //Click on 'Special Offers' link in the displayed 'Site Map' page
        cy.get('#content').contains('Special Offers').should('be.visible').click();

        //Check that User is taken to 'Special Offers' page
        cy.get('#content').contains('Special Offers').should('be.visible');
        cy.get('.breadcrumb').contains('Special Offers').should('be.visible');
    })

    it('Verify the Products which are sold at offer price are displayed in the Special Offers page', () => {
        //TC_SPO_003


        //Click on 'Specials' footer link 
        cy.get('footer').contains('Specials').click();

        //Check that User is taken to 'Special Offers' page
        cy.get('#content').contains('Special Offers').should('be.visible');
        cy.get('.breadcrumb').contains('Special Offers').should('be.visible');

        //Check that Only the Products that are sold at an offer price are displayed in the 'Special Offers' page
        cy.get('.price-old').eq(0).should('be.visible');
        cy.get('.price-old').eq(1).should('be.visible');
    })

    it('Verify viewing the Products in Special Offers page in List view', () => {
        //TC_SPO_004


        //Click on 'Specials' footer link 
        cy.get('footer').contains('Specials').click();

        //Check that User is taken to 'Special Offers' page
        cy.get('#content').contains('Special Offers').should('be.visible');
        cy.get('.breadcrumb').contains('Special Offers').should('be.visible');

        //Select the 'List' view option
        cy.get('#list-view').click();

        //Check that All the products in 'Special Offers' page are displayed in List view
        cy.get('#list-view').should('have.attr', 'class', 'btn btn-default active')
    })

    it('Verify viewing the Products in Special Offers page in Grid view', () => {
        //TC_SPO_005


        //Click on 'Specials' footer link 
        cy.get('footer').contains('Specials').click();

        //Check that User is taken to 'Special Offers' page
        cy.get('#content').contains('Special Offers').should('be.visible');
        cy.get('.breadcrumb').contains('Special Offers').should('be.visible');

        //Select the 'List' view option
        cy.get('#grid-view').click();

        //Check that All the products in 'Special Offers' page are displayed in List view
        cy.get('#grid-view').should('have.attr', 'class', 'btn btn-default active');
    })

    it('Verify Product Compare link in the Special Offers page', () => {
        //TC_SPO_006


        //Click on 'Specials' footer link 
        cy.get('footer').contains('Specials').click();

        //Check that User is taken to 'Special Offers' page
        cy.get('#content').contains('Special Offers').should('be.visible');
        cy.get('.breadcrumb').contains('Special Offers').should('be.visible');

        //Click on 'Product Compare' link
        cy.get('#content').contains('Product Compare').click();

        //Check that User is taken to 'Product Comparision' page
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
    })

    it('Verify Sorting the Products in the Special Offers page using Sort By field', () => {
        //TC_SPO_007


        //Click on 'Specials' footer link 
        cy.get('footer').contains('Specials').click();

        //Select any option from the 'Sort By' field 
        cy.get('#input-sort').select('Model (A - Z)');

        //Check that All the products in the 'Special Offers' page  are displayed as sorted according to the selected sorted option
        cy.get('.caption').eq(0).contains('Apple Cinema 30"').should('be.visible');
        cy.get('.caption').eq(1).contains('Canon EOS 5D').should('be.visible');

        //Select any option from the 'Sort By' field 
        cy.get('#input-sort').select('Model (Z - A)');

        //Check that All the products in the 'Special Offers' page  are displayed as sorted according to the selected sorted option
        cy.get('.caption').eq(1).contains('Apple Cinema 30"').should('be.visible');
        cy.get('.caption').eq(0).contains('Canon EOS 5D').should('be.visible');
    })

    it('Verify adding the Product to Wish List from the Special Offers page', () => {
        //TC_SPO_010


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

        //Click on 'Specials' footer link 
        cy.get('footer').contains('Specials').click();

        //Select 'Wish List' icon option of any product that is displayed in the 'Special Offers' page
        cy.get('button').eq(10).click();

        //Check that Success message with text - 'Success: You have added Product Name to your wish list!' is displayed and  the Product is successfully added to the Wish List
        cy.get('.alert').contains(' Success: You have added Apple Cinema 30" to your wish list!').should('be.visible');

    })

    it('Verify adding the Product for Comparison from the Special Offers page', () => {
        //TC_SPO_011


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

        //Click on 'Specials' footer link 
        cy.get('footer').contains('Specials').click();

        //Select 'Compare this Product' icon option of any product that is displayed in the 'Special Offers' page
        cy.get('button').eq(11).click();

        //Check that Success message with text - ' Success: You have added Apple Cinema 30" to your product comparison!' is displayed and  the Product is successfully added to the Wish List
        cy.get('.alert').contains(' Success: You have added Apple Cinema 30" to your product comparison!').should('be.visible');
    })

    it('Verify User is navigating to Product Display Page from Special Offers page', () => {
        //TC_SPO_012


        //Click on 'Specials' footer link 
        cy.get('footer').contains('Specials').click();

        //Click on Product Thumbnail or Product Name of any Product that is displayed in the 'Special Offers' page
        cy.get('.img-responsive').eq(0).click();

        //Check that User is taken to the 'Product Display Page' of the Product
        cy.get('.breadcrumb').contains('Apple Cinema 30"').should('be.visible');
        cy.get('#content').contains('Apple Cinema 30"').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/product&product_id=42');
    })

    it('Verify the Breadcrumb of Special Offers page', () => {
        //TC_SPO_013


        //Click on 'Specials' footer link 
        cy.get('footer').contains('Specials').click();

        //Check that Breadcrumb is displayed  in the 'Special Offers' page. 
        cy.get('.breadcrumb').contains('Special Offers').should('be.visible');

    })

    it('Verify the Page URL, Page Heading and Page Title of Special Offers page', () => {
        //TC_SPO_014


        //Click on 'Specials' footer link 
        cy.get('footer').contains('Specials').click();

        //Check that Correct Page URL, Page Heading and Page Title should be displayed in the 'Special Offers' page
        cy.get('h2').contains('Special Offers').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/special');
        cy.title().should('eq', 'Special Offers');



    })
})