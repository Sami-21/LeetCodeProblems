class NumArray {
    array:number[];
    constructor(nums: number[]) {
    this.array = nums;
    }

    sumRange(left: number, right: number): number {
        let sum:number=0;
    for(let i:number=left;i<=right;i++){
        sum+=this.array[i];
    }
        return sum;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */