export function collisionDetection(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  let leftSideOfBall = ball.position.x;
  let rightSideOfBall = ball.position.x + ball.size;

  let bottomOfObject = gameObject.position.y + gameObject.gameHeight;
  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + 100;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    leftSideOfBall >= leftSideOfObject &&
    rightSideOfBall <= rightSideOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
