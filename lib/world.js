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

Stadium.prototype.tick = function() {
  this.BallHittingWall(this.ball);
  this.ballStart();
};

Stadium.prototype.rightArrow = function() {
    this.paddle.moveRight();
};

Stadium.prototype.leftArrow = function() {
    this.paddle.moveLeft();
};

module.exports = Stadium;
