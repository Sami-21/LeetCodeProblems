let nums = [-1,0,2,-1,-4,1]
console.log(nums)
const triplet = (nums) => {
    let output=[]
for(let i=0;i<nums.length-2;i++){
    for(let j=i+1;j<nums.length-1;j++){
        for(let k=j+1;k<nums.length;k++){
            if(nums[i]+nums[j]+nums[k]===0){
                if(!output.some(el => JSON.stringify(el)===JSON.stringify(([nums[i],nums[j],nums[k]]).sort()))){
                    output.unshift(([nums[i],nums[j],nums[k]]).sort())
                }                                   
                }
            }
        }
    
}
return output
}
console.log(triplet(nums))

//time limit exceeded