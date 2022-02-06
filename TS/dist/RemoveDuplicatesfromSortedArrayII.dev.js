"use strict";

//----------------------------Step 1----------------------------//
// We are given a pre-sorted array (non-decreasing order) of integers , we remove some duplicates in place (each element can occur at least twice) , we return the length of our new array .
//----------------------------Step 2----------------------------//
// Input : array of integers
// Output : integer (length of the new array after elements removal)
//----------------------------Step 3----------------------------//
// the removal process needs to be in place
//----------------------------Step 4----------------------------//
// Don't Be an Annoying F*ckwit
//----------------------------Step 5----------------------------//
// Brute Force / naive approach 
// we use a for loop , NewValue (integer) repeated (boolean) as variables 
// we set NewValue equal to the first element in the array and repeated set to false .
// we iterate through our array and we check if the element is equal to NewValue and repeated is false.
// If yes we set repeated to true 
// If no we set NewValue equal to the array element
// Now if the element is equal to Newvalue and repeated is true 
// We simply remove the element from the array
// let array_brute:Number[]=[0,0,0,0,1,1,1,1,2,2,3,3,3,4,4,8,8,8,9,9,9,9];
var array_brute = [0, 0, 1, 1, 1, 1, 2, 3, 3];
var NewValue = array_brute[0],
    repeated = false;

for (var i = 1; i < array_brute.length; i++) {
  if (array_brute[i] === NewValue) {
    if (repeated === true) array_brute.splice(i, 1);else repeated = true;
  } else {
    NewValue = array_brute[i];
  }
} // return array_brute.length;


console.log(array_brute);