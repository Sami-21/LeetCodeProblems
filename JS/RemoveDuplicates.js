let nums = [0,0,1,1,1,2,2,3,3,4]

const removeDuplicates = (arr) =>{
    let nums = arr
    for(let i=0;i<nums.length;i++){
        
            nums.splice(i+1,1)
        
    }
    return nums
} 
console.log(nums)