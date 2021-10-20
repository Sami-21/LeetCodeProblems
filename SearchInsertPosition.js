let nums = [1,3,5,6], target = 5

const searchInsert = (nums,target) => {
    if(nums.includes(target)){
        return nums.indexOf(target)
    }
    else{
        if(nums[0]>target) return 0
        if(nums[nums.length-1]<target) return nums.length
        for(let i=0;i<nums.length;i++){
            if(nums[i]<target && nums[i+1]>target){
                return i+1 
            }
        }
    }
}
console.log(searchInsert(nums,target))