Feature: Search items in Ebay

  Scenario: Search for items Pilas

    Given Danny opens the eBay "https://www.ebay.com/"
    When Danny searches for "Pilas"
    Then Danny prints the number of items found