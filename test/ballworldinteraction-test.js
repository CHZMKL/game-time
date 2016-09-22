const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/ball.js');
const Stadium = require('../lib/world.js');
const Paddle = require('../lib/paddle.js');
const Brick = require('../lib/brick.js');

describe('Ball and World Interactions', function() {

    it('should change y direction when it hits y=0 of the world', function(){
      var ball = new Ball({y:4});
      var stadium = new Stadium();
      stadium.BallHittingWall(ball);
      assert.equal(ball.y, 4);
      ball.moveUp();
      assert.equal(ball.y, 0);
      stadium.BallHittingWall(ball);
      ball.moveDown();
      assert.equal(ball.y, 4);
    });

    it('should change x direction when it hits the right of the world', function(){
      var ball = new Ball({x:596});
      var stadium = new Stadium();
      stadium.BallHittingWall(ball);
      assert.equal(ball.x, 596);
      ball.moveRight();
      assert.equal(ball.x, 600);
      stadium.BallHittingWall(ball);
      ball.moveLeft();
      assert.equal(ball.x, 596);
    });

    it('should change x direction when it hits the left of the world', function(){
      var ball = new Ball({x:4});
      var stadium = new Stadium();
      stadium.BallHittingWall(ball);
      assert.equal(ball.x, 4);
      ball.moveLeft();
      assert.equal(ball.x, 0);
      stadium.BallHittingWall(ball);
      ball.moveRight();
      assert.equal(ball.x, 4);
    });

    it('should change Y directon when it collides with the paddle', function(){
      var ball = new Ball({y:586});
      var paddle = new Paddle({y:590});
      var stadium = new Stadium();
      stadium.BallCollideWithPaddle(paddle);
      assert.equal(ball.y, 586);
      ball.moveDown();
      stadium.BallCollideWithPaddle(paddle);
      ball.moveUp();
      assert.equal(ball.y, 586);
    });

    it('should change X direction to the right, when it collides with the right side of the paddle', function(){
      var ball = new Ball({x:249});
      var paddle = new Paddle({x:250});
      var stadium = new Stadium();
      stadium.BallCollideWithPaddle(paddle);
      assert.equal(ball.x, 249);
      ball.moveRight();
      stadium.BallCollideWithPaddle(paddle);
      ball.bounceLeft();
      assert.equal(ball.x, 253);
    });

    it('should change X direction to the left, when it collides with the left side of the paddle', function(){
      var ball = new Ball({x:334});
      var paddle = new Paddle({x:250});
      var stadium = new Stadium();
      stadium.BallCollideWithPaddle(paddle);
      assert.equal(ball.x, 334);
      ball.moveLeft();
      stadium.BallCollideWithPaddle(paddle);
      ball.bounceRight();
      assert.equal(ball.x, 330);
    });

    it('should change Y direction, when it collides with the brick', function(){
     var ball = new Ball({y:54});
     var brick = new Brick({y:25});
     var stadium = new Stadium();
     stadium.blockDetection(brick);
     assert.equal(ball.y, 54);
     stadium.makeBrickRowRaiders();
     ball.moveUp();
     stadium.blockDetection(brick);
     assert.equal(ball.y, 50);
   });

});
