const Stadium = require('./world.js');
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var stadium = new Stadium();
var $ = require('jquery');

function drawStadium() {
  ctx.beginPath();
  ctx.rect(stadium.x, stadium.y, stadium.width, stadium.height);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function drawRowOfBricksRaiders() {
  for (var i = 0; i < stadium.level.length; i++) {
  ctx.beginPath();
  ctx.rect(stadium.level[i].x, stadium.level[i].y, stadium.level[i].width, stadium.level[i].height);
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

function gameWin() {
  if (this.level = []){
      $('.game-over').text('YOU WIN');
  }
}

function makeGameObjects() {
  drawStadium();
  drawBall();
  drawPaddle();
  drawRowOfBricksRaiders();
}

$('.raiders').on('click',function(){
stadium.makeBrickRow();

requestAnimationFrame(function gameLoop() {
      makeGameObjects();
      start(stadium);
      gameWin();
      requestAnimationFrame(gameLoop);
});
});

  document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { stadium.rightArrow(); }
  if (event.keyCode === 37) { stadium.leftArrow(); }
});
