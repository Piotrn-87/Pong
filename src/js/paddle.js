const GOLDEN_RATIO = 1.61; //FIBO in px
const HALF = 2; //Half of paddle and game width
const MAX_SPEED = 4; //Maximum speed per seconds in px
const PADDLE_WIDTH = 100; //Paddle width in px
const PADDLE_HEIGHT = 20; //Paddle height in px
const SPEED = 0; //Initial speed per seconds in px
let hue = 180;
export default class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.paddleWidth = PADDLE_WIDTH;
    this.paddleHeight = PADDLE_HEIGHT;
    this.speedX = SPEED;
    this.speedY = SPEED;
    this.maxSpeed = MAX_SPEED;
    this.position = {
      x: game.gameWidth / HALF - this.paddleWidth / HALF,
      y: game.gameHeight - this.paddleHeight * GOLDEN_RATIO,
    };

    document.addEventListener("keydown", (event) => {
      hue += GOLDEN_RATIO;
      switch (event.keyCode) {
        case 37:
          this.moveLeft();
          break;
        case 38:
          this.moveUp();
          break;
        case 39:
          this.moveRight();
          break;
        case 40:
          this.moveDown();
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case 37:
          this.stop();
          break;
        case 38:
          this.stop();
          break;
        case 39:
          this.stop();
          break;
        case 40:
          this.stop();
          break;
      }
    });
  }

  moveLeft() {
    this.speedX = -this.maxSpeed;
  }
  moveRight() {
    this.speedX = this.maxSpeed;
  }
  moveUp() {
    this.speedY = -this.maxSpeed;
  }
  moveDown() {
    this.speedY = this.maxSpeed;
  }
  stop() {
    this.speedX = 0;
    this.speedY = 0;
  }

  upgrade() {
    this.position.x += this.speedX;
    this.position.y = this.position.y + this.speedY;
    if (this.position.x < 0) {
      this.position.x = 3;
    } else if (this.position.x + this.paddleWidth > this.gameWidth) {
      this.position.x = this.gameWidth - this.paddleWidth - 3;
    }
    if (this.position.y < 0) {
      this.position.y = 3;
    } else if (
      this.position.y >
      this.gameHeight - this.paddleHeight * GOLDEN_RATIO
    ) {
      this.position.y = this.gameHeight - this.paddleHeight * GOLDEN_RATIO;
    }
  }

  draw(ctx) {
    ctx.fillStyle = `hsl(${hue},100%, 50%)`;
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
