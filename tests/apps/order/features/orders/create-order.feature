Feature: Create a new order
  In order to have orders in the platform
  As a user with admin permissions
  I want to create a new order

  Scenario: A valid non existing order
    Given I send a POST request to "/orders/" with body:
    """
    {
      "id": "2f4cb6e8-77dc-411d-82ef-77d4cadc8f7e"
    }
    """
    Then the response status code should be 201
    And the response should be empty
