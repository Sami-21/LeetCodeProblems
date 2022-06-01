function buildArray(nums: number[]): number[] {
    let output:number[]=[];
    for(let i:number=0;i<nums.length;i++){
        output[i]=nums[nums[i]];
    }
    return output;
};