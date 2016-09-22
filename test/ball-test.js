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
      assert.equal(ball.y, 600);
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
      assert.equal(ball.x, 254);
    });

    it('should be able to move left', function(){
    assert.equal(ball.x, 254);
    ball.moveLeft();
    assert.equal(ball.x, 250);
    });

    it('should be able to move up', function(){
      assert.equal(ball.y, 600);
      ball.moveUp();
      assert.equal(ball.y, 596);
    });

    it('should be able to move down', function(){
     assert.equal(ball.y, 596);
     ball.moveDown();
     assert.equal(ball.y, 600);
   });
});
});
