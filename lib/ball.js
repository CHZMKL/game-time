const stadium = require('./world');

var mx = 1;
var my = 1;

function Ball(options) {
  options = options || {};
  this.x = 250;
  this.y = 480;
  this.radius = 10;
}
Ball.prototype.moveRight = function ballMoveRight() {
  this.x = this.x + mx;
};

Ball.prototype.moveLeft = function ballMoveLeft() {
  this.x = this.x - mx;
};

Ball.prototype.moveUp = function ballMoveUp() {
  this.y = this.y - my;
};

Ball.prototype.moveDown = function ballMoveDown() {
  this.y = this.y + my;
};


module.exports = Ball;
