function Ball(options) {
  options = options || {};
  this.x = 250;
  this.y = 500;
  this.radius = 10;
}
Ball.prototype.moveRight = function ballMoveRight() {
  this.x = this.x + 1;
};
Ball.prototype.moveUp = function ballMoveUp() {
  this.y = this.y -1;
};
module.exports = Ball;
