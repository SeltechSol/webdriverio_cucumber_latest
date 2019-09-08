Feature: As a user, I have to check the main page functionality 
so that I can use it confidently

  Background:
        Given user navigates to site

  Scenario: Check the Product page Title
        When user navigates to product "product-page.html" page
        Then user should see product page title "Robot Parts Emporium" is present

 @prodHeading
  Scenario: Check the Product page Heading
        When user navigates to product page by clicking "product" button
        Then user should see product page heading "Totally Not Evil Sentient Robot" is present      