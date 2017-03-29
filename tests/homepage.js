var robot = require('robotjs');

const tests = {
    'Home Page Tests': function(browser) {
        browser
            .url(browser.launchUrl)
            .maximizeWindow();

        robot.setMouseDelay(2);

        browser.waitForElementVisible('.hero .loanbuilder', 1000, function(){
            browser.getLocation('.hero .loanbuilder', function(locationResult){
                browser.getElementSize('.hero .loanbuilder', function(sizeResult){
                    var topLeft = locationResult.value;
                    var size = sizeResult.value;

                    const center = {
                        x: topLeft.x + size.width / 2,
                        y: topLeft.y + size.height / 2
                    };

                    console.log('Moving Mouse to: ' + JSON.stringify(center));

                    // Required for Firefox
                    robot.moveMouse(center.x, center.y);

                    browser.moveToElement('.hero .loanbuilder', size.width / 2, size.height / 2);

                    browser.pause(1000);

                    browser.expect.element('.hero .loanbuilder .hover-info')
                        .to.be.visible;
                });
            });
        });

        browser.pause(2000);

        browser.waitForElementVisible('.hero .swift', 1000, function(){
            browser.getLocation('.hero .swift', function(locationResult){
                browser.getElementSize('.hero .swift', function(sizeResult){
                    var topLeft = locationResult.value;
                    var size = sizeResult.value;

                    const center = {
                        x: topLeft.x + size.width / 2,
                        y: topLeft.y + size.height / 2
                    };

                    console.log('Moving Mouse to: ' + JSON.stringify(center));

                    // Required for Firefox
                    robot.moveMouse(center.x, center.y);

                    browser.moveToElement('.hero .swift', size.width / 2, size.height / 2);

                    robot.mouseClick();
                    browser.pause(1000);

                    browser.expect.element('.hero .swift .hover-info')
                        .to.be.visible;
                });
            });
        });

        browser
            .end();
    }
};


module.exports = tests;
