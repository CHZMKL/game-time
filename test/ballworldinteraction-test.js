const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball.js');
const Stadium = require('../lib/world.js');

describe('Ball', function() {

    it('should change y direction when it hits y=0 of the world', function(){
      var ball = new Ball({y:1, x: 0});
      ball.collisonDetectionY();
      assert.equal(ball.y, 1);
      ball.moveUp();
      assert.equal(ball.y, -1);
      ball.collisonDetectionY();
      ball.moveUp();
      assert.equal(ball.y, 1);
    });

    it('should change x direction when it hits the max or min x of the world', function(){
      ball.collisonDetectionX();
    });
  });
});
