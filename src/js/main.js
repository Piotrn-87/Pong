import Game from "./game";

const CANVAS = "canvas";
const GAME_WIDTH = 600;
const GAME_HEIGHT = 400;
const KEYPASUE = 80;

let isDark = false;
let ctx;
let game;
let pause = false;
let progress;
let start = null;

const changeButton = document.querySelector(".mode--js");
changeButton.addEventListener("click", () => {
  if (isDark) {
    document.documentElement.style.setProperty("--background-color", "#fefefe");
    document.documentElement.style.setProperty("--text-color", "#333");
    changeButton.innerHTML = "dark theme";
    isDark = false;
  } else {
    document.documentElement.style.setProperty("--background-color", "#333");
    document.documentElement.style.setProperty("--text-color", "#fefefe");
    changeButton.innerHTML = "light theme";
    isDark = true;
  }
});

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
  // let lastTime = 0;
  // let deltaTime = timeStamp - lastTime;
  // lastTime = timeStamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  if (!pause) {
    game.update(progress);
  }
  game.draw(ctx);

  requestAnimationFrame(step);
}
requestAnimationFrame(step);
