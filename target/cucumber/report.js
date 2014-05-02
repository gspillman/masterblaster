$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "id": "google-search",
  "description": "As a Google user\nI want to search for things\nSo I can find those things",
  "name": "Google Search",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 6,
  "type": "background"
});
formatter.step({
  "name": "I visit \"http://google.com\"",
  "keyword": "Given ",
  "line": 7
});
formatter.match({
  "arguments": [
    {
      "val": "http://google.com",
      "offset": 9
    }
  ],
  "location": "StepDef.i_visit(String)"
});
formatter.result({
  "duration": 1143947000,
  "status": "passed"
});
formatter.scenario({
  "id": "google-search;search-for-bruce-lee",
  "description": "",
  "name": "Search for Bruce Lee",
  "keyword": "Scenario",
  "line": 9,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"Bruce Lee\" into the \"gbqfq\" field",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "I should see the \"Google\" title",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "I click on the \"Bruce Lee - Wikipedia, the free encyclopedia\" link",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I should see the \"Bruce Lee\" text",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "arguments": [
    {
      "val": "Bruce Lee",
      "offset": 9
    },
    {
      "val": "gbqfq",
      "offset": 30
    }
  ],
  "location": "StepDef.i_enter_into_the_field(String,String)"
});
formatter.result({
  "duration": 237634000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 18
    }
  ],
  "location": "StepDef.i_should_see_the_title(String)"
});
formatter.result({
  "duration": 14247000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bruce Lee - Wikipedia, the free encyclopedia",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_the_link(String)"
});
formatter.result({
  "duration": 1397289000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bruce Lee",
      "offset": 18
    }
  ],
  "location": "StepDef.i_should_see_the_text(String)"
});
formatter.result({
  "duration": 1876826000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 6,
  "type": "background"
});
formatter.step({
  "name": "I visit \"http://google.com\"",
  "keyword": "Given ",
  "line": 7
});
formatter.match({
  "arguments": [
    {
      "val": "http://google.com",
      "offset": 9
    }
  ],
  "location": "StepDef.i_visit(String)"
});
formatter.result({
  "duration": 452702000,
  "status": "passed"
});
formatter.scenario({
  "id": "google-search;search-for-jackie-chan",
  "description": "",
  "name": "Search for Jackie Chan",
  "keyword": "Scenario",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"Jackie Chan\" into the \"gbqfq\" field",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "I should see the \"Google\" title",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "I click on the \"Jackie Chan - Wikipedia, the free encyclopedia\" link",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "I should see the \"Jackie Chan\" text",
  "keyword": "Then ",
  "line": 19
});
formatter.match({
  "arguments": [
    {
      "val": "Jackie Chan",
      "offset": 9
    },
    {
      "val": "gbqfq",
      "offset": 32
    }
  ],
  "location": "StepDef.i_enter_into_the_field(String,String)"
});
formatter.result({
  "duration": 162503000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 18
    }
  ],
  "location": "StepDef.i_should_see_the_title(String)"
});
formatter.result({
  "duration": 10934000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jackie Chan - Wikipedia, the free encyclopedia",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_the_link(String)"
});
formatter.result({
  "duration": 1156068000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jackie Chan",
      "offset": 18
    }
  ],
  "location": "StepDef.i_should_see_the_text(String)"
});
formatter.result({
  "duration": 1706148000,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 6,
  "type": "background"
});
formatter.step({
  "name": "I visit \"http://google.com\"",
  "keyword": "Given ",
  "line": 7
});
formatter.match({
  "arguments": [
    {
      "val": "http://google.com",
      "offset": 9
    }
  ],
  "location": "StepDef.i_visit(String)"
});
formatter.result({
  "duration": 1002666000,
  "status": "passed"
});
formatter.scenario({
  "id": "google-search;test-the-sampler",
  "description": "",
  "name": "Test the Sampler",
  "keyword": "Scenario",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "I visit \"https://sampling-qa.nexus.bazaarvoice.com/select_tenant\"",
  "keyword": "Given ",
  "line": 22
});
formatter.step({
  "name": "I should see the \"Select Tenant\" text",
  "keyword": "Then ",
  "line": 23
});
formatter.step({
  "name": "I click on the \"continue\" link",
  "keyword": "Then ",
  "line": 24
});
formatter.step({
  "name": "I should see the \"Account Sign In\" text",
  "keyword": "Then ",
  "line": 25
});
formatter.match({
  "arguments": [
    {
      "val": "https://sampling-qa.nexus.bazaarvoice.com/select_tenant",
      "offset": 9
    }
  ],
  "location": "StepDef.i_visit(String)"
});
formatter.result({
  "duration": 415773000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select Tenant",
      "offset": 18
    }
  ],
  "location": "StepDef.i_should_see_the_text(String)"
});
formatter.result({
  "duration": 217881000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "continue",
      "offset": 16
    }
  ],
  "location": "StepDef.i_click_on_the_link(String)"
});
formatter.result({
  "duration": 30056914000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"link text\",\"selector\":\"continue\"}\nCommand duration or timeout: 30.05 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027Williams-FW14B.local\u0027, ip: \u002710.200.17.166\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_45\u0027\nSession ID: bb76e6ad-4f65-6a4f-ba0b-490d78820989\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, webStorageEnabled\u003dtrue, nativeEvents\u003dfalse, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d28.0}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:193)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:145)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:397)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:242)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\n\tat com.bdt.webdriver.StepDef.i_click_on_the_link(StepDef.java:48)\n\tat ✽.Then I click on the \"continue\" link(GoogleSearch.feature:24)\nCaused by: org.openqa.selenium.remote.ErrorHandler$UnknownServerException: Unable to locate element: {\"method\":\"link text\",\"selector\":\"continue\"}\nBuild info: version: \u00272.41.0\u0027, revision: \u00273192d8a6c4449dc285928ba024779344f5423c58\u0027, time: \u00272014-03-27 11:29:39\u0027\nSystem info: host: \u0027Williams-FW14B.local\u0027, ip: \u002710.200.17.166\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.2\u0027, java.version: \u00271.7.0_45\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/bl/czk4trfd74b819d6kfv64d51fdly8l/T/anonymous1909912262403029078webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:8905)\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///var/folders/bl/czk4trfd74b819d6kfv64d51fdly8l/T/anonymous1909912262403029078webdriver-profile/extensions/fxdriver@googlecode.com/components/driver_component.js:396)\n"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Sign In",
      "offset": 18
    }
  ],
  "location": "StepDef.i_should_see_the_text(String)"
});
formatter.result({
  "status": "skipped"
});
});