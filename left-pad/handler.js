'use strict';

let leftpad = require('left-pad');

function instructions(){
  return {
    "instructions": "Include at least a 'string' query param, and optinally a 'padding' param.",
    "example": "?string=Just+a+test&padding=20"
  };
}

module.exports.handler = function(event, context, cb) {
  if(!event.string && !event.padding){
    return cb(null, instructions());
  }
  var string = event.string || "";
  var padding = event.padding || 0;
  var paddedString = leftpad(string,padding);
  var payload = {
    paddedString: paddedString
  };
  return cb(null, payload);
};
