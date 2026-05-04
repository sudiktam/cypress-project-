
  

describe('Login Test', () => {
  it('visits the login page and logs in', () => {
    cy.session('user-login-session', () => {
      cy.visit('https://frontend.develop.realinsights.ai/login');

      cy.get('.space-y-5 > :nth-child(1) > .w-full', { timeout: 10000 })
        .should('be.visible')
        .type('sudiktamthapa@gmail.com');

      cy.get('.space-y-5 > :nth-child(2) > .inline-flex', { timeout: 10000 })
        .should('be.visible')
        .click();

      cy.wait(20000); // Allow time for any page transitions

      // Handle the /confirm page if it appears
      cy.intercept('GET', '**/list-property').as('list-propertyPageLoad');

      cy.get('.inline-flex', { timeout: 10000 })
        .should('exist')
        .and('be.visible')
        .invoke('removeAttr', 'target')
        .click({ force: true });

      cy.wait(5000); // Wait for home page request
    });

    // Navigate to home after session is restored
    cy.visit('https://frontend.develop.realinsights.ai/users/848ef45e-c31a-4adb-ae31-798ba4515f23/list-property');
    
    
    cy.get(':nth-child(4) > .text-xl').scrollIntoView({duration:2000})
    cy.get('.grid > .cursor-pointer > .flex').click()

    cy.get('#street').type('TX-8 Beltway{enter}')
    cy.get('input[placeholder="Enter your Unit"]').type('12345')
    cy.get('#city').type('Houston')
    cy.get('#state').type('Texas')
    cy.get('#zip').type('77048')
    cy.get(':nth-child(2) > .inline-flex').click()


// Step 1: Open the dropdown
    cy.get('.content-top > .flex').click();

// Step 2: Select the desired option
    cy.contains('div', /^Land$/)
     .should('be.visible')
     .click({ force: true });

// Step 3: Confirm that the selected option is now shown
    cy.get('.content-top > .flex')
    .should('contain.text', 'Land');

    cy.get('#askingPrice').type('111111')
    cy.get('#squareFootage').type('1111') 
    cy.get('#lotSize').type('1111')
 
    cy.get('.grid.mt-5 > :nth-child(2) > :nth-child(1) > .gap-2 > .flex').click();
    cy.contains('div', /^Acres$/)
    .should('be.visible')
    .click({ force: true });
    
    cy.get('#description').type('slkfdhd kaskdhjfh skdhf dsj ')
    cy.get('.xs\\:w-fit > .inline-flex')
    .click()
    
    cy.get('.pb-3 > .flex > .inline-flex').click();
    cy.get('label input[type="file"].sr-only').attachFile(['image1.png','image2.jpg'])
    cy.contains('button', 'Upload').click();
    cy.wait(10000)
    cy.get('.xs\\:w-fit > .inline-flex').click()

    //drag and drop will be here 

    // cy.get(':nth-child(1) > .flex-wrap > :nth-child(1)').type('gym{entere}')
    cy.get(':nth-child(3) > .flex-wrap > :nth-child(2)').click()
    cy.get(':nth-child(1) > .flex-wrap > :nth-child(1)').click()
    cy.get('.xs\\:w-fit > .inline-flex').scrollIntoView({duration:2000}).click()

    cy.get('.mt-3 > :nth-child(2) > .inline-flex').click()
    cy.get('#name').type('abc')
    cy.get('#email').type('abc@gmail.com')
    cy.contains('button', 'Add Custom Message').click()
    cy.contains('button', 'Invite Listing Agent').click()
    cy.get(':nth-child(2) > .gap-1 > :nth-child(2) > .peer')
    .click()
    .should('have.attr', 'aria-checked', 'true')
    cy.get('.xs\\:w-fit > .inline-flex').click()

    cy.get('#companyName').type('abc')
    cy.get('#eOfficerName').type('xyz')
    cy.get('#eOfficerPhone').type('9812333456')
    cy.get('#eOfficerEmail').type('abc@gmail.com')
    cy.get('#escrowNumber').type('4455')
    cy.get('.xs\\:w-fit > .inline-flex').click()

    cy.visit('https://frontend.develop.realinsights.ai/homes/houston/tx-8-beltway-land-1bed-0bath-texas-77048-747')







    

    

  });
});

