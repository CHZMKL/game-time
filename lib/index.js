const Ball = require('./ball.js');
const Paddle = require('./paddle.js');
const Stadium = require('./world.js');
// const $ = require('jquery');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ball = new Ball();
var paddle = new Paddle();
var stadium = new Stadium();

function drawStadium() {
  ctx.beginPath();
  ctx.rect(stadium.x, stadium.y, stadium.width, stadium.height);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.rect(ball.x, ball.y, ball.width, ball.height);
    ctx.fillStyle = "#663300";
    ctx.fill();
    ctx.closePath();
  }
  
function moveBall() {
  ball.collisonDetectionX();
  ball.collisonDetectionY();
  ball.moveUp();
  ball.moveRight();

}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawStadium();
    drawBall();
    drawPaddle();
    moveBall();
}

// window.addEventListener('keydown', function(event) {
//   if (event.keyCode === 32) {
//     requestAnimationFrame(draw());
//   }
// });

setInterval(draw, 10);

window.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) {paddle.moveRight();}
  if (event.keyCode === 37) {paddle.moveLeft();}
});
