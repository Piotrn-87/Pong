import { collisionDetection } from "./collisionDetection";
const BALL = document.getElementById("ball");
const SIZE = 20; // Ball size in px
const SPEED = 4; // Ball speed in px

export default class Ball {
  constructor(game) {
    this.image = BALL;
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.game = game;
    this.size = SIZE;
    this.reset();
  }

  reset() {
    this.speed = { x: -SPEED, y: -SPEED };
    this.position = { x: 300, y: 200 };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    if (this.position.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    if (collisionDetection(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
