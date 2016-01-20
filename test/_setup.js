
var jsdom = require('jsdom');

global.document = jsdom.jsdom('<html></html>');
global.window = document.defaultView;
global.$ = require('jquery')(window);
