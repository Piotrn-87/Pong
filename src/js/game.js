import Paddle from "./paddle";
import Ball from "./ball";
import Brick from "./brick";

let bricks = [];
export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.brick = new Brick(this);

    this.gameObject = [this.paddle, this.ball];
  }
  update() {
    this.paddle.update();
    // this.ball.update();
    this.gameObject.forEach((element) => element.update());
  }
  draw(ctx) {
    // this.paddle.draw(ctx);
    // this.ball.draw(ctx);
    this.brick.draw(ctx);
    this.gameObject.forEach((element) => element.draw(ctx));
  }
}
