const BALL = document.getElementById("ball");
const SIZE = 40; // size of ball in px
const SPEED = 4;
export default class Ball {
  constructor(game) {
    this.image = BALL;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.speed = { x: SPEED, y: SPEED };
    this.size = SIZE;
    this.position = {
      x: game.gameWidth / 2 - this.size / 2,
      y: game.gameHeight / this.size,
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
