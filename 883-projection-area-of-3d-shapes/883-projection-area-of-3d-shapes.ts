function projectionArea(grid: number[][]): number {
    let areaXY: number = 0;
  let areaXZ: number = grid.reduce((total, num) => {
    return total + Math.max(...num);
  }, 0);
  let areaYZ: number = 0;
  grid.forEach((row) => {
    row.forEach((num) => {
      if (num > 0) areaXY++;
    });
  });

  for (let i: number = 0; i < grid.length; i++) {
    let max: number = 0;
    for (let j: number = 0; j < grid[i].length; j++) {
      max = Math.max(grid[j][i], max);
    }
    areaYZ += max;
  }

  return areaXY + areaXZ + areaYZ;
};
