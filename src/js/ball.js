const BALL = document.getElementById("ball");
const SIZE = 40;

export default class Ball {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.image = BALL;
    this.size = SIZE;
    this.position = {
      x: this.gameWidth / 2 - this.size / 2,
      y: this.gameHeight / this.size,
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
}
