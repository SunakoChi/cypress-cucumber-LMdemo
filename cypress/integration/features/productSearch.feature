Feature: Product search 

    Scenario: Search a product and validate
        Given a user on the homepage
        When I type "lampe pipistrello" in the searchbar
        And click on the search icon
        Then my search results for "lampe pipistrello" are returned

        Scenario: Search a product and click on the search icon
        Given a user on the homepage
        When I type "balai d'atelier" in the searchbar
        And click on the search icon
        Then my search results for "balai d'atelier" are returned