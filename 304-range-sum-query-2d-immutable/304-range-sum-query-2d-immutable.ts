class NumMatrix {
    Matrix:number[][];
    constructor(matrix: number[][]) {
    this.Matrix = matrix;
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let sum:number=0;
        for(let i:number=row1;i<=row2;i++){
         for(let j:number=col1;j<=col2;j++){
            sum+=this.Matrix[i][j];
        }   
        }
        return sum;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */