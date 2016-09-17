const Stadium = require('./world.js');

function Paddle(options) {
  options = options || {};
  this.x = 250;
  this.y = 490;
  this.width= 80;
  this.height = 10;
}
Paddle.prototype.moveRight = function() {
  this.x = this.x + 10;

};
Paddle.prototype.moveLeft = function() {
  this.x = this.x - 10;

};

Paddle.prototype.hitLeftWall = function() {
  return this.x < Stadium.x;
};

Paddle.prototype.hitRightWall = function() {
  return (this.x + this.width) > 500;
};
// if paddle x is less than stadium x


module.exports = Paddle;
