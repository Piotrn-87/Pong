const BRICK = document.getElementById("brick");
const WIDTH = 30;
const HEIGHT = 20;
export default class Brick {
  constructor(game, position) {
    this.image = BRICK;
    this.game = game;
    this.width = WIDTH;
    this.height = HEIGHT;
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
