import LoginPageElements from "./loginPageElements";

//initalise class value
const loginPageElement = new LoginPageElements

/**
 * Access base URL and check if user is logged in
 * @param url 
 */
export const goToUrl = (url: string) => {
  cy.visit(url)
};

/**
 * Click on the "Connexion via SSO button"
 * @param url 
 */
export const accessLoginPage = () => {
    loginPageElement.accessLoginButton().click()
};

/**
 * Input login information and validate
 * @param username 
 * @param password 
 */
export const login = (username: string, password: string) => {
  loginPageElement.usernameInput().type(username)
  loginPageElement.passwordInput().type(password)
  loginPageElement.signOnButton().click()
};

export const interceptUserMe = () => {
 cy.intercept('GET','**/user/me').as('userLoginStatus')
};