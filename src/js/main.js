import Game from "./game";

const CANVAS = "canvas";
const GAME_WIDTH = 600;
const GAME_HEIGHT = 400;

let canvas = document.getElementById(CANVAS);
if (!canvas) {
  console.warn("%c My Friend", "color: magenta", "Zjebales sth.. !!!");
}
let ctx = canvas.getContext("2d");
let pause = false;

document.addEventListener("keydown", keyDown);

function keyDown(event) {
  switch (event.keyCode) {
    case 80:
      pause = !pause;
  }
}

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

function gameLoop(timeStamp) {
  let lastTime = 2020;
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  if (!pause) {
    game.update(deltaTime);
  }
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
