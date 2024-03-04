Feature: Product search 

    Scenario: Search a product and validate with key
        Given a user on the homepage
        When I type "perçeuse" in the searchbar
        And press enter
        Then my search results are returned

        Scenario: Search a product and click on the search icon
        Given a user on the homepage
        When I type "rideaux" in the searchbar
        And click on the search icon
        Then my search results are returned

