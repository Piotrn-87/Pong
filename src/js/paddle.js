export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.paddleWidth = 100;
    this.paddleHeight = 20;
    this.position = {
      x: game.gameWidth / 2 - this.paddleWidth / 2,
      y: game.gameHeight - this.paddleHeight * 1.2,
    };
  }
  paint(ctx) {
    ctx.fillStyle = "#0ff";
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.paddleWidth,
      this.paddleHeight
    );
  }
}
