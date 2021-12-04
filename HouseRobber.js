// Step 1 :Getting all details
// We are given an array of integers (positive integers) that represent the amount of money in houses along a street we are going to rob at a specific night. to avoid detection and getting arrested we rob houses that are not adjacents . 
// We are supposed to return a maximum amount of money we can rob according to the given houses ,of course without being detected.
// Step 2 :Double checking our inputs and outputs.
// Input : array contain the amount of money to rob from each house
// output : maximum amount of money robbed without being detected by security
// Step 3 :The main goal (do we have time and space ? what is our Constraints)
// according to the problem House Robber from LeetCode we are free to give a solution without a constraint. 
// Step 4 :Avoid being annoying 
///////////////////////////////////////////////////////////////////////////////////////////////
// Step 5 :Naive/ brute force approach
// A simple why to get the maximum is by looping through our array , adding up all elements that have an even index  saving the result , doing the same thing with odd indexed elements
// Then we return the biggest result between the two.  
// Step 6 : Why this approach is not the best
// honestly i have no idea yet

let nums = [165,54,3,2,66,54,18,74]

const maximumLoot = (nums) => {
    let sumEven=0,sumOdd=0,i=0,j=1;
    do{
            sumEven+=nums[i]
            sumOdd+=nums[j]    
            i+=2  
            j+=2
            console.log("even",sumEven)
            console.log("odd",sumOdd)
    }while(i<nums.length)
    
    return Math.max(sumEven,sumOdd) 
}

console.log(maximumLoot(nums))