const Paddle = require('./paddle.js');
const Ball = require('./ball.js');
const Brick = require('./brick.js');
var $ = require('jquery');

function Stadium(options) {
  options = options || {};
  this.width= 500;
  this.height = 600;
  this.x = 0;
  this.y = 0;
  this.paddle = new Paddle();
  this.ball = new Ball();
  this.brick = new Brick();
  this.level = [];
  this.score = 0;
}

//Brick Building Raiders
Stadium.prototype.makeBrickRowRaiders = function() {
var brickX = 5;
var brickY = 25;
for (var i = 0; i < 4; i++) {
  this.level.push(new Brick(brickX += 85, brickY));
}
};

//Brick Building Patriots
Stadium.prototype.makeBrickRowPatriots = function() {
var brickX = 5;
var brickY = 25;
var brickX2 = 5;
var brickY2 = 60;
for (var i = 0; i < 4; i++) {
  this.level.push(new Brick(brickX += 85, brickY));
  this.level.push(new Brick(brickX2 += 85, brickY2));
}
};

//Brick Building Panthers
Stadium.prototype.makeBrickRowPanthers = function() {
var brickX = 5;
var brickY = 25;
var brickX2 = 5;
var brickY2 = 60;
var brickX3 = 5;
var brickY3 = 95;
for (var i = 0; i < 4; i++) {
  this.level.push(new Brick(brickX += 85, brickY));
  this.level.push(new Brick(brickX2 += 85, brickY2));
  this.level.push(new Brick(brickX3 += 85, brickY3));
}
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

Stadium.prototype.gameOver = function(ball) {
  if (ball.y >= 600) {
    $('.game-over').text('GAME OVER');
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

Stadium.prototype.alterBrickStatus = function(brick) {
  brick.status = false;
  this.renderLevel(brick);
};

Stadium.prototype.renderLevel = function() {
  this.level = this.level.filter(function(Brick) {
    return Brick.status === true;
  });
};

  Stadium.prototype.blockDetection = function() {
    this.level.forEach(function(brick){
      if (this.ball.isCollidingWithObject(brick)) {
        this.ball.directionY = -this.ball.directionY;
        this.alterBrickStatus(brick);
        this.score = this.score  + 1;
        $('.your-score').text(this.score);
      }
    }.bind(this));
  };

//Stadium functions combined
Stadium.prototype.start = function() {
  this.BallHittingWall(this.ball);
  this.ballStart(this.ball);
  this.BallCollideWithPaddle(this.paddle);
  this.gameOver(this.ball);
  this.blockDetection();
  this.renderLevel();
};

module.exports = Stadium;
