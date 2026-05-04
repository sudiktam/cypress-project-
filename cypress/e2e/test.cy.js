// // it('handling confirm alert - ok ',function(){

// //     cy.visit('https://www.tutorialspoint.com/selenium/practice/alerts.php')
// //     cy.get(':nth-child(4) > .btn').click()

// //     cy.on('window:confirm',function(a){
// //         expect(a).to.contain('Press a button!')
// //     })
// //     //verifying the 

// //     cy.get('#desk').should('have.text','Ypu press OK!')
// // })

    
// // it ('logintest1',function(){
    
// //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        
// //     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
// //     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12')
// //     cy.get('.oxd-button').click()
    
// // })
// // describe('iframe handling', () => {
// //     it('approach1', () => {
// //       cy.visit('https://practice.expandtesting.com/iframe');
  
// //       // Grab the iframe’s body
// //      let iframe = cy.get('#mce_0_ifr')
// //         .its('0.contentDocument.body')
// //         .should('be.visible')
// //         .then(cy.wrap);
// //         // Instead of .clear(), select all + backspace
// //         iframe.clear()
// //         .type('cypress {ctrl+a}');

// //         cy.get('.tox-tbtn__select-chevron').click()
// //         cy.get('#menu-item_3998686846861742841197487').click()

// //     });
// //   });

// //assertion code 

// describe('assertion demo',function(){
//   it('assertion ',function(){

//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//       cy.url().should('include','orangehrmlive.com')
//       .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//       .should("contain","orangehrm")

//       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin ')
//       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
//       cy.get('.oxd-button').click()

//       let expName = 'bdulaziz Alkhlaiwe';// there should be a user name 

//       cy.get('.oxd-userdropdown-name').then( (a)=>{

//           let actName = a.text()
//           //TDD style 

//           assert.equal(actName,expName)
//           // assert.notEqual(actName,expName)

//           //BDD style 
//           // expect(actName).to.equal(expName)
//           // expect(actName).to.notequal(expName)





//       })


//   })
// })


// describe('Add property', () => {
//   beforeEach(() => {
//     cy.on('window:before:load', (win) => {
//       cy.stub(win, 'open').callsFake((url) => {
//         win.location.href = url;
//       });
//     });

//     cy.visit('https://frontend.develop.realinsights.ai');

//     cy.window().then((win) => {
//       const isLoggedIn = win.localStorage.getItem('userId') || win.sessionStorage.getItem('userId');

//       if (!isLoggedIn) {
//         cy.visit('https://frontend.develop.realinsights.ai/login');
//         cy.get('.space-y-5 > :nth-child(1) > .w-full').type('sudiktam57@gmail.com');
//         cy.get('.space-y-5 > :nth-child(2) > .inline-flex').click();

//         cy.wait(20000);

//         cy.get('.inline-flex', { timeout: 10000 })
//           .should('exist')
//           .and('be.visible')
//           .click();

//         cy.location('pathname', { timeout: 15000 }).should((path) => {
//           expect(path).to.satisfy((val) => val.includes('/confirm') || val.includes('/home'));
//         });

//         cy.url().then((url) => {
//           if (url.includes('/confirm')) {
//             cy.get('.inline-flex', { timeout: 10000 })
//               .should('exist')
//               .and('be.visible')
//               .click();

//             cy.location('pathname', { timeout: 15000 }).should('include', '/home');
//           }
//         });
//       }
//     });
//   });

//   it('should navigate to the add property page', () => {
//     cy.visit('https://frontend.develop.realinsights.ai/users/c3628e67-1766-4b65-95da-1dee8d5b37b8/home');
//     // cy.get('.property-form').should('be.visible'); // Adjust selector as needed
//   });
// });
it.skip ('Drag and drop using plugin ',()=>{
  cy.visit('https://testautomationpractice.blogspot.com/')
  cy.get('#draggable').should('be.visible')
  cy.get('#droppable').should('be.visible')

  cy.wait(5000)
  cy.get('#draggable').drag('#droppable',{force:true});
  
});
