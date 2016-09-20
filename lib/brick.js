function Brick(x, y) {
  this.x = x;
  this.y = y;
  this.width = 100;
  this.height = 25;
  this.rowBricks = 3;
  this.columnBricks = 5;
  this.status = true;
}


module.exports = Brick;
