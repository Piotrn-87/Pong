import Paddle from "./paddle";
import Ball from "./ball";
export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }
  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
  }
  upgrade() {
    this.paddle.upgrade();
  }
  draw(ctx) {
    this.paddle.draw(ctx);
    this.ball.draw(ctx);
  }
}
