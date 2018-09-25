var assert = require('assert');

describe('Google demo test for Mocha', function() {
    describe('with Nightwatch', function() {


        before(function(browser, done) {
            done();
        });

        after(function(browser, done) {
            browser.end(function() {
                done();
            });
        });

        afterEach(function(browser, done) {
            done();
        });

        beforeEach(function(browser, done) {
            done();
        });

        it('uses BDD to run the Google simple test', function(browser) {
            browser
                .url('http://google.com')
                .expect.element('body').to.be.present.before(1000);

            browser.setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
                .pause(1000)
                .assert.containsText('#main', 'Night Watch');
            browser
                .url('http://www.baidu.com')
                .waitForElementVisible('body', 1000)
                .end();
        });

    });
});