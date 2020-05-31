import Brick from "./brick";

export function buildLevel(game, level1) {
  let bricks = [];

  level1.forEach((y, yIndex) => {
    y.forEach((x, xIndex) => {
      if (x === 1) {
        // let position = {
        //   x: 31 * xIndex + 0.5,
        //   y: 21 * yIndex + 20,
        // };
        bricks.push(new Brick(game, { x: 31 * xIndex, y: 21 * yIndex + 30 }));
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
