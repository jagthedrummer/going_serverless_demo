'use strict';

let leftpad = require('left-pad');

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'Go Serverless! Your Lambda function executed successfully!'
  });
};
