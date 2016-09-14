const world = require('./world');

var mx = 1;
var my = 1;

function Ball(options) {
  options = options || {};
  this.x = 250;
  this.y = 500;
  this.radius = 10;
}
Ball.prototype.moveRight = function ballMoveRight() {
  this.x = this.x + mx;
};
Ball.prototype.moveUp = function ballMoveUp() {
  this.y = this.y - mx;
};

Ball.prototype.collisonDection = function ballCollision() {
  if (this.x + mx >world.width-this.radius || this.x + mx <this.radius) {
    mx = -mx;
  }
  if (this.y + mx > world.height-this.radius || this.y + my < this.radius) {
    my = -my;
  }
};

module.exports = Ball;
