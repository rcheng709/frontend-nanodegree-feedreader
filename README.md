**Udacity Project Feed Reader test**

**Overview:**

In order for the Udacity student to learn how to use the Jasmine testing suite for javascript code.

**Steps I followed for Testing:**

1. Open Google Chrome, on windows explorer you can drag and drop index.html on the browser's address bar.

2. The page will load Udacity Feeds.

3. Notice the bottom portion of the webpage with "Jasmine" notation

4. In order for your test to be successful, it should read "7 specs, 0 failures" highlighted in green.

![alt text](https://github.com/rcheng709/frontend-nanodegree-feedreader/testresult.png)

**Test Suites:**

Please note either you can use the CLI commands using Jasmine or Jasmine spec from the Github repository.

Note:I explored first the files given in this repository.


**the FEEDS:**

Feeds are defined->

-I tested that "allFeeds" variable has been defined and it is no longer empty.

URL Validation->

-I validated the URL and performed a test that loops through each feed in "allFeeds" object.

Name Validation->

-I validated the name and performed a test that loops each feed in "allFeeds" object.


**the MENU:**

Menu Validation Part 1->

-This test will ensure that the menu element is hidden by default.

Menu Validation Part 2->

-This test will ensure when the haburger icon is clicked it will change the visibility

Initial entries->

-Test workability of loadFeed function and there is a ".entry" element in the ".feed" container

New Feed Selection validation->

-When a a new feed is loaded, the "loadFeed" function content will update or change


**References:**

<a href=https://jasmine.github.io/2.0/introduction.html>Jasmine</a>
