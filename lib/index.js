const Ball = require('./ball.js');
const Paddle = require('./paddle.js');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ball = new Ball();
var paddle = new Paddle();


function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = "#663300";
    ctx.fill();
    ctx.closePath();
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
    drawBall();
    drawPaddle();
    ball.moveRight();
    ball.moveUp();
    }

draw();

setInterval(draw, 10);
