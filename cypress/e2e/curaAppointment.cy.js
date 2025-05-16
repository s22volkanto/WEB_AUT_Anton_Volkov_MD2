/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => false);

describe('MD2 - CURA Appointment Tests', () => {
  const login = () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
    cy.contains('Make Appointment').click();
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
  };

  it('Scenario 1 - Make an Appointment', () => {
    login();
    cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    cy.get('#chk_hospotal_readmission').check();
    cy.get('#radio_program_medicaid').check();
    cy.get('#txt_visit_date').click();
    cy.get('.day').contains(/^30$/).click();
    cy.get('#txt_comment').type('CURA Healthcare Service');
    cy.get('#btn-book-appointment').click();

    // Validation
    cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
    cy.get('#hospital_readmission').should('have.text', 'Yes');
    cy.get('#program').should('have.text', 'Medicaid');
    cy.get('#visit_date').should('contain.text', '30');
    cy.get('#comment').should('have.text', 'CURA Healthcare Service');
  });

  it('Scenario 2 - Appointment history empty', () => {
    login();
    cy.get('#menu-toggle').click();
    cy.get('.sidebar-nav').should('be.visible');
    cy.contains('History').click();
    cy.contains('No appointment').should('be.visible');
  });
});
