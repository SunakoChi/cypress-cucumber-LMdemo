Feature: Add product to cart

    Scenario Outline: Add a product <productId> to the cart
        Given a user on a product detail page
        When I add the product <productId> to cart
        Then the product <productId> has been added to cart