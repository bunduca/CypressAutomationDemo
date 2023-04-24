/// <reference types="cypress" />
const {jsonTag} = Cypress.config();

const picture = 'samy.jpg'

it('Should complete Student Registration form and click Submit button ', () => {
    cy.viewport(1920, 1080);

    //Visit the Links page
    cy.visit('https://demoqa.com/automation-practice-form');

    //Verify that Student Registration Form is visible
    cy.get('#userForm').should('be.visible');

    //Type a name in the First Name input field
    cy.get('#firstName').type('Popescu');

    //Type a name in the Last Name input field
    cy.get('#lastName').type('Maria');

    //Type an email address in the Email input field
    cy.get('#userEmail').type('popescumaria@example.com');

    //Select 'female' option in the Gender radio button
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();

    //Type a phone number in the Mobile input field
    cy.get('#userNumber').type('0123456789');

    //Click the Birthdate picker and add a date
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-container').within(() => {
        cy.get('.react-datepicker__month-select').select('November');
        cy.get('.react-datepicker__year-select').select('1991');
    })
    cy.get('.react-datepicker__day--026').click();

    //Verify that the selected day is visible in the Date of Birth field
    cy.get('#dateOfBirthInput').should('have.value', '26 Nov 1991');

    //Type a Subject in the Subject input field and press the Enter keyboard button
    cy.get('.subjects-auto-complete__value-container').type('Biology{enter}' );

    //Verify that the Biology Subject has been added to the field
    cy.get('.subjects-auto-complete__value-container').contains('Biology').should('be.visible');

    //Mark Sports and Reading check boxes as Hobbies
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();

    //Click on Choose File and add a picture to the form
    cy.get('#uploadPicture').attachFile(picture);

    //Type in Address on the Current Adr=dress field
    cy.get('#currentAddress').type('Str Fabricii, nr 69-71, Cluj Napoca')

    //Click the Submit button
    cy.get('#submit').click();



    //Verify that the Modal data is dislayed
    cy.get('.modal-body').should('be.visible');

    //Verify that the values added in the submitted Registration form are dislayed in the Modal and click Close button
    cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Popescu Maria');
    cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('popescumaria@example.com');
    cy.get('tbody > :nth-child(3) > :nth-child(2)').contains('Female');
    cy.get('tbody > :nth-child(4) > :nth-child(2)').contains('0123456789');
    cy.get('tbody > :nth-child(5) > :nth-child(2)').contains('26 November,1991');
    cy.get('tbody > :nth-child(6) > :nth-child(2)').contains('Biology');
    cy.get('tbody > :nth-child(7) > :nth-child(2)').contains('Sports, Reading');
    cy.get('tbody > :nth-child(8) > :nth-child(2)').contains('samy.jpg');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').contains('Str Fabricii, nr 69-71, Cluj Napoca');

    cy.get('#closeLargeModal').click();
    cy.get('.modal-body').should('not.exist');




});