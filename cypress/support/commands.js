// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// // cypress/support/commands.js
// Cypress.Commands.add('loginWithOTP', () => {
//     // Before visiting the page, add an event listener to intercept window.open
//     cy.visit('https://frontend.develop.realinsights.ai/login', {
//       onBeforeLoad(win) {
//         // Stub window.open to redirect in same tab instead of opening new tab
//         cy.stub(win, 'open').callsFake((url) => {
//           // Instead of opening a new window, change location of current window
//           win.location.href = url;
//           // Return an object that mimics the window that would have been returned
//           return {
//             focus: cy.stub()
//           };
//         });
//       }
//     });
    
//     // Continue with login process
//     cy.get('.space-y-5 > :nth-child(1) > .w-full').type('sudiktam57@gmail.com');
//     cy.get('.space-y-5 > :nth-child(2) > .inline-flex').click();
    
//     // Handle OTP entry and verification
//     // ...
    
//     // After login, directly navigate to the desired page
//     cy.visit('https://frontend.develop.realinsights.ai/users/d22d0428-ba9c-46f2-bd15-60e6bfd5c275/home');
//   });

import 'cypress-file-upload';
// cypress/support/commands.js

Cypress.Commands.add('login', () => {

//   window.localStorage.setItem('userId', 'yourUserId');
//   window.localStorage.setItem('accessToken', 'yourToken')
  cy.session('login-session', () => {
    cy.visit('https://staging.nepalniwas.com/login');

    cy.get('#email').type('sudiktamthapa@gmail.com');
    cy.get('#password').type('Sudiktam@123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/users/home'); // Confirm login worked
  });
});
