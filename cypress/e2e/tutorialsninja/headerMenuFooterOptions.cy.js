/// <reference types="cypress" />


const { baseUrl } = Cypress.config();
const picture = 'samy.jpg'
describe('Header Menu Footer Options', () => {

    beforeEach(() => {
        //Clear cookies and session storage (so that we are no longer logged in from previous test)
        //Hook that is executed before the start of each test case
        cy.clearAllCookies();
        sessionStorage.clear();
    })

    it('Verify correct Phone number is displayed for the Contact Us Header option', () => {
        //TC_HMF_001

        //visit the Homepage
        cy.visit(baseUrl);

        //Click the 'Contact Us' icon header option
        cy.get('#top > .container').contains('123456789').should('be.visible');
    })

    it('Verify Currency header option is displayed with the required list of Currencies', () => {
        //TC_HMF_002

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on the 'Currency' header option
        cy.get('.fa').eq(0).click();

        //Check that 'Euro', 'Pound Streling' and 'US Dollar' options are displayed
        cy.get('#form-currency > .btn-group > .dropdown-menu').within(() => {
            cy.contains('Euro').should('be.visible');
            cy.contains('Pound Sterling').should('be.visible');
            cy.contains('US Dollar').should('be.visible');
        })
    })

    it('Verify About Us Footer link', () => {
        //TC_HMF_005

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'About Us' Footer link
        cy.get('footer').contains('About Us').should('be.visible').click();

        //Check that User is taken to 'About Us' page 
        cy.get('#content').contains('About Us').should('be.visible');
        cy.get('.breadcrumb').contains('About Us').should('be.visible');
    })

    it('Verify Delivery Information Footer link', () => {
        //TC_HMF_006

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Delivery Information' Footer link
        cy.get('footer').contains('Delivery Information').should('be.visible').click();

        //Check that User is taken to 'Delivery Information' page 
        cy.get('#content').contains('Delivery Information').should('be.visible');
        cy.get('.breadcrumb').contains('Delivery Information').should('be.visible');
    })

    it('Verify Privacy Policy Footer link', () => {
        //TC_HMF_007

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Privacy Policy' Footer link
        cy.get('footer').contains('Privacy Policy').should('be.visible').click();

        //Check that User is taken to 'Privacy Policy' page 
        cy.get('#content').contains('Privacy Policy').should('be.visible');
        cy.get('.breadcrumb').contains('Privacy Policy').should('be.visible');
    })

    it('Verify Terms & Conditions Footer link', () => {
        //TC_HMF_008

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Terms & Conditions' Footer link
        cy.get('footer').contains('Terms & Conditions').should('be.visible').click();

        //Check that User is taken to 'Terms & Conditions' page 
        cy.get('#content').contains('Terms & Conditions').should('be.visible');
        cy.get('.breadcrumb').contains('Terms & Conditions').should('be.visible');
    })

    it('Verify Brands Footer link', () => {
        //TC_HMF_009

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Brands' Footer link
        cy.get('footer').contains('Brands').should('be.visible').click();

        // Click on any Brand Name in the displayed page
        cy.get('#content').contains('Apple').should('be.visible').click();

        //Check that User is taken to selected Brand Page and all the products related to the Brand are displayed
        cy.get('#content').within(() => {
            cy.contains('Apple').should('be.visible');
            cy.contains('Apple Cinema 30"').should('be.visible');
            cy.contains('iPod Classic').should('be.visible');
            cy.contains('iPod Nano').should('be.visible');
            cy.contains('iPod Touch').should('be.visible');
        })
    })

    it('Verify viewing the Products in Brand page in List view', () => {
        //TC_HMF_010

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Brands' Footer link
        cy.get('footer').contains('Brands').should('be.visible').click();

        // Click on any Brand Name in the displayed page
        cy.get('#content').contains('Apple').should('be.visible').click();

        //Select the 'List' view option in the displayed Brand page
        cy.get('#list-view').click();

        //Verify that List option is activated
        cy.get('#list-view').should('have.attr', 'class', 'btn btn-default active');

    })

    it('Verify viewing the Products in Brand page in Grid view', () => {
        //TC_HMF_011

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Brands' Footer link
        cy.get('footer').contains('Brands').should('be.visible').click();

        // Click on any Brand Name in the displayed page
        cy.get('#content').contains('Apple').should('be.visible').click();

        //Select the 'Grid ' view option in the displayed Brand page
        cy.get('#grid-view').click();

        //Verify that Grid  option is activated
        cy.get('#grid-view').should('have.attr', 'class', 'btn btn-default active');
    })

    it('Verify Product Compare link in the Brand page', () => {
        //TC_HMF_012

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Brands' Footer link
        cy.get('footer').contains('Brands').should('be.visible').click();

        // Click on any Brand Name in the displayed page
        cy.get('#content').contains('Apple').should('be.visible').click();

        // Click on 'Product Compare' link in the displayed Brand page      
        cy.get('button').eq(11).click();
        cy.get('.alert').contains('product comparison').should('be.visible').click();

        //Check that User is taken to the 'Product Comparison' page with the details of the Product that we have added for comparision. 
        cy.get('#content > h1').contains('Product Comparison').should('be.visible');
        cy.get('.breadcrumb').contains('Product Comparison').should('be.visible');
        cy.url().should('contain', '/index.php?route=product/compare');
        cy.get('#content').contains('Apple Cinema 30"').should('be.visible');
    })

    it('Verify adding the Product to Wish List from the Brand page', () => {
        //TC_HMF_016

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Brands' Footer link
        cy.get('footer').contains('Brands').should('be.visible').click();

        // Click on any Brand Name in the displayed page
        cy.get('#content').contains('Apple').should('be.visible').click();

        // Select 'Wish List' icon option of any product that is displayed in the displayed Brand page
        cy.get('button').eq(10).click();

        //Check that success message with text - 'Success: You have added Product Name to your wish list!' is displayed and the Product is successfully added to the Wish List
        cy.get('.alert').contains('wish list').should('be.visible')

    })

    it('Verify adding the Product for Comparison from the Brand page', () => {
        //TC_HMF_017

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Brands' Footer link
        cy.get('footer').contains('Brands').should('be.visible').click();

        // Click on any Brand Name in the displayed page
        cy.get('#content').contains('Apple').should('be.visible').click();

        // Select 'Compare this Product' icon option of any product that is displayed in the displayed Brand page
        cy.get('button').eq(11).click();

        //Check that success message is displayed
        cy.get('.alert').contains('Success: You have added Apple Cinema 30" to your product comparison!').should('be.visible');
    }) 

    it('Verify User is navigating to Product Display Page from Brand page', () => {
        //TC_HMF_018

        //visit the Homepage
        cy.visit(baseUrl);

        //Click on 'Brands' Footer link
        cy.get('footer').contains('Brands').should('be.visible').click();

        // Click on any Brand Name in the displayed page
        cy.get('#content').contains('Apple').should('be.visible').click();

        //Click on Product Thumbnail or Product Name of any Product that is displayed in the displayed Brand page
        cy.get('.img-responsive').eq(0).click();

        //Check that User is taken to the 'Product Display Page' of the Product
        cy.get('#product-product').contains('Apple Cinema 30"').should('be.visible');
        cy.get('.breadcrumb').contains('Apple Cinema 30"').should('be.visible');
}) 
})