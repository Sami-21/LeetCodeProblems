function findDuplicate(nums: number[]): number {
    let map:Map<number, boolean> = new Map();
    for(let i:number = 0 ; i<nums.length ; i++){
        if(map.has(nums[i]))
            return nums[i];
        else{
            map.set(nums[i],true);
        }
    }
};