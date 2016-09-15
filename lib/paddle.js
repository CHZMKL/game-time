const Stadium = require('./world.js');

function Paddle(options) {
  options = options || {};
  this.x = 250;
  this.y = 490;
  this.width= 80;
  this.height = 10;
}
Paddle.prototype.moveRight = function paddleMoveRight() {
  this.x = this.x + 10;
  if (this.x < Stadium.x (
    this.x = this.x + 1));

Paddle.prototype.moveLeft = function paddleMoveLeft() {
  this.x = this.x - 10;
  if (this.x > Stadium.width (this.x = this.x - 1)
)


module.exports = Paddle;
