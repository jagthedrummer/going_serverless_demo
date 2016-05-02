'use strict';

var spawn = require('child_process').spawn;
module.exports.handler = function(event, context) {
    var child = spawn('./lambda-function', [JSON.stringify(event, null, 2)]);
    child.stdout.on('data', function (data) { console.log("stdout:\n"+data); });
    child.stderr.on('data', function (data) { console.log("stderr:\n"+data); });
    child.on('close', function (code) { context.done(); });
}
