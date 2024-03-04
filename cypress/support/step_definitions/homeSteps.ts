// Import of cucumber tags for Gherkin syntax
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { clickSearchIcon, closeCookiesPopin, pressKey, searchbarTypeText } from '~/integration/pages/homePage/homePage'


Given('a user on the homepage',() => {
  cy.visit('/') //yields baseUrl defined in env
  closeCookiesPopin()
  });

When('I type {string} in the searchbar', (text : string) => {
  searchbarTypeText(text)
  });

When('press {string}', (keyname : string) => {
  pressKey(keyname)
  })

When('click on the search icon', () => {
  clickSearchIcon()
  })

Then('my search results are returned', () => {
  cy.url().should('contain.text','search?q=')
  //Assertion to implement
  })