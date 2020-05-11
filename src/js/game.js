import Paddle from "./paddle";
export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
  }

  update(deltaTime) {
    this.paddle.update(deltaTime);
  }
  draw(ctx) {
    this.paddle.paint(ctx);
  }
}
