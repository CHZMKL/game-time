const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball.js');
const Stadium = require('../lib/world.js');

describe('Ball and World Interactions', function() {

    it('should change y direction when it hits y=0 of the world', function(){
      var ball = new Ball({y:2});
      var stadium = new Stadium();
      stadium.BallHittingWall(ball);
      assert.equal(ball.y, 2);
      ball.moveUp();
      assert.equal(ball.y, 0);
      stadium.BallHittingWall(ball);
      ball.moveDown();
      assert.equal(ball.y, 2);
    });

    it('should change x direction when it hits the right of the world', function(){
      var ball = new Ball({x:498});
      var stadium = new Stadium();
      stadium.BallHittingWall(ball);
      assert.equal(ball.x, 498);
      ball.moveRight();
      assert.equal(ball.x, 500);
      stadium.BallHittingWall(ball);
      ball.moveLeft();
      assert.equal(ball.x, 498);
    });

    it('should change x direction when it hits the left of the world', function(){
      var ball = new Ball({x:2});
      var stadium = new Stadium();
      stadium.BallHittingWall(ball);
      assert.equal(ball.x, 2);
      ball.moveLeft();
      assert.equal(ball.x, 0);
      stadium.BallHittingWall(ball);
      ball.moveRight();
      assert.equal(ball.x, 2);
    });

    it.skip('should change Y directon when it collides with the paddle', function(){
    });

    it.skip('should change X direction to the right, when it collides with the right side of the paddle', function(){
    });

    it.skip('should change X direction to the left, when it collides with the left side of the paddle', function(){
    });

});
