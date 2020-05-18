const BALL = document.getElementById("ball");
const SIZE = 30; // Ball size in px
const SPEED = 4; // Ball speed in px
const GOLDEN_RATIO = 1.61; // FIBONACCI

export default class Ball {
  constructor(game) {
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.image = BALL;
    this.size = SIZE;
    this.speed = { x: SPEED, y: SPEED };
    this.position = {
      x: game.gameWidth / 2 - this.size / 2,
      y: game.gameHeight / 8,
    };
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
    let bottomOfBall = this.position.y + this.size - GOLDEN_RATIO;
    let topOfPaddle = this.game.paddle.position.y;
    let leftSideOfPaddle = this.game.paddle.position.x;
    let rightSideOfPaddle =
      this.game.paddle.position.x + this.game.paddle.paddleWidth / 2;

    if (
      bottomOfBall >= topOfPaddle &&
      this.position.x + this.size >= leftSideOfPaddle &&
      this.position.x - this.size <= rightSideOfPaddle
    ) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }

    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
}
