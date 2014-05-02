package com.bdt.webdriver;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.*;
import org.openqa.selenium.ie.*;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.firefox.*;
import org.openqa.selenium.WebDriver;
import org.junit.*;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.Given;

public class StepDef extends CukeRunner {
	
	@Given("^I visit \"(.*?)\"$")
	public void i_visit(String arg1) {
		
		driveer.get(arg1);

	}

	@When("^I enter \"(.*?)\" into the \"(.*?)\" field$")
	public void i_enter_into_the_field(String arg1, String arg2) {

		driveer.findElement(By.id(arg2)).sendKeys(arg1);
		
	}

	@Then("^I should see the \"(.*?)\" text$")
	public void i_should_see_the_text(String arg1) {

		Assert.assertTrue(driveer.getPageSource().contains(arg1));

	}

	@Then("^I should see the \"(.*?)\" title$")
	public void i_should_see_the_title(String arg1) {

		System.out.println(driveer.getTitle());
		Assert.assertEquals(arg1, driveer.getTitle());
		
	}

	@Then("^I click on the \"(.*?)\" link$")
	public void i_click_on_the_link(String arg1) {

		driveer.findElement(By.linkText(arg1)).click();
		
	}

	
}
