import Game from "./game";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 600;
const GAME_HEIGHT = 400;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

function gameLoop(timeStamp) {
  game.draw(ctx);
  let lastTime = 0;
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
