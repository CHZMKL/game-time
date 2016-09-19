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

    it('should have a default height', function() {
      assert.equal(ball.height, 10);
    });

    it('should have a default width', function() {
      assert.equal(ball.width, 10);
    });

    it('should be able to move right', function(){
      assert.equal(ball.x, 250);
      ball.moveRight();
      assert.equal(ball.x, 252);
    });

    it('should be able to move up', function(){
      assert.equal(ball.y, 500);
      ball.moveUp();
      assert.equal(ball.y, 498);
    });
});
});


    //
    // it('should change x direction when it hits left side', function(){
    //   var ball = new Ball({y:0, x: 13, speedX: -2});
    //   ball.collisonDetectionX();
    //   assert.equal(ball.x, 13);
    //   ball.moveRight();
    //   assert.equal(ball.x, 11);
    //   ball.collisonDetectionX();
    //   ball.moveRight();
    //   assert.equal(ball.x, 13);
    // });
    //
    // it('should change x direction when it hits right side', function(){
    //   var ball = new Ball({y:0, x: 488, speedX: 2});
    //   ball.collisonDetectionX();
    //   assert.equal(ball.x, 488);
    //   ball.moveRight();
    //   assert.equal(ball.x, 490);
    //   ball.collisonDetectionX();
    //   ball.moveRight();
    //   assert.equal(ball.x, 488);
