import 'cypress-file-upload'
import 'cypress-real-events/support'
import 'cypress-xpath'

// eslint-disable-next-line n/handle-callback-err
Cypress.on('uncaught:exception', (_, __) => false)

beforeEach(() => {
  cy.clearCookies()
})
