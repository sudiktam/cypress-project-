

describe('Add Rent Feature', () => {
  beforeEach(() => {
    cy.login(); // Use the session-based login
    cy.visit('https://staging.nepalniwas.com/users/list-property');
  });

  it('Step one of listing', () => {
    cy.get('.grid > :nth-child(2) > .flex').click();
    cy.wait(5000)
    cy.get('.border-t > .inline-flex').click()
    cy.contains('Tell us about your place').should('be.visible')
    

    cy.log('step one summary page');
     cy.get('.w-\\[6rem\\]').click()  
     cy.contains('What kind of place are you listing?').should('be.visible');
     cy.contains('Residential', { timeout: 2000 })
     .should('exist')
     .and('be.visible');
     cy.contains('Commercial').should('be.visible');
     cy.contains('Land').should('be.visible')


     cy.log('What kind of place are you listing?');
     cy.get(':nth-child(1) > .border').click()
     cy.get('.w-\\[6rem\\]').click()
     cy.contains('Which of these best describes your place?').should('be.visible')

     cy.log('place description');
     cy.get(':nth-child(1) > .border').click()
     cy.get('.w-\\[6rem\\]').click()
     cy.contains('Unfurnished').should('be.visible')

     cy.log('property status');
     cy.get(':nth-child(1) > .border').click()
     cy.get('.w-\\[6rem\\]').click()
     cy.contains('What type of place will guests have?')

     cy.log('rent space');
     cy.get(':nth-child(1) > .border').click()
     cy.get('.w-\\[6rem\\]').click()
     cy.contains('Are you authorized to share this space?').should('be.visible')

     cy.log('authorization');
     cy.get(':nth-child(1) > .border').click()
     cy.get('.w-\\[6rem\\]').click()

     cy.log('location');
     cy.get('.mt-4 > .relative > .flex').click()
     cy.get('.bg-card.shadow-lg').click()

     cy.get('#unit').type('2')
     cy.get(':nth-child(3) > .h-20 > .relative > .flex').select('Kathmandu')
     cy.get(':nth-child(4) > .h-20 > .relative > .flex').select('2')
     cy.get('#houseNumber').type('2')
     cy.get('.w-\\[6rem\\]').click()





     







    



    

  });
});


