function Ball(options) {
  options = options || {};
  this.x = options.x || 250;
  this.y = options.y || 500;
  this.width = 10;
  this.height = 10;
  this.speed = options.speed || 4;
  this.directionX = this.speed;
  this.directionY = -this.speed;
}

Ball.prototype.moveRight = function() {
  this.x = this.x + this.directionX;
};

Ball.prototype.moveLeft = function() {
  this.x = this.x - this.directionX;
};

Ball.prototype.moveUp = function() {
  this.y = this.y + this.directionY;
};

Ball.prototype.moveDown = function() {
  this.y = this.y - this.directionY;
};

Ball.prototype.isCollidingWithObject = function(object) {
  return (this.x < object.x + object.width &&
    this.x + this.width > object.x &&
    this.y < object.y + object.height &&
    this.height + this.y > object.y);
};

Ball.prototype.isCollidingWithObjectBottom = function(object) {
  return (this.x < object.x + object.width &&
    this.x + this.width > object.x &&
    this.y > object.y + object.height &&
    this.y < object.y + object.height);
};

Ball.prototype.bounceLeft = function() {
  this.directionY = -this.speed;
  this.directionX = -this.speed;
};

Ball.prototype.bounceRight = function() {
  this.directionY = -this.directionY;
  this.directionX = this.speed;
};

module.exports = Ball;
