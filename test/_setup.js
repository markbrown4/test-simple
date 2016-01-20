var jsdom = require('jsdom');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;

// var fs = require("fs");
// var jquery = fs.readFileSync("./node_modules/jquery/dist/jquery.js", "utf-8");
//
// jsdom.env({
//   html: '<!doctype html><html><body></body></html>',
//   src: [jquery],
//   done: function (err, window) {
//     global.document = window.document;
//     global.$ = window.$;
//   }
// });
