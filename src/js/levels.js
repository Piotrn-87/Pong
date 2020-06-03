import Brick from "./brick";

const BRICK_HEIGHT = 30;
let bricks = [];
export function buildLevel(game, level1) {
  level1.forEach((elementY, rowAmount) => {
    elementY.forEach((elementX, brickAmount) => {
      if (elementX === 1) {
        bricks.push(
          new Brick(game, {
            x: 32 * brickAmount,
            y: 21 * rowAmount + BRICK_HEIGHT,
          })
        );
      }
    });
  });
  // level1.forEach((elementY) => {
  //   elementY.forEach((elementX) => {
  //     console.log(elementX);
  //   });
  // });

  return bricks;
}
export const level1 = [
  [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
