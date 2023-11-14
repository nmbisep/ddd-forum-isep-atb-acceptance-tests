Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I want to log into a secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a message saying <message>

    Examples:
      | username | password   | message                                                      |
      | me       | allowed    | Logged in! 🤠                                                |
      | me       | denied     | Had some trouble logging in! Password doesnt match error. 🤠 |
