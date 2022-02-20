//----------------------------Step 1----------------------------//
// We are given an array of positve integers , where we can perform two types of operation according to the type of numbers ( even or odd ) .
// if the number is even we divide it by 2 
// if the number is odd we multiply it by 2 
// The main goal is to minimize the array deviation ==> minimize the difference between array elements 
//----------------------------Step 2----------------------------//
// Input : array of Positive integers
// Output : Integer , the  minimum difference in the array (array's max value - array's min value )
//----------------------------Step 3----------------------------//
// According to the given problem on Leetcode , we are not forced to use a special approach .
// We assume that our main goal is to give the optimal solution by taking time , space complexity and readability into consideration 
//----------------------------Step 4----------------------------//
// Don't be annoying with your questions .
//----------------------------Step 5----------------------------//
// Brute Force / Naive Approach
// 


const minimumDeviation = (nums: number[]): number =>  {
    let UniqueVals= new Set<number>();
    for(let i:number=0;i<nums.length;i++){
     if(nums[i]%2!=0) nums[i] *=2;
     UniqueVals.add(nums[i]);
    }
    console.log(Array.from(UniqueVals)[2])
  return 0;
};
minimumDeviation([11,6,12,30,15,84,3]);