import Paddle from "./paddle";
import Ball from "./ball";
import Brick from "./brick";
import { buildLevel, level1 } from "./levels";

// const SPACEBAR = 32;

const GAMESTATE = {
  MENU: 2,
  GAMEOVER: 3,
};

// document.addEventListener("keydown", keyDown);

// function keyDown(event) {
//   switch (event.keyCode) {
//     case SPACEBAR:
//       game.start();
//       break;
//   }
// }
export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.gamestate = GAMESTATE.MENU;
    let bricks = [];
    this.ball = new Ball(this);
    this.brick = new Brick(this);
    this.paddle = new Paddle(this);
    bricks = buildLevel(this, level1);
    this.gameObject = [this.ball, this.paddle, ...bricks];
  }
  update(progress) {
    // if (this.gamestate === GAMESTATE.MENU) return;
    this.gameObject.forEach((element) => element.update(progress));
    this.gameObject = this.gameObject.filter((object) => !object.deletion);
  }
  draw(ctx) {
    // this.paddle.draw(ctx);
    // this.ball.draw(ctx);
    // this.brick.draw(ctx);
    this.gameObject.forEach((element) => element.draw(ctx));

    // if (this.gamestate === GAMESTATE.MENU) {
    //   ctx.rect(0, 0, 600, 400);
    //   ctx.fillStyle = "rgba(0,0,0, 1)";
    //   ctx.fill();
    //   ctx.font = "30px Arial";
    //   ctx.fillStyle = "white";
    //   ctx.textAlign = "center";
    //   ctx.fillText(
    //     "Press SPACEBAR To Start",
    //     this.gameWidth / 2,
    //     this.gameHeight / 2
    //   );
    // }
  }
}
