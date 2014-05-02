Feature: Google Search
	As a Google user
	I want to search for things
	So I can find those things

Background:
	Given I visit "http://google.com"
	
Scenario: Search for Bruce Lee
	When I enter "Bruce Lee" into the "gbqfq" field
	Then I should see the "Google" title
	Then I click on the "Bruce Lee - Wikipedia, the free encyclopedia" link
	Then I should see the "Bruce Lee" text
	
Scenario: Search for Jackie Chan
	When I enter "Jackie Chan" into the "gbqfq" field
	Then I should see the "Google" title
	Then I click on the "Jackie Chan - Wikipedia, the free encyclopedia" link
	Then I should see the "Jackie Chan" text
	
Scenario: Test the Sampler
  Given I visit "https://sampling-qa.nexus.bazaarvoice.com/select_tenant"
  Then I should see the "Select Tenant" text
  Then I click on the "continue" link 
  Then I should see the "Account Sign In" text