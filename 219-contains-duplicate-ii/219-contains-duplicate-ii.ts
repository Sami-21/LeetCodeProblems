function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let NumsIndexes:any = {};
    for(let i:number=0;i<nums.length;i++){
        if(NumsIndexes[nums[i]]){
            if(Math.abs(NumsIndexes[nums[i]][NumsIndexes[nums[i]].length - 1] - i) <=k )
                return true;
            NumsIndexes[nums[i]].push(i);
        }else{
            NumsIndexes[nums[i]] = [i];
        }
    }
    return false;
};