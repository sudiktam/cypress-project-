// / <reference types="cypress" />

// Define all selectors in one place for clarity
const selectors = {
  emailInput: '#email',
  passwordInput: '#password',
  loginButton: '.space-y-5 > .py-4',
};

describe(' Login Test Suite', () => {

  beforeEach(() => {
    cy.log(' Visiting Login Page');
    cy.visit('https://staging.nepalniwas.com/login');
  });

  it('Should log in successfully with valid credentials', () => {
    cy.log(' Typing valid email');
    cy.get(selectors.emailInput)
      .should('be.visible')
      .type('sudiktamthapa@gmail.com');

    cy.log(' Typing valid password');
    cy.get(selectors.passwordInput)
      .should('be.visible')
      .type('Sudiktam@123');

    cy.log(' Clicking Login button');
    cy.get(selectors.loginButton)
      .should('be.enabled')
      .click();

    cy.log(' Verifying login success');
    cy.url().should('include', '/users/home');
    cy.contains('Streamline Your Property Listings').should('be.visible'); // Adjust based on actual UI text
  });
});
