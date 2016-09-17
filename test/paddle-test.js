const chai = require('chai');
const assert = chai.assert;
const Paddle = require('../lib/paddle.js');

describe('Paddle', function() {

  context('has default size and position', function() {
    var options = ({});
    var paddle = new Paddle(options);

    it('should have a default x coordinate', function() {
      assert.equal(paddle.x, 250);
    });

    it('should have a default y coordinate', function() {
      assert.equal(paddle.y, 490);
    });

    it('should have a default width', function() {
      assert.equal(paddle.width, 80);
    });
    it('should have a default height', function() {
      assert.equal(paddle.height, 10);
    });

    it('should move right', function(){
      assert.equal(paddle.x, 250);
      paddle.moveRight();
      assert.equal(paddle.x, 251);
    });

    it('should move left', function(){
      assert.equal(paddle.x, 251);
      paddle.moveLeft();
      assert.equal(paddle.x, 250);

    it('should stop before the left side of the paddle makes contact with the left stadium border', function(){
      assert.equal(paddle.x, 0);

    } );

    it('should stop before the right side of the paddle makes contact with the right stadium border', function(){
      assert.equal(paddle.x, 500);
    });
    });
  });
});
