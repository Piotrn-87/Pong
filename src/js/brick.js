const BRICK = document.getElementById("brick");
export default class Brick {
  constructor(game, position) {
    this.image = BRICK;
    this.game = game;
    this.width = 30;
    this.height = 20;
    this.position = {
      x: 20,
      y: 20,
    };
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
