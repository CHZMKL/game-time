const Stadium = require('./world.js');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var stadium = new Stadium();



function drawStadium() {
  ctx.beginPath();
  ctx.rect(stadium.x, stadium.y, stadium.width, stadium.height);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function drawRowOfBricks() {
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
  drawRowOfBricks();
}


stadium.makeBrickRow();

requestAnimationFrame(function gameLoop() {
      makeGameObjects();
      start(stadium);
      requestAnimationFrame(gameLoop);
});

  document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) { stadium.rightArrow(); }
  if (event.keyCode === 37) { stadium.leftArrow(); }
});

// document.addEventListener('keydown', function(event){
//   if (event.keyCode === 32) {gameStart();}
//   //   if(Game.firstLevel === true) {
//       // start()
//         // Game.firstLevel = false;
//       // }
//   //   else if(statium.blocks === 0)
//   //  statium = new Statium({ball:{xy}}{}}
// });
