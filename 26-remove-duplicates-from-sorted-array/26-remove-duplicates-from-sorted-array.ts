function removeDuplicates(nums: number[]): number {

    let previousValue:number=nums[0];
    for(let i:number=1;i<nums.length;i++){
        while(nums[i]===previousValue){
            nums.splice(i,1);
        }
        previousValue = nums[i];
    }
    return nums.length;
};