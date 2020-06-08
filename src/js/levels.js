import Brick from "./brick";

const BRICK_HEIGHT = 21;
const BRICK_WIDTH = 31;

export function buildLevel(game, level) {
  let bricks = [];
  level.forEach((elementY, rowAmount) => {
    elementY.forEach((elementX, brickAmount) => {
      if (elementX === 1) {
        bricks.push(
          new Brick(game, {
            x: BRICK_WIDTH * brickAmount,
            y: BRICK_HEIGHT * rowAmount + BRICK_HEIGHT * 2,
          })
        );
      }
    });
  });

  return bricks;
}
export const level1 = [
  [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
