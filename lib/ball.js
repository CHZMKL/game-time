const Paddle = require('./paddle');
var paddle = new Paddle();

function Ball(options) {
  options = options || {};
  this.x = options.x || 250;
  this.y = options.y || 500;
  this.width = 10;
  this.height = 10;
  this.speed = options.speed || 2;
  this.directionX = this.speed;
  this.directionY = -this.speed;
  this.paddle = new Paddle();
}

Ball.prototype.moveRight = function() {
  this.x = this.x + this.directionX;
};
Ball.prototype.moveUp = function() {
  this.y = this.y + this.directionY;
};

Ball.prototype.isCollidingWithObject = function(object) {
  return (this.x < object.x + object.width &&
    this.x + this.width > object.x &&
    this.y < object.y + object.height &&
    this.height + this.y > object.y);
};

Ball.prototype.bounce = function(object) {
  var ballBottom = this.y + this.height;
  var ballTop = this.y;
  var ballLeft = this.x - 2;
  var ballRight = this.x + this.width + 2;
  var objectBottom = object.y + object.height;
  var objectTop = object.y;
  var objectLeft = object.x;
  var objectRight = object.x + object.width;
  
}
// Ball.prototype.collisonDetectionX = function() {
//   if (this.x + this.directionX> 500-this.width || this.x + this.directionX < this.width) {
//     this.directionX = -this.directionX;
//   }
// };
//
// Ball.prototype.collisonDetectionY = function() {
// if (this.y + this.speedY < 0) {
//   this.speedY = -this.speedY;
// }
// };

module.exports = Ball;
