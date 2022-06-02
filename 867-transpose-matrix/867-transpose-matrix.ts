
const transpose = (matrix: number[][]): number[][] => {
  let output: number[][] = [];
  for (let i: number = 0; i < matrix[0].length; i++) {
    let MatVector: number[] = [];
    for (let j: number = 0; j < matrix.length; j++) {
      MatVector.push(matrix[j][i]);
    }
    output.push(MatVector);
  }
  return output;
};