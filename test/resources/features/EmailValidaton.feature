Feature: Email validation

    Scenario: Email validation without [at]
        Given User is on Home page
        When User clicks Catalog link
        And User clicks on Item link
        And User clicks on Add to cart item button        
        And item should be added to the cart        
        And User selects to create a new account
        And User enters not valid Email
        Then message about not valid Email appears