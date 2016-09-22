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
      ctx.fillStyle = "#F36A24";
      ctx.strokeStyle="#002244";
      ctx.lineWidth=3;
      ctx.strokeRect(stadium.paddle.x, stadium.paddle.y, stadium.paddle.width, stadium.paddle.height);
      ctx.fill();
      ctx.closePath();
  }

function start(stadium) {
  stadium.start();
}

function gameWinPatriots(){
  if (stadium.score === 8) {
      $('.game-over').text('YOU WIN');
}}

function gameWinRaiders(){
  if (stadium.score === 4) {
      $('.game-over').text('YOU WIN');
}}

function gameWinPanthers(){
  if (stadium.score === 12) {
      $('.game-over').text('YOU WIN');
}}
function makeGameObjects(){
  drawStadium();
  drawBall();
  drawPaddle();
}

function makeGameObjectsPatriots() {
  drawRowOfBricksPatriots();
}

function makeGameObjectsRaiders() {
  drawRowOfBricksRaiders();
}

function makeGameObjectsPanthers() {
  drawRowOfBricksPanthers();
}

$('.patriots').on('click',function(){
stadium.makeBrickRowPatriots();
requestAnimationFrame(function gameLoop() {
    makeGameObjects();
    makeGameObjectsPatriots();
    start(stadium);
    gameWinPatriots();
    requestAnimationFrame(gameLoop);
    $('.raiders').attr('disabled', true);
      $('.panthers').attr('disabled', true);

});
});

$('.raiders').on('click',function(){
stadium.makeBrickRowRaiders();
requestAnimationFrame(function gameLoop() {
    makeGameObjects();
    makeGameObjectsRaiders();
    start(stadium);
    gameWinRaiders();
    requestAnimationFrame(gameLoop);
    $('.patriots').attr('disabled', true);
     $('.panthers').attr('disabled', true);
});
});

$('.panthers').on('click',function(){
stadium.makeBrickRowPanthers();
requestAnimationFrame(function gameLoop() {
    makeGameObjects();
    makeGameObjectsPanthers();
    start(stadium);
    gameWinPanthers();
    requestAnimationFrame(gameLoop);
    $('.raiders').attr('disabled', true);
      $('.patriots').attr('disabled', true);
});
});

$('.reset').on('click',function(){
  document.location.reload(true);
});

  document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { stadium.rightArrow(); }
  if (event.keyCode === 37) { stadium.leftArrow(); }
});
