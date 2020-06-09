!function(c){var t={};function I(g){if(t[g])return t[g].exports;var n=t[g]={i:g,l:!1,exports:{}};return c[g].call(n.exports,n,n.exports,I),n.l=!0,n.exports}I.m=c,I.c=t,I.d=function(c,t,g){I.o(c,t)||Object.defineProperty(c,t,{enumerable:!0,get:g})},I.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},I.t=function(c,t){if(1&t&&(c=I(c)),8&t)return c;if(4&t&&"object"==typeof c&&c&&c.__esModule)return c;var g=Object.create(null);if(I.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:c}),2&t&&"string"!=typeof c)for(var n in c)I.d(g,n,function(t){return c[t]}.bind(null,n));return g},I.n=function(c){var t=c&&c.__esModule?function(){return c.default}:function(){return c};return I.d(t,"a",t),t},I.o=function(c,t){return Object.prototype.hasOwnProperty.call(c,t)},I.p="",I(I.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/js/paddle.js\nconst GOLDEN_RATIO = 1.61; //FIBO in px\r\nconst MAX_SPEED = 4; //Maximum speed per seconds in px\r\nconst PADDLE_WIDTH = 100; //Paddle width in px\r\nconst PADDLE_HEIGHT = 20; //Paddle height in px\r\nconst SPEED = 0; //Initial speed per seconds in px\r\nlet hue = 180;\r\nclass Paddle {\r\n  constructor(game) {\r\n    this.gameWidth = game.gameWidth;\r\n    this.gameHeight = game.gameHeight;\r\n    this.paddleWidth = PADDLE_WIDTH;\r\n    this.paddleHeight = PADDLE_HEIGHT;\r\n    this.speedX = SPEED;\r\n    this.speedY = SPEED;\r\n    this.maxSpeed = MAX_SPEED;\r\n    this.position = {\r\n      x: game.gameWidth / 2 - this.paddleWidth / 2,\r\n      y: game.gameHeight - this.paddleHeight * GOLDEN_RATIO,\r\n    };\r\n\r\n    document.addEventListener("keydown", (event) => {\r\n      hue += GOLDEN_RATIO;\r\n      switch (event.keyCode) {\r\n        case 37:\r\n          this.moveLeft();\r\n          break;\r\n        case 38:\r\n          this.moveUp();\r\n          break;\r\n        case 39:\r\n          this.moveRight();\r\n          break;\r\n        case 40:\r\n          this.moveDown();\r\n          break;\r\n      }\r\n    });\r\n\r\n    document.addEventListener("keyup", (event) => {\r\n      switch (event.keyCode) {\r\n        case 37:\r\n          this.stop();\r\n          break;\r\n        case 38:\r\n          this.stop();\r\n          break;\r\n        case 39:\r\n          this.stop();\r\n          break;\r\n        case 40:\r\n          this.stop();\r\n          break;\r\n      }\r\n    });\r\n  }\r\n\r\n  moveLeft() {\r\n    this.speedX = -this.maxSpeed;\r\n  }\r\n  moveRight() {\r\n    this.speedX = this.maxSpeed;\r\n  }\r\n  moveUp() {\r\n    this.speedY = -this.maxSpeed;\r\n  }\r\n  moveDown() {\r\n    this.speedY = this.maxSpeed;\r\n  }\r\n  stop() {\r\n    this.speedX = 0;\r\n    this.speedY = 0;\r\n  }\r\n\r\n  draw(ctx) {\r\n    ctx.fillStyle = `hsl(${hue},100%, 50%)`;\r\n    ctx.fillRect(\r\n      this.position.x,\r\n      this.position.y,\r\n      this.paddleWidth,\r\n      this.paddleHeight\r\n    );\r\n  }\r\n\r\n  update(deltaTime) {\r\n    this.position.x += this.speedX;\r\n    this.position.y += this.speedY;\r\n    if (this.position.x < 0) {\r\n      this.position.x = 3;\r\n    }\r\n    if (this.position.x + PADDLE_WIDTH > this.gameWidth) {\r\n      this.position.x = this.gameWidth - PADDLE_WIDTH - 3;\r\n    }\r\n    if (this.position.y < 0) {\r\n      this.position.y = 3;\r\n    } else if (\r\n      this.position.y >\r\n      this.gameHeight - this.paddleHeight * GOLDEN_RATIO\r\n    ) {\r\n      this.position.y = this.gameHeight - this.paddleHeight * GOLDEN_RATIO;\r\n    }\r\n  }\r\n}\r\n\r\nwindow.addEventListener("keydown", (ev) => {\r\n  console.log(ev.keyCode);\r\n});\r\n\n// CONCATENATED MODULE: ./src/js/collisionDetection.js\nfunction collisionDetection(ball, gameObject) {\r\n  let bottomOfBall = ball.position.y + ball.size;\r\n  let topOfBall = ball.position.y;\r\n  let leftSideOfBall = ball.position.x;\r\n  let rightSideOfBall = ball.position.x + ball.size;\r\n\r\n  let bottomOfObject = gameObject.position.y + gameObject.height;\r\n  let topOfObject = gameObject.position.y;\r\n  let leftSideOfObject = gameObject.position.x;\r\n  let rightSideOfObject = gameObject.position.x + gameObject.width;\r\n\r\n  if (\r\n    bottomOfBall >= topOfObject &&\r\n    topOfBall <= bottomOfObject &&\r\n    leftSideOfBall >= leftSideOfObject &&\r\n    rightSideOfBall <= rightSideOfObject\r\n  ) {\r\n    return true;\r\n  } else {\r\n    return false;\r\n  }\r\n}\r\n\n// CONCATENATED MODULE: ./src/js/ball.js\n\r\nconst BALL = document.getElementById("ball");\r\nconst SIZE = 20; // Ball size in px\r\nconst ball_SPEED = 4; // Ball speed in px\r\nconst ball_GOLDEN_RATIO = 1.61; // FIBONACCI\r\n\r\nclass ball_Ball {\r\n  constructor(game) {\r\n    this.game = game;\r\n    this.gameWidth = game.gameWidth;\r\n    this.gameHeight = game.gameHeight;\r\n    this.image = BALL;\r\n    this.size = SIZE;\r\n    this.speed = { x: ball_SPEED, y: ball_SPEED };\r\n    this.position = {\r\n      x: game.gameWidth / 2 - this.size / 2,\r\n      y: game.gameHeight / 2,\r\n    };\r\n  }\r\n  draw(ctx) {\r\n    ctx.drawImage(\r\n      this.image,\r\n      this.position.x,\r\n      this.position.y,\r\n      this.size,\r\n      this.size\r\n    );\r\n  }\r\n\r\n  update(deltaTime) {\r\n    this.position.x += this.speed.x;\r\n    this.position.y += this.speed.y;\r\n    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {\r\n      this.speed.x = -this.speed.x;\r\n    }\r\n\r\n    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {\r\n      this.speed.y = -this.speed.y;\r\n    }\r\n\r\n    let bottomOfBall = this.position.y + this.size - ball_GOLDEN_RATIO;\r\n    let topOfPaddle = this.game.paddle.position.y;\r\n    let leftSideOfPaddle = this.game.paddle.position.x;\r\n    let rightSideOfPaddle =\r\n      this.game.paddle.position.x + this.game.paddle.paddleWidth;\r\n\r\n    // if (\r\n    //   bottomOfBall >= topOfPaddle &&\r\n    //   this.position.x + this.size >= leftSideOfPaddle &&\r\n    //   this.position.x - this.size <= rightSideOfPaddle\r\n    // )\r\n\r\n    if (collisionDetection(this, this.game.paddle)) {\r\n      this.speed.y = -this.speed.y;\r\n      this.position.y = this.game.paddle.position.y - this.size;\r\n    }\r\n  }\r\n}\r\n\n// CONCATENATED MODULE: ./src/js/brick.js\n\r\nconst BRICK = document.getElementById("brick");\r\nconst BRICK_WIDTH = 30;\r\nconst BRICK_HEIGHT = 20;\r\nclass brick_Brick {\r\n  constructor(game, position) {\r\n    this.image = BRICK;\r\n    this.game = game;\r\n    this.width = BRICK_WIDTH;\r\n    this.height = BRICK_HEIGHT;\r\n    this.position = position;\r\n  }\r\n\r\n  update() {\r\n    if (collisionDetection(this.game.ball, this)) {\r\n      this.game.ball.speed.y = -this.game.ball.speed.y;\r\n    }\r\n  }\r\n  draw(ctx) {\r\n    ctx.drawImage(\r\n      this.image,\r\n      this.position.x,\r\n      this.position.y,\r\n      this.width,\r\n      this.height\r\n    );\r\n  }\r\n}\r\n\n// CONCATENATED MODULE: ./src/js/levels.js\n\r\n\r\nconst levels_BRICK_HEIGHT = 21;\r\nconst levels_BRICK_WIDTH = 31;\r\n\r\nfunction buildLevel(game, level) {\r\n  let bricks = [];\r\n  level.forEach((elementY, rowAmount) => {\r\n    elementY.forEach((elementX, brickAmount) => {\r\n      if (elementX === 1) {\r\n        bricks.push(\r\n          new brick_Brick(game, {\r\n            x: levels_BRICK_WIDTH * brickAmount,\r\n            y: levels_BRICK_HEIGHT * rowAmount + levels_BRICK_HEIGHT * 2,\r\n          })\r\n        );\r\n      }\r\n    });\r\n  });\r\n\r\n  return bricks;\r\n}\r\nconst level1 = [\r\n  [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],\r\n  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\r\n];\r\n\n// CONCATENATED MODULE: ./src/js/game.js\n\r\n\r\n\r\n\r\n\r\nconst game_BRICK_WIDTH = 30; // Bricks width in px\r\nconst game_BRICK_HEIGHT = 20; // Bricks height in px\r\n\r\nclass game_Game {\r\n  constructor(gameWidth, gameHeight) {\r\n    this.gameWidth = gameWidth;\r\n    this.gameHeight = gameHeight;\r\n  }\r\n\r\n  start() {\r\n    let bricks = [];\r\n    this.ball = new ball_Ball(this);\r\n    this.brick = new brick_Brick(this);\r\n    this.paddle = new Paddle(this);\r\n    bricks = buildLevel(this, level1);\r\n    // for (let i = 0; i < 20; i++) {\r\n    //   bricks.push(new Brick(this, { x: i * BRICK_WIDTH, y: BRICK_HEIGHT }));\r\n    // }\r\n\r\n    this.gameObject = [this.ball, this.paddle, ...bricks];\r\n  }\r\n  update(deltaTime) {\r\n    // this.paddle.update();\r\n    // this.ball.update();\r\n    this.gameObject.forEach((element) => element.update(deltaTime));\r\n  }\r\n  draw(ctx) {\r\n    // this.paddle.draw(ctx);\r\n    // this.ball.draw(ctx);\r\n    // this.brick.draw(ctx);\r\n    this.gameObject.forEach((element) => element.draw(ctx));\r\n  }\r\n}\r\n\n// CONCATENATED MODULE: ./src/js/main.js\n\r\n\r\nconst CANVAS = "canvas";\r\nconst GAME_WIDTH = 620;\r\nconst GAME_HEIGHT = 400;\r\nconst KEYPASUE = 80;\r\n\r\nlet ctx;\r\nlet main_game;\r\nlet pause = false;\r\nlet progress;\r\nlet start = null;\r\n\r\nlet canvas = document.getElementById(CANVAS);\r\nif (!canvas) {\r\n  console.warn("%c My Friend", "color: magenta", "Zjebales !!!");\r\n}\r\nctx = canvas.getContext("2d");\r\n\r\ndocument.addEventListener("keydown", keyDown);\r\n\r\nfunction keyDown(event) {\r\n  switch (event.keyCode) {\r\n    case KEYPASUE:\r\n      pause = !pause;\r\n  }\r\n}\r\n\r\nmain_game = new game_Game(GAME_WIDTH, GAME_HEIGHT);\r\nmain_game.start();\r\n\r\nfunction step(timeStamp) {\r\n  // if (!start) start = timeStamp;\r\n  // progress = timeStamp - start;\r\n  // start = progress;\r\n  let lastTime = 0;\r\n  let deltaTime = timeStamp - lastTime;\r\n  lastTime = timeStamp;\r\n\r\n  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);\r\n\r\n  if (!pause) {\r\n    main_game.update(deltaTime);\r\n  }\r\n  main_game.draw(ctx);\r\n\r\n  requestAnimationFrame(step);\r\n}\r\nrequestAnimationFrame(step);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFkZGxlLmpzP2Q4YTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbGxpc2lvbkRldGVjdGlvbi5qcz9iNWI1Iiwid2VicGFjazovLy8uL3NyYy9qcy9iYWxsLmpzPzI0Y2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2JyaWNrLmpzPzcyMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xldmVscy5qcz8yMzI0Iiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzPzIzMmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanM/OTI5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwQkFBMEI7QUFDMUIsb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsZ0JBQWdCO0FBQ2hCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQ3pHTTtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FDckIwRDtBQUMxRDtBQUNBLGdCQUFnQjtBQUNoQixNQUFNLFVBQUssS0FBSztBQUNoQixNQUFNLGlCQUFZLFFBQVE7O0FBRVgsTUFBTSxTQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLFVBQUssS0FBSyxVQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQsaUJBQVk7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLGtCQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN6RDBEO0FBQzFEO0FBQ0E7QUFDQTtBQUNlLE1BQU0sV0FBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsa0JBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMzQjRCOztBQUU1QixNQUFNLG1CQUFZO0FBQ2xCLE1BQU0sa0JBQVc7O0FBRVY7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFLO0FBQ25CLGVBQWUsa0JBQVc7QUFDMUIsZUFBZSxtQkFBWSxlQUFlLG1CQUFZO0FBQ3RELFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0I4QjtBQUNKO0FBQ0U7QUFDa0I7O0FBRTlDLE1BQU0sZ0JBQVcsTUFBTTtBQUN2QixNQUFNLGlCQUFZLE1BQU07O0FBRVQsTUFBTSxTQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBSTtBQUN4QixxQkFBcUIsV0FBSztBQUMxQixzQkFBc0IsTUFBTTtBQUM1QixhQUFhLFVBQVUsT0FBTyxNQUFNO0FBQ3BDLHNCQUFzQixRQUFRO0FBQzlCLHNDQUFzQyxzQ0FBc0M7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckMwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLFNBQUk7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBSSxPQUFPLFNBQUk7QUFDZixTQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxTQUFJO0FBQ1I7QUFDQSxFQUFFLFNBQUk7O0FBRU47QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHT0xERU5fUkFUSU8gPSAxLjYxOyAvL0ZJQk8gaW4gcHhcclxuY29uc3QgTUFYX1NQRUVEID0gNDsgLy9NYXhpbXVtIHNwZWVkIHBlciBzZWNvbmRzIGluIHB4XHJcbmNvbnN0IFBBRERMRV9XSURUSCA9IDEwMDsgLy9QYWRkbGUgd2lkdGggaW4gcHhcclxuY29uc3QgUEFERExFX0hFSUdIVCA9IDIwOyAvL1BhZGRsZSBoZWlnaHQgaW4gcHhcclxuY29uc3QgU1BFRUQgPSAwOyAvL0luaXRpYWwgc3BlZWQgcGVyIHNlY29uZHMgaW4gcHhcclxubGV0IGh1ZSA9IDE4MDtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFkZGxlIHtcclxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWUuZ2FtZVdpZHRoO1xyXG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZS5nYW1lSGVpZ2h0O1xyXG4gICAgdGhpcy5wYWRkbGVXaWR0aCA9IFBBRERMRV9XSURUSDtcclxuICAgIHRoaXMucGFkZGxlSGVpZ2h0ID0gUEFERExFX0hFSUdIVDtcclxuICAgIHRoaXMuc3BlZWRYID0gU1BFRUQ7XHJcbiAgICB0aGlzLnNwZWVkWSA9IFNQRUVEO1xyXG4gICAgdGhpcy5tYXhTcGVlZCA9IE1BWF9TUEVFRDtcclxuICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgIHg6IGdhbWUuZ2FtZVdpZHRoIC8gMiAtIHRoaXMucGFkZGxlV2lkdGggLyAyLFxyXG4gICAgICB5OiBnYW1lLmdhbWVIZWlnaHQgLSB0aGlzLnBhZGRsZUhlaWdodCAqIEdPTERFTl9SQVRJTyxcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGh1ZSArPSBHT0xERU5fUkFUSU87XHJcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICB0aGlzLm1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgdGhpcy5tb3ZlVXAoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0MDpcclxuICAgICAgICAgIHRoaXMubW92ZURvd24oKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgMzc6XHJcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzg6XHJcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzk6XHJcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDA6XHJcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG1vdmVMZWZ0KCkge1xyXG4gICAgdGhpcy5zcGVlZFggPSAtdGhpcy5tYXhTcGVlZDtcclxuICB9XHJcbiAgbW92ZVJpZ2h0KCkge1xyXG4gICAgdGhpcy5zcGVlZFggPSB0aGlzLm1heFNwZWVkO1xyXG4gIH1cclxuICBtb3ZlVXAoKSB7XHJcbiAgICB0aGlzLnNwZWVkWSA9IC10aGlzLm1heFNwZWVkO1xyXG4gIH1cclxuICBtb3ZlRG93bigpIHtcclxuICAgIHRoaXMuc3BlZWRZID0gdGhpcy5tYXhTcGVlZDtcclxuICB9XHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMuc3BlZWRYID0gMDtcclxuICAgIHRoaXMuc3BlZWRZID0gMDtcclxuICB9XHJcblxyXG4gIGRyYXcoY3R4KSB7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gYGhzbCgke2h1ZX0sMTAwJSwgNTAlKWA7XHJcbiAgICBjdHguZmlsbFJlY3QoXHJcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnBhZGRsZVdpZHRoLFxyXG4gICAgICB0aGlzLnBhZGRsZUhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkWDtcclxuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkWTtcclxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XHJcbiAgICAgIHRoaXMucG9zaXRpb24ueCA9IDM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgUEFERExFX1dJRFRIID4gdGhpcy5nYW1lV2lkdGgpIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5nYW1lV2lkdGggLSBQQURETEVfV0lEVEggLSAzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSA8IDApIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi55ID0gMztcclxuICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgIHRoaXMucG9zaXRpb24ueSA+XHJcbiAgICAgIHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMucGFkZGxlSGVpZ2h0ICogR09MREVOX1JBVElPXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5wYWRkbGVIZWlnaHQgKiBHT0xERU5fUkFUSU87XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2KSA9PiB7XHJcbiAgY29uc29sZS5sb2coZXYua2V5Q29kZSk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY29sbGlzaW9uRGV0ZWN0aW9uKGJhbGwsIGdhbWVPYmplY3QpIHtcclxuICBsZXQgYm90dG9tT2ZCYWxsID0gYmFsbC5wb3NpdGlvbi55ICsgYmFsbC5zaXplO1xyXG4gIGxldCB0b3BPZkJhbGwgPSBiYWxsLnBvc2l0aW9uLnk7XHJcbiAgbGV0IGxlZnRTaWRlT2ZCYWxsID0gYmFsbC5wb3NpdGlvbi54O1xyXG4gIGxldCByaWdodFNpZGVPZkJhbGwgPSBiYWxsLnBvc2l0aW9uLnggKyBiYWxsLnNpemU7XHJcblxyXG4gIGxldCBib3R0b21PZk9iamVjdCA9IGdhbWVPYmplY3QucG9zaXRpb24ueSArIGdhbWVPYmplY3QuaGVpZ2h0O1xyXG4gIGxldCB0b3BPZk9iamVjdCA9IGdhbWVPYmplY3QucG9zaXRpb24ueTtcclxuICBsZXQgbGVmdFNpZGVPZk9iamVjdCA9IGdhbWVPYmplY3QucG9zaXRpb24ueDtcclxuICBsZXQgcmlnaHRTaWRlT2ZPYmplY3QgPSBnYW1lT2JqZWN0LnBvc2l0aW9uLnggKyBnYW1lT2JqZWN0LndpZHRoO1xyXG5cclxuICBpZiAoXHJcbiAgICBib3R0b21PZkJhbGwgPj0gdG9wT2ZPYmplY3QgJiZcclxuICAgIHRvcE9mQmFsbCA8PSBib3R0b21PZk9iamVjdCAmJlxyXG4gICAgbGVmdFNpZGVPZkJhbGwgPj0gbGVmdFNpZGVPZk9iamVjdCAmJlxyXG4gICAgcmlnaHRTaWRlT2ZCYWxsIDw9IHJpZ2h0U2lkZU9mT2JqZWN0XHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBjb2xsaXNpb25EZXRlY3Rpb24gfSBmcm9tIFwiLi9jb2xsaXNpb25EZXRlY3Rpb25cIjtcclxuY29uc3QgQkFMTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFsbFwiKTtcclxuY29uc3QgU0laRSA9IDIwOyAvLyBCYWxsIHNpemUgaW4gcHhcclxuY29uc3QgU1BFRUQgPSA0OyAvLyBCYWxsIHNwZWVkIGluIHB4XHJcbmNvbnN0IEdPTERFTl9SQVRJTyA9IDEuNjE7IC8vIEZJQk9OQUNDSVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZS5nYW1lV2lkdGg7XHJcbiAgICB0aGlzLmdhbWVIZWlnaHQgPSBnYW1lLmdhbWVIZWlnaHQ7XHJcbiAgICB0aGlzLmltYWdlID0gQkFMTDtcclxuICAgIHRoaXMuc2l6ZSA9IFNJWkU7XHJcbiAgICB0aGlzLnNwZWVkID0geyB4OiBTUEVFRCwgeTogU1BFRUQgfTtcclxuICAgIHRoaXMucG9zaXRpb24gPSB7XHJcbiAgICAgIHg6IGdhbWUuZ2FtZVdpZHRoIC8gMiAtIHRoaXMuc2l6ZSAvIDIsXHJcbiAgICAgIHk6IGdhbWUuZ2FtZUhlaWdodCAvIDIsXHJcbiAgICB9O1xyXG4gIH1cclxuICBkcmF3KGN0eCkge1xyXG4gICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICB0aGlzLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2l6ZSxcclxuICAgICAgdGhpcy5zaXplXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQueDtcclxuICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkLnk7XHJcbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplID4gdGhpcy5nYW1lV2lkdGggfHwgdGhpcy5wb3NpdGlvbi54IDwgMCkge1xyXG4gICAgICB0aGlzLnNwZWVkLnggPSAtdGhpcy5zcGVlZC54O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUgPiB0aGlzLmdhbWVIZWlnaHQgfHwgdGhpcy5wb3NpdGlvbi55IDwgMCkge1xyXG4gICAgICB0aGlzLnNwZWVkLnkgPSAtdGhpcy5zcGVlZC55O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBib3R0b21PZkJhbGwgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUgLSBHT0xERU5fUkFUSU87XHJcbiAgICBsZXQgdG9wT2ZQYWRkbGUgPSB0aGlzLmdhbWUucGFkZGxlLnBvc2l0aW9uLnk7XHJcbiAgICBsZXQgbGVmdFNpZGVPZlBhZGRsZSA9IHRoaXMuZ2FtZS5wYWRkbGUucG9zaXRpb24ueDtcclxuICAgIGxldCByaWdodFNpZGVPZlBhZGRsZSA9XHJcbiAgICAgIHRoaXMuZ2FtZS5wYWRkbGUucG9zaXRpb24ueCArIHRoaXMuZ2FtZS5wYWRkbGUucGFkZGxlV2lkdGg7XHJcblxyXG4gICAgLy8gaWYgKFxyXG4gICAgLy8gICBib3R0b21PZkJhbGwgPj0gdG9wT2ZQYWRkbGUgJiZcclxuICAgIC8vICAgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplID49IGxlZnRTaWRlT2ZQYWRkbGUgJiZcclxuICAgIC8vICAgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5zaXplIDw9IHJpZ2h0U2lkZU9mUGFkZGxlXHJcbiAgICAvLyApXHJcblxyXG4gICAgaWYgKGNvbGxpc2lvbkRldGVjdGlvbih0aGlzLCB0aGlzLmdhbWUucGFkZGxlKSkge1xyXG4gICAgICB0aGlzLnNwZWVkLnkgPSAtdGhpcy5zcGVlZC55O1xyXG4gICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLmdhbWUucGFkZGxlLnBvc2l0aW9uLnkgLSB0aGlzLnNpemU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNvbGxpc2lvbkRldGVjdGlvbiB9IGZyb20gXCIuL2NvbGxpc2lvbkRldGVjdGlvblwiO1xyXG5jb25zdCBCUklDSyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJpY2tcIik7XHJcbmNvbnN0IEJSSUNLX1dJRFRIID0gMzA7XHJcbmNvbnN0IEJSSUNLX0hFSUdIVCA9IDIwO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmljayB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZSwgcG9zaXRpb24pIHtcclxuICAgIHRoaXMuaW1hZ2UgPSBCUklDSztcclxuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICB0aGlzLndpZHRoID0gQlJJQ0tfV0lEVEg7XHJcbiAgICB0aGlzLmhlaWdodCA9IEJSSUNLX0hFSUdIVDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmIChjb2xsaXNpb25EZXRlY3Rpb24odGhpcy5nYW1lLmJhbGwsIHRoaXMpKSB7XHJcbiAgICAgIHRoaXMuZ2FtZS5iYWxsLnNwZWVkLnkgPSAtdGhpcy5nYW1lLmJhbGwuc3BlZWQueTtcclxuICAgIH1cclxuICB9XHJcbiAgZHJhdyhjdHgpIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLndpZHRoLFxyXG4gICAgICB0aGlzLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEJyaWNrIGZyb20gXCIuL2JyaWNrXCI7XHJcblxyXG5jb25zdCBCUklDS19IRUlHSFQgPSAyMTtcclxuY29uc3QgQlJJQ0tfV0lEVEggPSAzMTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZExldmVsKGdhbWUsIGxldmVsKSB7XHJcbiAgbGV0IGJyaWNrcyA9IFtdO1xyXG4gIGxldmVsLmZvckVhY2goKGVsZW1lbnRZLCByb3dBbW91bnQpID0+IHtcclxuICAgIGVsZW1lbnRZLmZvckVhY2goKGVsZW1lbnRYLCBicmlja0Ftb3VudCkgPT4ge1xyXG4gICAgICBpZiAoZWxlbWVudFggPT09IDEpIHtcclxuICAgICAgICBicmlja3MucHVzaChcclxuICAgICAgICAgIG5ldyBCcmljayhnYW1lLCB7XHJcbiAgICAgICAgICAgIHg6IEJSSUNLX1dJRFRIICogYnJpY2tBbW91bnQsXHJcbiAgICAgICAgICAgIHk6IEJSSUNLX0hFSUdIVCAqIHJvd0Ftb3VudCArIEJSSUNLX0hFSUdIVCAqIDIsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYnJpY2tzO1xyXG59XHJcbmV4cG9ydCBjb25zdCBsZXZlbDEgPSBbXHJcbiAgWzAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDBdLFxyXG4gIFsxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxXSxcclxuICBbMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMV0sXHJcbiAgWzEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDFdLFxyXG5dO1xyXG4iLCJpbXBvcnQgUGFkZGxlIGZyb20gXCIuL3BhZGRsZVwiO1xyXG5pbXBvcnQgQmFsbCBmcm9tIFwiLi9iYWxsXCI7XHJcbmltcG9ydCBCcmljayBmcm9tIFwiLi9icmlja1wiO1xyXG5pbXBvcnQgeyBidWlsZExldmVsLCBsZXZlbDEgfSBmcm9tIFwiLi9sZXZlbHNcIjtcclxuXHJcbmNvbnN0IEJSSUNLX1dJRFRIID0gMzA7IC8vIEJyaWNrcyB3aWR0aCBpbiBweFxyXG5jb25zdCBCUklDS19IRUlHSFQgPSAyMDsgLy8gQnJpY2tzIGhlaWdodCBpbiBweFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgY29uc3RydWN0b3IoZ2FtZVdpZHRoLCBnYW1lSGVpZ2h0KSB7XHJcbiAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWVXaWR0aDtcclxuICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWVIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGxldCBicmlja3MgPSBbXTtcclxuICAgIHRoaXMuYmFsbCA9IG5ldyBCYWxsKHRoaXMpO1xyXG4gICAgdGhpcy5icmljayA9IG5ldyBCcmljayh0aGlzKTtcclxuICAgIHRoaXMucGFkZGxlID0gbmV3IFBhZGRsZSh0aGlzKTtcclxuICAgIGJyaWNrcyA9IGJ1aWxkTGV2ZWwodGhpcywgbGV2ZWwxKTtcclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xyXG4gICAgLy8gICBicmlja3MucHVzaChuZXcgQnJpY2sodGhpcywgeyB4OiBpICogQlJJQ0tfV0lEVEgsIHk6IEJSSUNLX0hFSUdIVCB9KSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgdGhpcy5nYW1lT2JqZWN0ID0gW3RoaXMuYmFsbCwgdGhpcy5wYWRkbGUsIC4uLmJyaWNrc107XHJcbiAgfVxyXG4gIHVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgIC8vIHRoaXMucGFkZGxlLnVwZGF0ZSgpO1xyXG4gICAgLy8gdGhpcy5iYWxsLnVwZGF0ZSgpO1xyXG4gICAgdGhpcy5nYW1lT2JqZWN0LmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQudXBkYXRlKGRlbHRhVGltZSkpO1xyXG4gIH1cclxuICBkcmF3KGN0eCkge1xyXG4gICAgLy8gdGhpcy5wYWRkbGUuZHJhdyhjdHgpO1xyXG4gICAgLy8gdGhpcy5iYWxsLmRyYXcoY3R4KTtcclxuICAgIC8vIHRoaXMuYnJpY2suZHJhdyhjdHgpO1xyXG4gICAgdGhpcy5nYW1lT2JqZWN0LmZvckVhY2goKGVsZW1lbnQpID0+IGVsZW1lbnQuZHJhdyhjdHgpKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxuY29uc3QgQ0FOVkFTID0gXCJjYW52YXNcIjtcclxuY29uc3QgR0FNRV9XSURUSCA9IDYyMDtcclxuY29uc3QgR0FNRV9IRUlHSFQgPSA0MDA7XHJcbmNvbnN0IEtFWVBBU1VFID0gODA7XHJcblxyXG5sZXQgY3R4O1xyXG5sZXQgZ2FtZTtcclxubGV0IHBhdXNlID0gZmFsc2U7XHJcbmxldCBwcm9ncmVzcztcclxubGV0IHN0YXJ0ID0gbnVsbDtcclxuXHJcbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDQU5WQVMpO1xyXG5pZiAoIWNhbnZhcykge1xyXG4gIGNvbnNvbGUud2FybihcIiVjIE15IEZyaWVuZFwiLCBcImNvbG9yOiBtYWdlbnRhXCIsIFwiWmplYmFsZXMgISEhXCIpO1xyXG59XHJcbmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duKTtcclxuXHJcbmZ1bmN0aW9uIGtleURvd24oZXZlbnQpIHtcclxuICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgIGNhc2UgS0VZUEFTVUU6XHJcbiAgICAgIHBhdXNlID0gIXBhdXNlO1xyXG4gIH1cclxufVxyXG5cclxuZ2FtZSA9IG5ldyBHYW1lKEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcclxuZ2FtZS5zdGFydCgpO1xyXG5cclxuZnVuY3Rpb24gc3RlcCh0aW1lU3RhbXApIHtcclxuICAvLyBpZiAoIXN0YXJ0KSBzdGFydCA9IHRpbWVTdGFtcDtcclxuICAvLyBwcm9ncmVzcyA9IHRpbWVTdGFtcCAtIHN0YXJ0O1xyXG4gIC8vIHN0YXJ0ID0gcHJvZ3Jlc3M7XHJcbiAgbGV0IGxhc3RUaW1lID0gMDtcclxuICBsZXQgZGVsdGFUaW1lID0gdGltZVN0YW1wIC0gbGFzdFRpbWU7XHJcbiAgbGFzdFRpbWUgPSB0aW1lU3RhbXA7XHJcblxyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQpO1xyXG5cclxuICBpZiAoIXBhdXNlKSB7XHJcbiAgICBnYW1lLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG4gIH1cclxuICBnYW1lLmRyYXcoY3R4KTtcclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG59XHJcbnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')}]);