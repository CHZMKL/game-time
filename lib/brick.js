const Ball = require('./ball.js');

function Brick(x, y) {
  this.x = x;
  this.y = y;
  this.width = 75;
  this.height = 25;
  this.rowBricks = 3;
  this.columnBricks = 5;
  this.status = true;
}




module.exports = Brick;
