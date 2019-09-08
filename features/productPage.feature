Feature: As a user, I have to check the Product page functionality 
so that I can use it confidently

  Background:
    Given user navigates to site
    When user navigates to product page by clicking "product" button
  
  @buyNowButton
  Scenario: Check the Buy Now button gets enabled
    When user types "10" quantity in the quantity box
    Then user should see the "Buy Now" button gets enabled

  @checkReviewMessages
  Scenario: Check the Error message for both email and password
    When user clicks to add the review
    Then user should see following two error messages
       |Type|ErrorMessage|
       |Email|Please enter a valid email address.|
       |Password|A review without text isn't much of a review.|
  
