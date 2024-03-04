class HomePageElements {

  cookieAcceptAllBtn() {
    return cy.get('.js-modal-privacy-button-accept');
  }
  searchbarInput() {
    return cy.get('#search-autocomplete');
  }

  searchIcon() {
    return cy.get('.search-button');
  }
}

export default HomePageElements;