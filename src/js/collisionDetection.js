// export function collisionDetection(ball, gameObject) {
//   let bottomOfBall = ball.position.y + ball.size;
//   let topOfBall = ball.position.y;
//   let leftSideOfBall = ball.position.x;
//   let rightSideOfBall = ball.position.x + ball.size;

//   let bottomOfWall = gameObject.position.y + gameObject.height;
//   let topOfWall = gameObject.position.y;
//   let leftSideOfWall = gameObject.position.x;
//   let rightSideOfWall = gameObject.position.x + gameObject.width;

//   if (
//     bottomOfBall >= topOfWall &&
//     topOfBall <= bottomOfWall &&
//     leftSideOfBall >= leftSideOfWall &&
//     rightSideOfBall <= rightSideOfWall
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

export function detectCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;

  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
