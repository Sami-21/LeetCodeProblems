function missingNumber(nums: number[]): number {
    let sum:number = (nums.length*(nums.length + 1)) / 2;
    let arraySum:number = nums.reduce((total,num) =>{ return total + num;} ,0);
    return sum - arraySum; 
};