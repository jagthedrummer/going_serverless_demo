'use strict';

var spawn = require('child_process').spawn;
module.exports.handler = function(event, context, callback) {
    var child = spawn('./mruby', ['handler.rb', JSON.stringify(event, null, 2)]);
    var rubyOutput = [];
    child.stdout.on('data',function (data) {
      rubyOutput.push(data.toString());
      console.log("stdout:\n"+data);
    });
    child.stderr.on('data', function (data) {
      rubyOutput.push(data);
      console.log("stderr:\n"+data.toString());
    });
    child.on('close', function (code) {
      callback(null,{
        message: "We're back from ruby land",
        rubyOutput: rubyOutput
      });
    });
}
