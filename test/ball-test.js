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
      assert.equal(ball.y, 480);
    });

    it('should have a default radius', function() {
      assert.equal(ball.radius, 10);
    });

    it('should move right', function() {
      assert.equal(ball.x, 250);
      ball.moveRight();
      assert.equal(ball.x, 251);
    });

    it('should move left', function() {
      assert.equal(ball.x, 251);
      ball.moveLeft();
      assert.equal(ball.x, 250);
    });

    it('should move up', function(){
      assert.equal(ball.y, 500);
      ball.moveUp();
      assert.equal(ball.y, 499);
    });

    it('should move down', function() {
      assert.equal(ball.y, 499);
      ball.moveDown();
      assert.equal(ball.y, 500);
    });


  });
});
