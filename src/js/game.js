import Paddle from "./paddle";
import Ball from "./ball";
import Brick from "./brick";
import { buildLevel, level1 } from "./levels";

const BRICK_WIDTH = 30; // Bricks width in px
const BRICK_HEIGHT = 20; // Bricks height in px

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    let bricks = [];
    this.ball = new Ball(this);
    this.brick = new Brick(this);
    this.paddle = new Paddle(this);
    bricks = buildLevel(this, level1);
    this.gameObject = [this.ball, this.paddle, ...bricks];
  }
  update(progress) {
    this.gameObject.forEach((element) => element.update(progress));
    this.gameObject = this.gameObject.filter((object) => !object.deletion);
  }
  draw(ctx) {
    // this.paddle.draw(ctx);
    // this.ball.draw(ctx);
    // this.brick.draw(ctx);
    this.gameObject.forEach((element) => element.draw(ctx));
  }
}
