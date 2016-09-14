const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball.js');

describe('Ball', function() {

  context('has default size and position', function() {
    var options = ({});
    var ball = new Ball(options);

    it('should have a default x coordinate', function() {
      assert.equal(ball.x, 250);
    });

    it('should have a default y coordinate', function() {
      assert.equal(ball.y, 500);
    });

    it('should have a default radius', function() {
      assert.equal(ball.radius, 10);
    });

    it('should move right', function(){
      assert.equal(ball.x, 250);
      ball.moveright();
      assert.equal(ball.x, 251);
    });
  });
});
