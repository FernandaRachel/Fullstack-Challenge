Error.stackTraceLimit = Infinity;

require("../../fullstack-challenge2/node_modules/core-js/es6");
require("../../fullstack-challenge2/node_modules/core-js/es7/reflect");

require("../../fullstack-challenge2/node_modules/zone.js/dist/zone");
require("../../fullstack-challenge2/node_modules/zone.js/dist/long-stack-trace-zone");
require("../../fullstack-challenge2/node_modules/zone.js/dist/proxy");
require("../../fullstack-challenge2/node_modules/zone.js/dist/sync-test");
require("../../fullstack-challenge2/node_modules/zone.js/dist/jasmine-patch");
require("../../fullstack-challenge2/node_modules/zone.js/dist/async-test");
require("../../fullstack-challenge2/node_modules/zone.js/dist/fake-async-test");

var appContext = require.context("./app/", true, /\.spec\.ts/);

appContext.keys()
    .forEach(appContext);

var testing = require("@angular/core/testing");
var browser = require("@angular/platform-browser-dynamic/testing");

testing.TestBed.initTestEnvironment(
    browser.BrowserDynamicTestingModule,
    browser.platformBrowserDynamicTesting()
);
