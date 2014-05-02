package com.bdt.webdriver;

import java.util.concurrent.TimeUnit;

import cucumber.api.junit.*;
import org.junit.*;
import org.junit.runner.RunWith;
import org.openqa.selenium.firefox.FirefoxDriver;

import org.openqa.selenium.*;
import org.openqa.selenium.ie.*;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.firefox.*;
import org.openqa.selenium.WebDriver;

@RunWith(Cucumber.class)
@Cucumber.Options(
		format={"pretty", "html:target/cucumber"},
		features={"src/test/resources"}
		)

public class CukeRunner {

	public static WebDriver driveer;
	
	@BeforeClass
	public static void setUp() {
		driveer = new FirefoxDriver();
		driveer.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	@AfterClass
	public static void tearDown() {
		driveer.quit();
	}
	
}
