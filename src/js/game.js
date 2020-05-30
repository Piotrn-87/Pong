import Paddle from "./paddle";
import Ball from "./ball";
import Brick from "./brick";

const BRICK_WIDTH = 30; // Bricks width in px
const BRICK_HEIGHT = 20; // Bricks height in px
let bricks = [];
export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.ball = new Ball(this);
    this.brick = new Brick(this);
    this.paddle = new Paddle(this);
    for (let i = 0; i < 20; i++) {
      bricks.push(new Brick(this, { x: i * BRICK_WIDTH, y: BRICK_HEIGHT }));
    }
    this.gameObject = [this.paddle, this.ball, ...bricks];
  }
  update() {
    // this.paddle.update();
    // this.ball.update();
    this.gameObject.forEach((element) => element.update());
  }
  draw(ctx) {
    // this.paddle.draw(ctx);
    // this.ball.draw(ctx);
    // this.brick.draw(ctx);
    this.gameObject.forEach((element) => element.draw(ctx));
  }
}
