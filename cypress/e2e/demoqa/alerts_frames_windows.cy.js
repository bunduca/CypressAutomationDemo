/// <reference types="cypress" /> 
const {alertsURL} = Cypress.config();

describe('Alerts and Frames and Windows', () => {

    it('Should check that alert is displayed when button is clicked  ', () => {

        //visit the Alerts Page
        cy.visit(alertsURL);

        //Verify that the user is redirected to the Alerts page
        cy.url().should('contain', '/alerts');

        //Click the Alert me button (1st Click me button)
        cy.get('#alertButton').click();

        //Verify that the alert box is called and shows correct text
        cy.on('window:alert', (text) => {
            expect(text).to.equal('You clicked a button');
        })

    })

    it('Should verify confirmation message in the UI when window confirm box alert is accepted', () => {

        //visit the Alerts Page
        cy.visit(alertsURL);

        //Click the Confirm button (3rd Click me button)
        cy.get('#confirmButton').click();

        // //Verify that the alert box is called and shows correct text
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Do you confirm action?');
        })

        //By default Cypress will automatically hit “Ok” in our confirmation - assert the confirmation message in the UI
        cy.get('#confirmResult').should('be.visible').and('contain', 'You selected Ok');

    });

    it('Should verify confirmation message in the UI when window confirm box alert is cancelled', () => {

        //visit the Alerts Page
        cy.visit(alertsURL);

        //Click the Confirm button (3rd Click me button)
        cy.get('#confirmButton').click();

        //If we want to instead test a use case of someone clicking “Cancel”, we return false in our event callback
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('Do you confirm action?');
            return false;

        });

        //Verify the confirmation message for selecting Cancel
        cy.get('#confirmResult').should('be.visible').and('contain', 'You selected Cancel');
    });

    it('Should open and close the modals', () => {

        //visit the Modal Dialogs page
        cy.visit('https://demoqa.com/modal-dialogs');

        //Click the Small modal button
        cy.get('#showSmallModal').click();

        //Verify that the Small modal is opened and the texts within the modal are correct
        cy.get('.modal-header').contains('Small Modal').should('be.visible');
        cy.get('.modal-body').contains('This is a small modal. It has very less content').should('be.visible');

        //Verify closing small modal by pressing the X button
        cy.get('.close > [aria-hidden="true"]').click();
        cy.get('.modal-content').should('not.exist');

        //Verify closing small modal by pressing the Close button
        cy.get('#showSmallModal').click();
        cy.get('#closeSmallModal').click();
        cy.get('.modal-content').should('not.exist');

        //Click the Large modal button
        cy.get('#showLargeModal').click();

        //Verify that the Large modal is opened and the texts within the modal are correct
        cy.get('.modal-header').contains('Large Modal').should('be.visible');
        cy.get('.modal-body').should('be.visible');

        //Verify closing Large modal by pressing the X button
        cy.get('.close > [aria-hidden="true"]').click();
        cy.get('.modal-content').should('not.exist');

         //Verify closing Large modal by pressing the Close button
         cy.get('#showLargeModal').click();
         cy.get('#closeLargeModal').click();
         cy.get('.modal-content').should('not.exist');

    });

});