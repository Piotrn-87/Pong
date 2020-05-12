const PADDLE_WIDTH = 100; //Paddle width in px
const PADDLE_HEIGHT = 20; //Paddle height in px
const SPEED = 0; //Initial speed in px per seconds
const MAX_SPEED = 4; //Maximum speed in px per seconds
const HALF = 2; //Half of paddle and game width
const GOLDEN_RATIO = 1.61; //FIBO in px
export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.paddleWidth = PADDLE_WIDTH;
    this.paddleHeight = PADDLE_HEIGHT;
    this.speed = SPEED;
    this.maxSpeed = MAX_SPEED;
    this.position = {
      x: game.gameWidth / HALF - this.paddleWidth / HALF,
      y: game.gameHeight - this.paddleHeight * GOLDEN_RATIO,
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

  upgrade() {
    this.position.x += this.speed;
    if (this.position.x < 0) {
      this.position.x = 3;
    } else if (this.position.x + this.paddleWidth > this.gameWidth) {
      this.position.x = this.gameWidth - this.paddleWidth - 3;
    }
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
