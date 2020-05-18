import Game from "./game";

const CANVAS = "canvas";
const GAME_WIDTH = 600;
const GAME_HEIGHT = 400;

let canvas = document.getElementById(CANVAS);
if (!canvas) {
  console.warn("%c My Friend", "color: magenta", "Zjebales !!!");
}
let ctx = canvas.getContext("2d");

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

function gameLoop(timeStamp) {
  let lastTime = 0;
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.upgrade(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);

console.time("looper");
let i = 0;
while (i < 1000000) {
  i++;
}
console.timeEnd("looper");
