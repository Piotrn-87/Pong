import Paddle from "./paddle";
import Ball from "./ball";
import Brick from "./brick";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.brick = new Brick(this, { x: 10, y: 20 });
    let bricks = [];
    for (let i = 0; i < 10; i++) {
      bricks.push(
        new Brick(this, {
          x: i * 30,
          y: 20,
        })
      );
    }
  }
  update() {
    this.paddle.update();
    this.ball.update();
  }
  draw(ctx) {
    this.paddle.draw(ctx);
    this.ball.draw(ctx);
    this.brick.draw(ctx);
  }
}
