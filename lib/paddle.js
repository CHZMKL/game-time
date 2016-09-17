function Paddle(options) {
  options = options || {};
  this.x = 250;
  this.y = 490;
  this.width= 80;
  this.height = 10;
}
Paddle.prototype.moveRight = function paddleMoveRight() {
  if (this.x < 420) {
  this.x = this.x + 10;
}
};

Paddle.prototype.moveLeft = function paddleMoveLeft() {
  if (this.x > 0) {
    this.x = this.x - 10;
}
};

module.exports = Paddle;
