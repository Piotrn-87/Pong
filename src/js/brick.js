import { collisionDetection } from "./collisionDetection";
const BRICK = document.getElementById("brick");
const BRICK_WIDTH = 30;
const BRICK_HEIGHT = 20;
export default class Brick {
  constructor(game, position) {
    this.image = BRICK;
    this.game = game;
    this.width = BRICK_WIDTH;
    this.height = BRICK_HEIGHT;
    this.position = position;
    this.deletion = false;
  }

  update() {
    if (collisionDetection(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.deletion = true;
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
