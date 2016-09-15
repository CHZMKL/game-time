function Ball(options) {
  options = options || {};
  this.x = options.x || 250;
  this.y = options.y || 500;
  this.radius = 10;
  this.speedX = options.speedX || 2;
  this.speedY = options.speedY || -2;
}
Ball.prototype.moveRight = function() {
  this.x = this.x + this.speedX;
};
Ball.prototype.moveUp = function() {
  this.y = this.y + this.speedY;
};

Ball.prototype.collisonDetectionX = function() {
  if (this.x + this.speedX> 500-this.radius || this.x + this.speedX < this.radius) {
    this.speedX = -this.speedX;
  }
};

Ball.prototype.collisonDetectionY = function() {
if (this.y + this.speedY < 0) {
  this.speedY = -this.speedY;
}
};

module.exports = Ball;
