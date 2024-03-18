import SearchResultsElements from "./searchResultsPageElements";

//initalise class value
const searchResultsElement = new SearchResultsElements

/**
 * Assert the text from the search
 * @param url 
 */
export const getSearchResultsText = (text: string) => {
    searchResultsElement.searchResultsText().should('contain', text)
  };
  
