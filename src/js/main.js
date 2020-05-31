import Game from "./game";

const CANVAS = "canvas";
const GAME_WIDTH = 620;
const GAME_HEIGHT = 400;
const KEYPASUE = 80;

let ctx;
let game;
let pause = false;
let progress;
let start = null;

let canvas = document.getElementById(CANVAS);
if (!canvas) {
  console.warn("%c My Friend", "color: magenta", "Zjebales !!!");
}
ctx = canvas.getContext("2d");

document.addEventListener("keydown", keyDown);

function keyDown(event) {
  switch (event.keyCode) {
    case KEYPASUE:
      pause = !pause;
  }
}

game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

function step(timeStamp) {
  if (!start) start = timeStamp;
  progress = timeStamp - start;
  start = progress;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  if (!pause) {
    game.update(progress);
  }
  game.draw(ctx);

  requestAnimationFrame(step);
}
requestAnimationFrame(step);
