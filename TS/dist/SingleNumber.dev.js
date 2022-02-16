"use strict";

//----------------------------Step 1----------------------------//
// We are given a non-empty array of integers , each element of the array appears twice only one appears one time , we return that element.
//----------------------------Step 2----------------------------//
// Input : array of integers
// Output : Integer
//----------------------------Step 3----------------------------//
// Our main goal is to solve it with time complexity of O(n) and space complexity O(1)
//----------------------------Step 4----------------------------//
// Don't be an annoying F*ckwit
//----------------------------Step 5----------------------------//
// Brute force / naive approach
// We can use two nested loops to traverse the array and check if the element appears twice if not we simply return the element. 
//----------------------------Step 6----------------------------//
// This approach have a Time Complexity O(n²) and our main goal is O(n) 
//----------------------------Step 7----------------------------//
// Alternative Approach
// 
// let num21:number[] = [4,1,2,1,2]
// const singleNumber = (nums: number[]): number => {
// let result:number;
// nums.forEach(value => {
// })
// return result;
// };
var something = 4 ^ 2 ^ 2 ^ 1 ^ 2;
console.log(something);