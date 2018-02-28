/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This is a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URL Validation - ensure the feeds to not have blank / empty URL', function() {
                     allFeeds.forEach(function(feed) {
                         expect(feed.url).toBeDefined();
                         expect(feed.url).not.toBe(''); 
                     });
                 });



        /* Written a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('Name validation - ensure the feeds to not have blank / empty names', function() {
                     allFeeds.forEach(function(feed) {
                         expect(feed.name).toBeDefined();
                         expect(typeof feed.name).toEqual('string');
                         expect(feed.name).not.toBe(''); 
                     });
                 });
    });


    /* Test Suite named "The menu" */
     describe('The menu', function() {

        /* This a test that ensures the menu element is
         * hidden by default. It will determine the performance of the
         * hiding/showing of the menu element.
         */
         it('Menu validation Part 1 - ensure the menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* This is a test that ensures the menu changes
          * visibility when the menu icon is clicked. 
          * The functionality of the menu display is tested with the expecation of:
          * it displays the menu when clicked
          * and hides when clicked again.
          */
           it('Menu validation Part 2 - ensure menu changes visibility when the menu icon is clicked', function() {
            var menu = $('.menu-icon-link');
            menu.click();             // Test whether menu gets displayed or not
            expect($('body').hasClass('menu-hidden')).toBe(false);


            menu.click();             // Test whether menu gets hidden or not
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {

            beforeEach(function(done) {
                loadFeed(0, function() {
                    done();
                });
            });
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         it('Feed Entry validation - esnure there is at least a single entry element within the feed container', function() {
                     var entryLen = ($('.feed .entry').length);  //$('.entry').length;
                     expect(entryLen).toBeGreaterThan(0);
                     
                 });
             });
    /* Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

           var feedFirst;
           var feedSecond;

           beforeEach(function(done) {
               loadFeed(0, function() {
                   feedFirst = $('.feed').html();
                   done();
               });
           });
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
    it('Feed content change validation - ensure when a new feed is loaded by the loadFeed function that the content actually changes', function(done) {
                loadFeed(1, function() {
                    feedSecond = $('.feed').html();
                    expect(feedSecond).not.toEqual(feedFirst);
                    done();
                });
            });
        });     
}());
