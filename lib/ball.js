const Stadium = require('./world.js');

var stadium = new Stadium();

var dx = 2;
var dy = -2;

function Ball(options) {
  options = options || {};
  this.x = 250;
  this.y = 500;
  this.radius = 10;
}
Ball.prototype.moveRight = function ballMoveRight() {
  this.x = this.x + dx;
};
Ball.prototype.moveUp = function ballMoveUp() {
  this.y = this.y + dy;
};

Ball.prototype.collisonDetectionX = function ballCollisionX() {
  if (this.x + dx> stadium.width-this.radius || this.x + dx < this.radius) {
    dx = -dx;
  }
};

Ball.prototype.collisonDetectionY = function ballCollisionY() {
if (this.y + dy > stadium.height-this.radius || this.y + dy < this.radius) {
  dy = -dy;
}
};

module.exports = Ball;
