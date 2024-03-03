import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { baseUrl } from '~/fixtures/login'
import { goToUrl, interceptUserMe, login } from '~/integration/pages/loginPage/loginPage'
import { accessLoginPage } from '~/integration/pages/loginPage/loginPage'
import { getUserFromDatabase, removeUserFromDatabase } from '~/integration/utils/bff-requests-utils'

//DO NOT REMOVE : used in creation steps
Given('{string} logged in',(user: string) => {
  cy.visit(baseUrl)
  accessLoginPage()
  if (user == 'viewer') {
    login("10164773","ler123")
  }
  else {
    login("10164772","ler123")
  }
})

Given('user not logged in', () => {
  })

Given('user on {string} page', (path : string) => {
  cy.visit(baseUrl+"/"+path)
  })

Given('user {string} with role {string} has never been on the app', (ldap: string, role: string) => {
  removeUserFromDatabase(ldap)
})

When('user goes to the app URL', () => {
  cy.visit(baseUrl)
  })

When('user visits page {string}', (page : string) => {
  cy.visit(baseUrl+"/"+page)
  })

When('user login with ldap {string} and password {string}', (username : string, password : string) => {
  accessLoginPage()
  login(username,password)
  interceptUserMe()
  })

When('user is redirected to {string} page', (path : string) => {
  cy.url().should('eq', baseUrl+"/"+path)
  })

Then('user is logged in', () => {
  cy.get('@userLoginStatus').its('response.statusCode').should('eq',200)
})

Then('user is not logged in', () => {
  cy.url().should('not.eq',baseUrl+"/home")
});

Then('user cannot access creation page', () => {
  cy.visit(baseUrl+"/home/create")
  //Check redirection
  cy.url().should('be.eq', baseUrl+"/home/not-allowed")
  //Check visual elements of the page
  cy.get('[data-test-id=pageNotExist]').should('be.visible'). and('have.text',"Vous ne disposez pas des autorisations requises pour accéder à cette page")
  cy.get('[data-test-id=tPageNotFoundComponent-test]').should('be.visible'). and('have.attr','src')
  cy.get('[data-test-id=redirectList]').should('be.visible')
  })

  Then('user {string} role is {string}', (ldap : string, expectedRole : string) => {
    getUserFromDatabase(ldap)
    cy.get('@request')
    .its('status').should('eq',200)
    cy.get('@request')
    .its('body.roles').should('contain', expectedRole)
    cy.log("User found: " +ldap+" with role: "+expectedRole);
  })