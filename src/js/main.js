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
    changeButton.innerHTML = "drakula theme";
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

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  if (!pause) {
    game.update(progress);
  }
  game.draw(ctx);
  if (pause) {
    ctx.rect(0, 0, 600, 400);
    ctx.fillStyle = "rgba(0,0,0, .3)";
    ctx.fill();

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Paused", GAME_WIDTH / 2, GAME_HEIGHT / 2);
  }

  requestAnimationFrame(step);
}
requestAnimationFrame(step);

// let lastTime = 0;
// let deltaTime = timeStamp - lastTime;
// lastTime = timeStamp;
