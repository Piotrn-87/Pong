export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.paddleWidth = 100;
    this.paddleHeight = 20;
    this.speed = 0;
    this.maxSpeed = 4;
    this.position = {
      x: game.gameWidth / 2 - this.paddleWidth / 2,
      y: game.gameHeight - this.paddleHeight * 1.2,
    };

    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          this.moveLeft();
          break;
        case 39:
          this.moveRight();
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          this.stop();
          break;
        case 39:
          this.stop();
          break;
      }
    });
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }
  moveRight() {
    this.speed = this.maxSpeed;
  }
  stop() {
    this.speed = 0;
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

window.addEventListener("keydown", (ev) => {
  console.log(ev.keyCode);
});
