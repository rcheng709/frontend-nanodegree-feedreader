Udacity Project Feed Reader test

Overview:

In order for the Udacity student to learn how to use the Jasmine testing suite for javascript code.

<a href=https://rcheng709.github.io/frontend-nanodegree-feedreader>Check my results</a>

Steps I followed for Testing:

Please note either you can use the CLI commands using Jasmine or Jasmine spec from the Github repository.

I explored first the files given in this repository.

****It is obviously a RSS feed type of webpage.****

To test my Jasmine suite functionality, I edited app.js see if I get any failures. Then I corrected it back to pass the test.

the FEEDS:

Feeds are defined->

I tested that "allFeeds" variable has been defined and it is no longer empty.

URL Validation->

I validated the URL and performed a test that loops through each feed in "allFeeds" object.

Name Validation->

I validated the name and performed a test that loops each feed in "allFeeds" object.


the MENU:

Menu Validation Part 1->

This test will ensure that the menu element is hidden by default.

Menu Validation Part 2->

This test will ensure when the haburger icon is clicked it will change the visibility

Initial entries->

Test workability of loadFeed function and there is a ".entry" element in the ".feed" container

New Feed Selection validation->

When a a new feed is loaded, the "loadFeed" function content will update or change


References:

<a href=https://jasmine.github.io/2.0/introduction.html>Jasmine</a>
