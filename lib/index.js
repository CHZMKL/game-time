const Stadium = require('./world.js');
const Brick = require('./world.js');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var stadium = new Stadium();
stadium.addBrick();

function drawStadium() {
  ctx.beginPath();
  ctx.rect(stadium.x, stadium.y, stadium.width, stadium.height);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function drawBrick() {
  ctx.beginPath();
  ctx.rect(stadium.brick.x, stadium.brick.y, stadium.brick.width, stadium.brick.height);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
}

function drawRowOfBricks() {
  for (var i = 0; i < stadium.rowOfBricks.length; i++) {
  ctx.beginPath();
  ctx.rect(stadium.rowOfBricks[i].x, stadium.rowOfBricks[i].y, stadium.rowOfBricks[i].width, stadium.rowOfBricks[i].height);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();
  }
}

function drawBall() {
    ctx.beginPath();
    ctx.rect(stadium.ball.x, stadium.ball.y, stadium.ball.width, stadium.ball.height);
    ctx.fillStyle = "#663300";
    ctx.fill();
    ctx.closePath();
  }

function drawPaddle() {
      ctx.beginPath();
      ctx.rect(stadium.paddle.x, stadium.paddle.y, stadium.paddle.width, stadium.paddle.height);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
  }

function start(stadium) {
  stadium.start();
}

function makeGameObjects() {
  drawStadium();
  drawBall();
  drawPaddle();
  drawBrick();
  drawRowOfBricks();
}

function gameStart(){
  requestAnimationFrame(function gameLoop() {
      makeGameObjects();
      start(stadium);
      requestAnimationFrame(gameLoop);
    });
  }

  document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { stadium.rightArrow(); }
  if (event.keyCode === 37) { stadium.leftArrow(); }
});

document.addEventListener('keydown', function(event){
  if (event.keyCode === 32) {gameStart();}
  //   if(Game.firstLevel === true) {
      // start()
        // Game.firstLevel = false;
      // }
  //   else if(statium.blocks === 0)
  //  statium = new Statium({ball:{xy}}{}}
});
