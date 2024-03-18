Feature: Add product to cart

    Scenario Outline: Add a product <productId> to the cart
        Given a user on a the product page "89224180"
        When I add the product <productId> to cart
        And With options : <options>
        Then the product has been added to cart

    Example: 
    | productId | options | | 