function runningSum(nums: number[]): number[] {
    let ans:number[]=[nums[0]];
    for(let i:number=1;i<nums.length;i++){
        ans[i] = ans[i-1] + nums[i]
    }
    return ans;
};