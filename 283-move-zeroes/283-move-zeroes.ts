/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let Zeros:number=0;
for(let i:number=0;i<nums.length;i++){
    while(nums[i] === 0){
        nums.splice(i,1) 
        Zeros++;    
    }
}

for(let i:number=0;i<Zeros;i++){
    nums.push(0);
}
 
};