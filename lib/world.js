const Paddle = require('./paddle.js');
const Ball = require('./ball.js');

function Stadium(options) {
  options = options || {};
  this.width= 500;
  this.height = 500;
  this.x = 0;
  this.y = 0;
  this.paddle = new Paddle();
  this.ball = new Ball();
}

Stadium.prototype.BallHittingWall = function(ball) {
  if (ball.y <= 0){this.ball.directionY = -this.ball.directionY;}
  if (ball.x <= 0){this.ball.directionX = -this.ball.directionX;}
  if ((ball.x + ball.width) >= 500){this.ball.directionX = -this.ball.directionX;}
};

Stadium.prototype.ballStart = function(){
  this.ball.moveUp();
  this.ball.moveRight();
};

Stadium.prototype.isBallColliding = function(object) {
  return this.ball.isCollidingWithObject(object);
};

Stadium.prototype.tick = function() {
  this.BallHittingWall(this.ball);
  this.ballStart(this.ball);
  this.BallCollideWithPaddle(this.paddle);
};

Stadium.prototype.rightArrow = function() {
    this.paddle.moveRight();
};

Stadium.prototype.leftArrow = function() {
    this.paddle.moveLeft();
};

Stadium.prototype.BallCollideWithPaddle = function(paddle) {
  if (this.ball.isCollidingWithObject(paddle)) {
    this.ball.y = paddle.y - this.ball.height;
    if ((this.ball.x + this.ball.width > paddle.x) && ((this.ball.x + this.ball.width) < (paddle.x + 20))) {
      this.ball.moveUp();
      this.ball.moveRight();
    }
    if ((this.ball.x + this.ball.width > paddle.x + 20) && ((this.ball.x + this.ball.width) < (paddle.x + 40))) {
      this.ball.moveUp();
      this.ball.moveRight();
    }
    if ((this.ball.x >= paddle.x + 40) && (this.ball.x + this.ball.width <= paddle.x + 60)) {
      this.ball.moveUp();
      this.ball.moveRight();
    }
    if ((this.ball.x > paddle.x + 60) && ((this.ball.x + this.ball.width) < (paddle.x + paddle.width))) {
      this.ball.moveUp();
      this.ball.moveRight();
    }
  }
};

module.exports = Stadium;
