import HomePageElements from "./homePageElements";

//initalise class value
const homePageElement = new HomePageElements

/**
 * Type a text in the searchbar
 * @param text Text to research  
 */
export const closeCookiesPopin = () => {
  if (homePageElement.cookieAcceptAllBtn().should('exist')) 
{
    homePageElement.cookieAcceptAllBtn().click()
}
};

/**
 * Type a text in the searchbar
 * @param text Text to research  
 */
export const searchbarTypeText = (text: string) => {
  homePageElement.searchbarInput().type(text)
};

/**
 * Press a key
 * @param key Name of the key
 */
export const pressKeyEnter = () => {
  homePageElement.searchbarInput().type('enter')
};

/**
 * Click on search icon
 * @param key Name of the key
 */
export const clickSearchIcon = () => {
  homePageElement.searchIcon()
};