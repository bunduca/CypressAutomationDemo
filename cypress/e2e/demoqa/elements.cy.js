/// <reference types="cypress" />
const picture = 'samy.jpg'
const {jsonTag} = Cypress.config();

describe('Elements', () => {

    it('Should fill and submit text form ', () => {

        //visit the Homepage
        cy.visit('https://demoqa.com/');

        //The Homepage logo should be displayed
        cy.get('header > a > img').should('be.visible');

        //Click the Elements category button
        cy.get('.category-cards > :nth-child(1)').click();

        //Verify that the user is redirected to the Elements page
        cy.url().should('contain', '/elements');

        //Click on the Text Box button
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();

        //Verify that the user is redirected to the Text Box Page
        cy.url().should('contain', '/text-box');

        //Verify that the form with text boxes is displayed
        cy.get('#userForm').should('be.visible');

        //Type a name in the Full Name input field
        cy.get('#userName').type('Full Name');

        //verify that the Full Name input field has the typed in value
        cy.get('#userName').should('have.value', 'Full Name');

        //Type an email address in the Email input field
        cy.get('#userEmail').type('fullname@example.com');

        //verify that the Email Address input field has the typed in value
        cy.get('#userEmail').should('have.value', 'fullname@example.com');

        //Type an address in the Current Address input field
        cy.get('#currentAddress').type('Str Victoriei nr 1');

        //verify that the Address input field has the typed in value
        cy.get('#currentAddress').should('have.value', 'Str Victoriei nr 1');

        //Type an address in the Permanent Address input field
        cy.get('#permanentAddress').type('Str Miron Costin nr 1');

        //verify that the Permanent Address input field has the typed in value
        cy.get('#permanentAddress').should('have.value', 'Str Miron Costin nr 1');

        //Click the Submit button
        cy.get('#submit').click();

        //Verify that the form has been successfully submitted with typed in values
        cy.get('#name').contains('Full Name').should('be.visible');
        cy.get('#email').contains('fullname@example.com').should('be.visible');
        cy.get('.border > #currentAddress').contains('Str Victoriei nr 1').should('be.visible');
        cy.get('.border > #permanentAddress').contains('Str Miron Costin nr 1').should('be.visible');

    });

    it('Should select and deselect a checkbox', () => {

        //Visit the Check box page
        cy.visit('https://demoqa.com/checkbox');


        //Verify that the Check Box Page is displayed
        cy.get('.playgound-header').contains('Check Box').should('be.visible');

        //Click the drop down toggle icon
        cy.get('button[title=Toggle]').click();

        //Verify that the drop down menu is opened
        cy.get('.rct-node-expanded > ol').should('be.visible');

        //Verify that the Home drop down menu displays all three elements
        cy.get('.rct-node-expanded > ol').within(() => {
            cy.contains('Desktop').should('be.visible');
            cy.contains('Documents').should('be.visible');
            cy.contains('Downloads').should('be.visible');
        })

        //Mark the Home Checkbox
        cy.get('input[type=checkbox]').eq(0).click({ force: true });

        //Verify that the confirmation message is visible
        cy.get('#result').should('be.visible').within(() => {
            cy.contains('home').should('be.visible');
            cy.contains('commands').should('be.visible');
            cy.contains('documents').should('be.visible');
        })

        //Verify that all checkboxes appear as checked
        cy.get('input[type=checkbox]').eq(0).should('be.checked');
        cy.get('input[type=checkbox]').eq(1).should('be.checked');
        cy.get('input[type=checkbox]').eq(2).should('be.checked');
        cy.get('input[type=checkbox]').eq(3).should('be.checked');

        //Unmark the Home Checkbox
        cy.get('input[type=checkbox]').eq(0).click({ force: true });

        //Verify that the confirmation message is no longer visible
        cy.get('#result').should('not.exist');

        //Verify that all checkboxes appear as unchecked
        cy.get('input[type=checkbox]').eq(0).should('not.be.checked')
        cy.get('input[type=checkbox]').eq(1).should('not.be.checked');
        cy.get('input[type=checkbox]').eq(2).should('not.be.checked');
        cy.get('input[type=checkbox]').eq(3).should('not.be.checked');

        //Click the drop down Desktop toggle icon
        cy.get('button[title=Toggle]').eq(1).click();

        //Verify that the Desktop drop down menu is opened
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol').should('be.visible').within(() => {
            cy.contains('Notes').should('be.visible');
            cy.contains('Commands').should('be.visible');
        })

        //Mark the Commands checkbox
        cy.get('input[type=checkbox]').eq(3).click({ force: true });

        //Verify that the Commands checkbox is checked while Notes, Documents and Downloads are not
        cy.get('input[type=checkbox]').eq(3).should('be.checked');
        cy.get('input[type=checkbox]').eq(2).should('not.be.checked');
        cy.get('input[type=checkbox]').eq(4).should('not.be.checked');
        cy.get('input[type=checkbox]').eq(5).should('not.be.checked');

        //Verify confirmation message with commands selection
        cy.get('#result').contains('commands').should('be.visible');


    });

    it('Should select and deselect radio buttons', () => {

        //Visit the Radio Button page
        cy.visit('https://demoqa.com/radio-button');

        //Verify that the Radio Button Page is displayed
        cy.get('.playgound-header').contains('Radio Button').should('be.visible');

        //Verify that the "Yes" and "Impressive" options are visible and not selected by default
        cy.get('input[type=radio]').eq(0).should('exist').and('not.be.checked');
        cy.get('input[type=radio]').eq(1).should('exist').and('not.be.checked')

        //Verify that the "No" option is disabled
        cy.get('input[type=radio]').eq(2).should('exist').and('be.disabled');

        //Click the "Yes" option
        cy.get('input[type=radio]').eq(0).click({ force: true });

        //Verify that radio button is checked and the confirmation message is displayed
        cy.get('input[type=radio]').eq(0).should('be.checked');
        cy.get('.text-success').contains('Yes').should('be.visible');

        //Click the Impressive radio button 
        cy.get('input[type=radio]').eq(1).click({ force: true });

        //Check that the Yes radio button is deselected, while the impressive option is now selected and verify that the confirmation message has changed
        cy.get('input[type=radio]').eq(0).should('not.be.checked');
        cy.get('input[type=radio]').eq(1).should('be.checked');
        cy.get('.text-success').contains('Impressive').should('be.visible');

    });

    it('Should click buttons', () => {


        //Visit the Buttons page
        cy.visit('https://demoqa.com/buttons');

        //Double Click the "Double Click Me" button
        cy.get('#doubleClickBtn').dblclick();

        //Verify Confirmation Message
        cy.get('#doubleClickMessage').contains('You have done a double click').should('be.visible');

        //Right Click the "Right Click Me" button
        cy.get('#rightClickBtn').rightclick();

        //Verify Confirmation Message for the "Right Click me" button
        cy.get('#rightClickMessage').contains('You have done a right click').should('be.visible');

        //Click the "Click me" button
        cy.get('button[type=button]').eq(3).click();

        //Verify Confirmation Message for the "Click me" button
        cy.get('#dynamicClickMessage').contains('You have done a dynamic click').should('be.visible');

    });

    it('Should Download and Upload a file ', () => {


        //Visit the Upload and Download page
        cy.visit('https://demoqa.com/upload-download');

        //Verify Uploading a file
        cy.get('#uploadFile').attachFile(picture); //requires cypress-file-upload plugin to be installed in order to have attachFile command

        //Verify Confirmation Message
        cy.get('#uploadedFilePath').contains('samy.jpg').should('be.visible');

        //Click the Download button 
        cy.get('#downloadButton').click();

        //Verify that the file has been succesfully downloaded
        cy.verifyDownload('sampleFile.jpeg'); //requires cy-verify-downloads plugin to be installed in order to have verifyDownload command


    });

    it('Should Verify Data displayed on web tables ', () => {

        //Visit the Web Table page
        cy.visit('https://demoqa.com/webtables');



        //Verify that the web table header contains data-First Name
        cy.get(':nth-child(1) > .rt-resizable-header-content').contains('First Name');

        //Verify that the web table header contains data-Last Name
        cy.get(':nth-child(2) > .rt-resizable-header-content').contains('Last Name');

        //Verify that the web table header contains data-Age
        cy.get('[style="flex: 40 0 auto; width: 40px; max-width: 40px;"] > .rt-resizable-header-content').contains('Age');

        //Verify that the web table header contains data-Email
        cy.get(':nth-child(4) > .rt-resizable-header-content').contains('Email');

        //Verify that the web table header contains data-Salary
        cy.get(':nth-child(5) > .rt-resizable-header-content').contains('Salary');

        //Verify that the web table header contains data-Department
        cy.get(':nth-child(6) > .rt-resizable-header-content').contains('Department');

        //Verify that the web table header contains data-Action
        cy.get(':nth-child(7) > .rt-resizable-header-content').contains('Action');


        //Verify that the web table contains data
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').contains('Cierra').should('be.visible');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)').contains('Vega').should('be.visible');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').contains('39').should('be.visible');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)').contains('cierra@example.com').should('be.visible');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(5)').contains('10000').should('be.visible');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(6)').contains('Insurance').should('be.visible');


    });


    it('Should search for Data on web tables ', () => {

        //Visit the Web Table page
        cy.visit('https://demoqa.com/webtables');

        //Type in the Search field to search by First Name
        cy.get('#searchBox').type('Alden')

        //Verify that the search result are visible in the table
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').contains('Alden').should('be.visible');

        //Verify that the other rows that do not comply with the search are no longer visible
        cy.contains('Cierra').should('not.exist');
        cy.contains('Kierra').should('not.exist');



        //Type in the Search field to search by Email
        cy.get('#searchBox').clear().type('kierra@example.com');

        //Verify that the search result are visible in the table
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)').contains('kierra@example.com').should('be.visible');

        //Verify that the other rows that do not comply with the search are no longer visible
        cy.contains('alden@example.com').should('not.exist');
        cy.contains('cierra@example.com').should('not.exist');



    });

    it('Should add Data Record on web tables ', () => {

        //Visit the Web Table page
        cy.visit('https://demoqa.com/webtables');

        //Click on add button 
        cy.get('#addNewRecordButton').click();

        //Type in the Registration Form
        cy.get('#firstName').type('Bunduc');
        cy.get('#lastName').type('Andreea');
        cy.get('#userEmail').type('name@example.com');
        cy.get('#age').type('31');
        cy.get('#salary').type('31000');
        cy.get('#department').type('IT');

        //Click on Submit Button
        cy.get('#submit').click();

        //Verify that the new data has been inserted to the table
        cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').contains('Bunduc').should('be.visible');
        cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').contains('Andreea').should('be.visible');
        cy.get(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').contains('31').should('be.visible');
        cy.get(':nth-child(4) > .rt-tr > :nth-child(4)').contains('name@example.com').should('be.visible');
        cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').contains('31000').should('be.visible');
        cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').contains('IT').should('be.visible');

    });

    it('Should edit existing Data using the edit button ', () => {

        //Visit the Web Table page
        cy.visit('https://demoqa.com/webtables');

        //Click the edit button on the first row 
        cy.get('#edit-record-1').click();

        //Verify that the registration form modal is opened
        cy.get('.modal-header').contains('Registration Form').should('be.visible');

        //Verify that the values from the modal are the ones from row 1
        cy.get('#firstName').should('have.value', 'Cierra');
        cy.get('#lastName').should('have.value', 'Vega');
        cy.get('#userEmail').should('have.value', 'cierra@example.com');
        cy.get('#age').should('have.value', '39');
        cy.get('#salary').should('have.value', '10000');
        cy.get('#department').should('have.value', 'Insurance');

        //Edit each input field and click the Submit button
        cy.get('#firstName').clear().type('Popa');
        cy.get('#lastName').clear().type('Elena');
        cy.get('#userEmail').clear().type('test@example.com');
        cy.get('#age').clear().type('47');
        cy.get('#salary').clear().type('47000');
        cy.get('#department').clear().type('IT');
        cy.get('#submit').click();

        //Verify that edited values are succesfully saved in the table
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').contains('Popa').should('be.visible');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)').contains('Elena').should('be.visible');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').contains('47').should('be.visible');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)').contains('test@example.com').should('be.visible');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(5)').contains('47000').should('be.visible');
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(6)').contains('IT').should('be.visible');


    });

    it('Should add Data Record on web tables ', () => {

        //Visit the Web Table page
        cy.visit('https://demoqa.com/webtables');

        //Click the Delete button to remove first row in the table
        cy.get('#delete-record-1').click();

        //Verify that the data from the first row was deleted
        cy.get('.col-md-6').within(() => {
            cy.contains('Cierra').should('not.exist');
            cy.contains('Vega').should('not.exist');
            cy.contains('39').should('not.exist');
            cy.contains('cierra@example.com').should('not.exist');
            cy.contains('10000').should('not.exist');
            cy.contains('Insurance').should('not.exist');
        });

    })
 
    it('Should test buttons with dynamic properties ', () => {

        //Visit the Dynamic Properties page
        cy.visit('https://demoqa.com/dynamic-properties');

        //Verify that the First button is enabled 
        cy.get('#enableAfter').should('be.enabled');

        //Verify that the third button is visible
        cy.get('#visibleAfter').should('be.visible');






    });

    it('Should verify status codes for API calls when clicking links', () => {

        //Visit the Links page
        cy.visit('https://demoqa.com/links');

        //Click Created link and check status code on the API call
        cy.intercept('https://demoqa.com/created').as("CreatedLink");
        cy.get('#created').click();
        cy.wait("@CreatedLink").its('response.statusCode').should('eq' , 201);

        //Verify link resonse confirmation message on the UI
        cy.get('#linkResponse').contains('Link has responded with staus 201 and status text Created').should('be.visible');

    });
})
