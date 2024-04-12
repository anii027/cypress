Cypress.Commands.add('login',(user,password)=>{
    cy.contains("Login or register").click()
    cy.get('.returncustomer > .heading2').should('contain',"Returning Customer")
    cy.get('#loginFrm_loginname').type(user)
    cy.get('#loginFrm_password').type(password)
    cy.get('#loginFrm > fieldset > .btn').click()
    cy.get('.maintext').contains(' My Account')
 })

 
describe("Davaleba 1", () => {
    it("edit account details", () => {
      cy.visit("https://automationteststore.com/");
cy.login ('test192','password123')
cy.get('.side_account_list a').contains('Edit account details').click();
cy.get('#AccountFrm_firstname').type ("j")
cy.get('#AccountFrm').submit()
cy.contains('Success: Your account has been successfully updated.').should('be.visible') 
    });


    it("manage address book", () => {
        cy.visit("https://automationteststore.com/");
  cy.login ('test192','password123')
  cy.get('.side_account_list a').contains('Manage Address Book').click();
  cy.get(':nth-child(2) > table > tbody > tr > .pull-right > .button').click()
  cy.get('#AddressFrm_city').type ("2")
  cy.get('.col-md-12 > .btn-orange').click ()
  cy.contains('Your address has been successfully updated').should('be.visible') 
  
      });

      
    it("change password", () => {
        cy.visit("https://automationteststore.com/");
  cy.login ('test192','password123')
  cy.get('.side_account_list a').contains('Change password').click();
  cy.get('#PasswordFrm_current_password').type ("password123")
  cy.get('#PasswordFrm_password').type ('password1234')
  cy.get('#PasswordFrm_confirm').type ('password1234')
  cy.get('.col-md-12 > .btn-orange').click()
  cy.contains('Success: Your password has been successfully updated.').should('be.visible') 
   
  
      });


});
   