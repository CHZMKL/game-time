const Stadium = require('./world.js');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var stadium = new Stadium();
gameStart();

function drawStadium() {
  ctx.beginPath();
  ctx.rect(stadium.x, stadium.y, stadium.width, stadium.height);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
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

function tick(stadium) {
  stadium.tick();
}

function makeGameObjects() {
  drawStadium();
  drawBall();
  drawPaddle();
}

function gameStart(){
  requestAnimationFrame(function gameLoop() {
      makeGameObjects();
      tick(stadium);
      requestAnimationFrame(gameLoop);
    });
  }
