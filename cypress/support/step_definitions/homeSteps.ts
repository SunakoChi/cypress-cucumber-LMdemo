// Import of cucumber tags for Gherkin syntax
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { clickSearchIcon, closeCookiesPopin, pressKeyEnter, searchbarTypeText } from '~/integration/pages/homePage/homePage'


Given('a user on the homepage',() => {
  cy.visit('/') //yields baseUrl defined in env
  closeCookiesPopin()
  });

When('I type {string} in the searchbar', (text : string) => {
  searchbarTypeText(text)
  });

When('press enter', () => {
  pressKeyEnter()
  })

When('click on the search icon', () => {
  clickSearchIcon()
  })

Then('my search results are returned', () => {
  cy.url()
  //Assertion to implement
  })