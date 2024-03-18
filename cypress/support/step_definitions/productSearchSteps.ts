// Import of cucumber tags for Gherkin syntax
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { clickSearchIcon, closeCookiesPopin, searchbarTypeText } from '~/integration/pages/homePage/homePage'
import { getSearchResultsText } from '~/integration/pages/searchResultsPage/searchResultsPage';


Given('a user on the homepage',() => {
  cy.visit('/') //yields baseUrl defined in env
  closeCookiesPopin()
  });

When('I type {string} in the searchbar', (searchedElement : string) => {
  searchbarTypeText(searchedElement)
  });

When('click on the search icon', () => {
  clickSearchIcon()
  })

Then('my search results for {string} are returned', (searchedElement : string) => {
  getSearchResultsText(searchedElement)
  })