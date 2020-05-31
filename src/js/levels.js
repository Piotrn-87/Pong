import Brick from "./brick";

const HEIGHT_BRICK = 30;
let bricks = [];

export function buildLevel(game, level1) {
  level1.forEach((y, yIndex) => {
    y.forEach((x, xIndex) => {
      if (x === 1) {
        bricks.push(
          new Brick(game, { x: 31 * xIndex, y: 21 * yIndex + HEIGHT_BRICK })
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
