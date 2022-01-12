"use strict";

//----------------------------Step 1----------------------------//
// we are given an array of integers ,  we return the element that reccure first if it exists , else we return NULL.
//----------------------------Step 2----------------------------//
// The input : array of integers.
// The output :integer or (NULL).
//----------------------------Step 3----------------------------//
// According to the given problem , we are not limited to space or memory or readability . However, an average engineer will solve the problem and a great one will make a good use of everything to make the solution as efficient as possible.
//----------------------------Step 4----------------------------//
//    DON'T ANNOY THE INTERVIEWER !!!!!!!!!!!!!!!!!
//----------------------------Step 5----------------------------//
// Brute force / naive approach 
// Using two nested loops + new array. After initalizing a new empty array we start looping through the given the array of integers .    
// We search for the current value in our input in the new array.
// if it exists we return the value else we push it to the new array.
// after looping through all the array's elements we return NULL; 
//----------------------------Step 6----------------------------//
// Criticizing the naive approach.
// USing the two nested loops will cost us some much time.
// Our time complexity is O(N²) which is pretty bad.
//----------------------------Step 7----------------------------//
// The alternate approachs 
// 1- Improved readability
// We can use a pre-built js function (array.includes) to search for a match , this will make the code more readable. 
//-----------------------Brute Force Approach----------------------
// let INT:number[] = [1,58,4,6,874,3,16,87,99,166,5874,5];
// const FirstReccuring_BruteForce =(arr:number[]) =>{
//     let FirstAppearance:number[] = [];
//     for(let i:number=0;i<arr.length;i++){
//         for(let j:number=0;j<FirstAppearance.length;j++){
//             if(FirstAppearance[j]===arr[i]) return arr[i];
//         }
//         FirstAppearance.push(arr[i]);
//     } 
//     return "Fuck";
// } 
// console.log(FirstReccuring_BruteForce(INT))
var INT = [1, 58, 4, 6, 874, 3, 16, 87, 99, 16, 5874, 5];

var FirstReccuring_Readability = function FirstReccuring_Readability(arr) {
  var FirstAppearance = [];

  for (var i = 0; i < arr.length; i++) {
    if (FirstAppearance.includes(arr[i])) return arr[i];
    FirstAppearance.push(arr[i]);
  }

  return "Fuck";
};

console.log(FirstReccuring_Readability(INT));