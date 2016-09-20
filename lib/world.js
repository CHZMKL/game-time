const Paddle = require('./paddle.js');
const Ball = require('./ball.js');
const Brick = require('./brick.js');

function Stadium(options) {
  options = options || {};
  this.width= 500;
  this.height = 500;
  this.x = 0;
  this.y = 0;
  this.paddle = new Paddle();
  this.ball = new Ball();
  this.brick = new Brick();
  this.level = [];
}

//Brick Building
Stadium.prototype.makeBrickRow = function() {
var brickX = 15;
var brickY = 25;
for (var i = 0; i < 4; i++) {
  this.level.push(new Brick(brickX += 80, brickY));
}
// return this.level;
console.log(this.level);
};



//Ball Interactions
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

Stadium.prototype.gameOver = function(ball) {
  if (ball.y >= 500) {
    console.log("game over");
    document.location.reload();
  }
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



  Stadium.prototype.blockDetection = function() {
    this.level.forEach(function(brick){
      if (this.ball.isCollidingWithObject(brick)) {
        this.ball.y = brick.y + brick.height;

        // if ((this.ball.x + this.ball.width + this.ball.directionX > brick.x) && ((this.ball.x + this.ball.width + this.ball.directionX) < (brick.x + 40))) {
        //   this.ball.bounceLeft();
        // }
        //
        // if ((this.ball.x + this.ball.directionX> brick.x + 40) && ((this.ball.x + this.ball.width + this.ball.directionX) < (brick.x + brick.width))) {
        //   this.ball.bounceRight();
        // }
      }
    }.bind(this));
  };



//Stadium functions combined
Stadium.prototype.start = function() {
  // this.createBlocks();
  this.BallHittingWall(this.ball);
  this.ballStart(this.ball);
  this.BallCollideWithPaddle(this.paddle);
  this.gameOver(this.ball);
  this.makeBrickRow(this.level);
  this.blockDetection(this.level);
};

module.exports = Stadium;
