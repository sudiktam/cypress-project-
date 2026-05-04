describe('Signup Flow Test', () => {
  it('should sign up and proceed through verification steps', () => {
    cy.visit('https://staging.nepalniwas.com/login');

    // Go to signup page
    cy.get('.text-\\[\\#313957\\].font-medium.hover\\:underline').click();
    cy.contains('Create your account').should("be.visible");

    // Fill signup form
    cy.get('#name').type('test');
    cy.get('#email').type('figabip264@daupload.com');
    cy.get('#password').type('Test@123');
    cy.get('#confirmPassword').type('Test@123');
    cy.get('.space-y-5 > .py-4').click();

    // Wait for verification page
    cy.wait(20000);
    cy.get('.bg-\\[\\#d9d9d9\\]').click();

    // user current location page
    cy.get('.mt-2 > .w-full').click()
    cy.get('.bg-custom-primary').click();
    cy.wait(5000)
    cy.get('.mt-6 > .font-bold').click()

    //selcet role page 
    cy.get('.space-y-4 > :nth-child(1)').click()
    cy.get('form > :nth-child(2) > .w-full').click()

    // create your workspace page
     cy.get('#marketing').check()
     cy.get(':nth-child(1) > div.w-full > .w-full').click()

     // name your workspace page
     cy.get('.mt-6 > .py-4').click()
     

  
  });
});
