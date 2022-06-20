Feature: Password validation

    Scenario: User enters different passwords
        Given User on Homepage
        When User adds first item to cart
        And User clicks to cart
        And User proceeds with Checkout
        And User clicks to register account
        And User fills the form with different passwords
        Then error message «Password doesn’t not match» appears