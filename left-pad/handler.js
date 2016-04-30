'use strict';

let leftpad = require('left-pad');

module.exports.handler = function(event, context, cb) {
  var string = event.string;
  var padding = event.padding || 0;
  var paddedString = leftpad(string,padding);
  var payload = {
    paddedString: paddedString
  };
  return cb(null, payload);
};
