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
  }

  update() {}
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
