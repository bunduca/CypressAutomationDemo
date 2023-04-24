/// <reference types="cypress" />
const picture = 'samy.jpg'
const {jsonTag} = Cypress.config();

describe('Widgets', () => {

    it('The Cards should expand and display the content-Accordian', () => {

        //visit the Widgets-Accordian page
        cy.visit('https://demoqa.com/accordian');

        //Verify that the first card is expepanded by default
        cy.get('#section1Content > p').should('be.visible');

        //Colapse the first card and check that the text is no longer visible
        cy.get('#section1Heading').click();
        cy.get('#section1Content > p').should('be.visible');


        //Verify that the second card is colapsed by default
        cy.get('#section2Content > :nth-child(1)').should('not.be.visible');

        //Expand the second card and the texts within the card are correct
        cy.get('#section2Heading').click();
        cy.get('#section2Content > :nth-child(1)').should('be.visible');

        //Verify that the third card is colapsed by default
        cy.get('#section3Content > p').should('not.be.visible');

        //Expand the third card and the texts within the card are correct
        cy.get('#section3Heading').click();
        cy.get('#section3Heading').should('be.visible');

    });


    it('The Cards should colapse when another card is expanded', () => {

        //visit the Widgets-Accordian page
        cy.visit('https://demoqa.com/accordian');

        //Verify that the first card is expanded by default
        cy.get('#section1Content > p').should('be.visible');

        //Verify that the first card is colapsing when clicking on second card
        cy.get('#section2Heading').click();
        cy.get('#section1Content > p').should('not.be.visible');

        //Verify that the second card is colapsing when clicking on third card
        cy.get('#section3Heading').click();
        cy.get('#section2Content > :nth-child(1)').should('not.be.visible');

        //Verify that the third card is colapsing when clicking on first card
        cy.get('#section1Heading').scrollIntoView().click();
        cy.get('#section3Content > p').should('not.be.visible');

    });

    it('Should select a date', () => {

        //visit the Widgets-Date picker
        cy.visit('https://demoqa.com/date-picker');

        //Click the Date picker and select a date
        cy.get('#datePickerMonthYearInput').click();
        cy.get('.react-datepicker__month-container').should('be.visible');

        cy.get('.react-datepicker__month-container').within(() => {
            cy.get('.react-datepicker__month-select').select('December');
            cy.get('.react-datepicker__year-select').select('1987');
        })
        cy.get('.react-datepicker__day--010').click();

        //Verify that the selected date is visible in the Date field
        cy.get('#datePickerMonthYearInput').should('have.value', '12/10/1987');

    });

    it('Should change Date and Time', () => {

        //visit the Widgets-Date picker
        cy.visit('https://demoqa.com/date-picker');

        //Click the Date and Time input
        cy.get('#dateAndTimePickerInput').click();

        //Verify that Date and Time picker input is visible
        cy.get('.react-datepicker__month-container').should('be.visible');

        //Select a date and time
        cy.get('.react-datepicker__month-container').within(() => {
            cy.get('.react-datepicker__month-read-view--selected-month').click();
            cy.get('.react-datepicker__month-dropdown > :nth-child(6)').click();

            cy.get('.react-datepicker__year-read-view--selected-year').click();
            cy.get('.react-datepicker__year-dropdown').contains('2018').click();

        })
        cy.get('.react-datepicker__day--006').eq(0).click();
        cy.get('.react-datepicker__time-list > :nth-child(4)').click();


        //Verify that the selected date and time is visible in the Date and Time field
        cy.get('#dateAndTimePickerInput').scrollIntoView().should('have.value', 'June 6, 2018 12:45 AM');


    });


    it('Should change between different tabs', () => {

        //visit the Tabs page
        cy.visit('https://demoqa.com/tabs');

        //Check that the tabs are visible
        cy.get('#tabsContainer').should('be.visible');

        //Check that text is displayed under What tab
        cy.get('#demo-tabpane-what > .mt-3').contains('Lorem Ipsum');

        //Click Origin tab and check the text
        cy.get('#demo-tab-origin').click();
        cy.get('#demo-tabpane-origin > .mt-3').contains('Finibus Bonorum et Malorum');

        //Click Use tab and check the text
        cy.get('#demo-tab-use').click();
        cy.get('#demo-tabpane-use > .mt-3').contains('desktop publishing package');

        //Verify that the clicked tab is now selected and the others are not
        cy.get('#demo-tab-use').should('have.attr', 'aria-selected', 'true');
        cy.get('#demo-tab-what').should('have.attr', 'aria-selected', 'false');
        cy.get('#demo-tab-origin').should('have.attr', 'aria-selected', 'false');

        //Verify that the last tab is disabled and not clickable
        cy.get('#demo-tab-more').should('have.attr', 'aria-disabled', 'true');

    });


    it('Should display messages when you hover the mouse over the Hover me to see button and Hover me to see input field', () => {

        //Visit the Tool Tips page
        cy.visit('https://demoqa.com/tool-tips');

        //Hover the mouse over the Hover me to see button
        cy.get('#toolTipButton').trigger('mouseover');

        //Check that a Hoover sucessfull message is displayed
        cy.get('#buttonToolTopContainer').should('be.visible');

        //Hover the mouse over the Hover me to see input field
        cy.get('#toolTipTextField').trigger('mouseover');

        //Check that a Hoover sucessfull message is displayed
        cy.get('#textFieldToolTip').should('be.visible');


    });

    it('Should display menu and submenu', () => {

         //Visit the Menu page
         cy.visit('https://demoqa.com/menu');

         //Check that Menu is visible
         cy.get('.col-md-6').should('be.visible');

        //Hover on Main Item 2 and check that a sub menu is opened
        cy.get('#nav > :nth-child(2) > :nth-child(1)').trigger('mouseover');
        
        
        


});



});