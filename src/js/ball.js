const BALL = document.getElementById("ball");
export default class Ball {
  constructor(game) {
    this.image = BALL;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.speed = { x: 4, y: 4 };
    this.size = 40;
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
}
