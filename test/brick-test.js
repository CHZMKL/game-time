const chai = require('chai');
const assert = chai.assert;
const Brick = require('../lib/brick.js');

describe('Brick', function(){

  context('has default size', function(){
    var brick = new Brick();

    it('should have a default height', function()
  {
    assert.equal(brick.height, 25);
  });

    it('should have a default width', function() {
      assert.equal(brick.width, 75);
    });

  });
});
