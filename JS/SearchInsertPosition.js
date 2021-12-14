/////////////////////////////////////////////////// STEP 1 //////////////////////////////////////////////////////// 
// we are given of distinct sorted array of integers (we don't have repeated elements and elements can be negative values) and a target value
// we need to return the index of the given target if it exists in our input else we return it index if it's added to the array (of course without ruining the oour sorted array)
/////////////////////////////////////////////////// STEP 2 //////////////////////////////////////////////////////// 
//to make things clear our inputs are a pre-sorted are with unique values (integers) and a target value (integer) , our output is the index of the target if it exists 
/////////////////////////////////////////////////// STEP 3 //////////////////////////////////////////////////////// 
//Our main goal is to solve this problem with a code that have  O(log n) time complexity.
/////////////////////////////////////////////////// STEP 4 //////////////////////////////////////////////////////// 
//                     DON'T ANNOY YOUR INTERVIEWER WITH TOO MUCH QUESTIONS 
/////////////////////////////////////////////////// STEP 5 //////////////////////////////////////////////////////// 
//the easiest solution would be looping through all elements and comparing it with our target (brute force) .
/////////////////////////////////////////////////// STEP 6 //////////////////////////////////////////////////////// 
//the bad thing about this approach that it's time consumming (O(n)) and we are forced to give a solution with O(log n) runtime complexity.
/////////////////////////////////////////////////// STEP 7 //////////////////////////////////////////////////////// 
//A great idea for this problem would be using binary search algorithm to find our target

//let's take couple exemples to better understand our problem.
//exemple 1:
//we are given this array [2,4,9,17,33,56,987] and our target is 56 ,we look for the target if it exists within our array and we simply return the index of our target which is 5
//exemple 2:
//we are given this array [2,45,78,99,633,1000,1010] and our target is 91 , we notice that our target isn't within our input but if we insert it within our input it index would be 3 (inserted between 78 and 99) so we return 3


let nums = [1,3,5,6], target = 2

const searchInsert = (nums,target) => {

    let start=0,end=nums.length-1,mid=Math.floor(end/2);

    while(start<end){
        if(target<nums[mid]){
            end=mid-1
            mid=Math.floor((start+end)/2)+1
        }
        if(target>nums[mid]){
            start=mid+1
            mid=Math.floor((start+end)/2)+1
        }
        if(target===nums[mid]){
            return mid
        }
    }

   if(nums[start]<target) return start+1

   return start
}
console.log(searchInsert(nums,target))