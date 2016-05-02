var expect = require("chai").expect;
var handler = require("./handler.js");

describe('handler', function(){

  it('returns the right thing', function(){
    var event = {
      string: 'test',
      padding: 10
    };
    var context = {};
    var cb = function(error, response){
      expect(error).to.be.null;
      expect(response.paddedString).to.equal("      test");
    };
    handler.handler(event, context, cb);
  });

});

