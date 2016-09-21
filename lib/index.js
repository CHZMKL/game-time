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
  ctx.strokeStyle="#C0C0C0";
  ctx.lineWidth=5;
  ctx.strokeRect(stadium.level[i].x, stadium.level[i].y, stadium.level[i].width, stadium.level[i].height);
  ctx.fill();
  ctx.closePath();
  }
}

function drawRowOfBricksPatriots() {
  for (var i = 0; i < stadium.level.length; i++) {
  ctx.beginPath();
  ctx.rect(stadium.level[i].x, stadium.level[i].y, stadium.level[i].width, stadium.level[i].height);
  ctx.fillStyle = "#0D254C";
  ctx.strokeStyle="#C80815";
  ctx.lineWidth=5;
  ctx.strokeRect(stadium.level[i].x, stadium.level[i].y, stadium.level[i].width, stadium.level[i].height);
  ctx.fill();
  ctx.closePath();
  }
}

function drawRowOfBricksPanthers() {
  for (var i = 0; i < stadium.level.length; i++) {
  ctx.beginPath();
  ctx.rect(stadium.level[i].x, stadium.level[i].y, stadium.level[i].width, stadium.level[i].height);
  ctx.fillStyle = "#0088CE";
  ctx.strokeStyle="#A5ACAF";
  ctx.lineWidth=5;
  ctx.strokeRect(stadium.level[i].x, stadium.level[i].y, stadium.level[i].width, stadium.level[i].height);
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

function makeGameObjectsPatriots() {
  drawStadium();
  drawBall();
  drawPaddle();
  drawRowOfBricksPatriots();
}

function makeGameObjectsRaiders() {
  drawStadium();
  drawBall();
  drawPaddle();
  drawRowOfBricksRaiders();
}

function makeGameObjectsPanthers() {
  drawStadium();
  drawBall();
  drawPaddle();
  drawRowOfBricksPanthers();
}

$('.patriots').on('click',function(){
stadium.makeBrickRowPatriots();
requestAnimationFrame(function gameLoop() {
      makeGameObjectsPatriots();
      start(stadium);
      requestAnimationFrame(gameLoop);
});
});

$('.raiders').on('click',function(){
stadium.makeBrickRowRaiders();
requestAnimationFrame(function gameLoop() {
      makeGameObjectsRaiders();
      start(stadium);
      requestAnimationFrame(gameLoop);
});
});

$('.panthers').on('click',function(){
stadium.makeBrickRowPanthers();
requestAnimationFrame(function gameLoop() {
      makeGameObjectsPanthers();
      start(stadium);
      requestAnimationFrame(gameLoop);
});
});

$('.reset').on('click',function(){
  document.location.reload(true);
});

  document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { stadium.rightArrow(); }
  if (event.keyCode === 37) { stadium.leftArrow(); }
});
