
global.document = require('jsdom').jsdom('<html></html>');
global.window = document.defaultView;
global.$ = require('jquery')(window);
window.fetch = require('whatwg-fetch').fetch;
var promise = require('es6-promise');
window.Promise = promise.Promise;
window.Response = promise.Response;
