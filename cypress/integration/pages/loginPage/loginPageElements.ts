class LoginPageElements {

    accessLoginButton() {
        return cy.get('#card-action');
      }

    usernameInput() {
        return cy.get('#username');
      }

    passwordInput() {
        return cy.get('#password');
      }

    signOnButton() {
        return cy.get('#signOnButton');
      }
}

export default LoginPageElements;