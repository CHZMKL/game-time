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

//Ball Interactions
Stadium.prototype.BallHittingWall = function(ball) {
  if (ball.y <= 0){this.ball.directionY = -this.ball.directionY;}
  if (ball.x <= 0){this.ball.directionX = -this.ball.directionX;}
  if ((ball.x + ball.width) >= 500){this.ball.directionX = -this.ball.directionX;}
};

Stadium.prototype.gameOver = function(ball) {
  if (ball.y >= 500) {
    console.log("game over");
    document.location.reload();
  }
};

Stadium.prototype.ballStart = function(){
  this.ball.moveUp();
  this.ball.moveRight();
};

Stadium.prototype.isBallColliding = function(object) {
  return this.ball.isCollidingWithObject(object);
};

//Paddle Interactions
Stadium.prototype.rightArrow = function() {
    this.paddle.moveRight();
};

Stadium.prototype.leftArrow = function() {
    this.paddle.moveLeft();
};

Stadium.prototype.BallCollideWithPaddle = function(paddle) {
  if (this.ball.isCollidingWithObject(paddle)) {
    this.ball.y = paddle.y - this.ball.height;

    if ((this.ball.x + this.ball.width + this.ball.directionX > paddle.x) && ((this.ball.x + this.ball.width + this.ball.directionX) < (paddle.x + 40))) {
      this.ball.bounceLeft();
    }

    if ((this.ball.x + this.ball.directionX> paddle.x + 40) && ((this.ball.x + this.ball.width + this.ball.directionX) < (paddle.x + paddle.width))) {
      this.ball.bounceRight();
    }
  }
};

//Stadium functions combined
Stadium.prototype.start = function() {
  this.BallHittingWall(this.ball);
  this.ballStart(this.ball);
  this.BallCollideWithPaddle(this.paddle);
  this.gameOver(this.ball);
};

module.exports = Stadium;
