export function collisionDetection(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  let leftSideOfBall = ball.position.x;
  let rightSideOfBall = ball.position.x + ball.width;

  let bottomOfWall = gameObject.position.y + gameObject.height;
  let topOfWall = gameObject.position.y;
  let leftSideOfWall = gameObject.position.x;
  let rightSideOfWall = gameObject.position.x + gameObject.width;

  if (
    bottomOfBall >= topOfWall &&
    topOfBall <= bottomOfWall &&
    leftSideOfBall >= leftSideOfWall &&
    rightSideOfBall <= rightSideOfWall
  ) {
    return true;
  } else {
    return false;
  }
}
