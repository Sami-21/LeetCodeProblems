//----------------------------Step 1----------------------------//

// We are given an array of integers ( length of the array is n) , we return the element the occured atleast n/2 times ( we assume that this element always exists ) 

//----------------------------Step 2----------------------------//

// Input : array of integers
// Output : the most repeated integer in the array ( integer )

//----------------------------Step 3----------------------------//

// According to the given problem in Leetcode , our goal is to solve it in linear time O(n) and constant space O(1) 

//----------------------------Step 4----------------------------//

// Don't be annoying with too much stupid questions

//----------------------------Step 5----------------------------//

// Brute Force / Naive approach
// we traverse the array and for each element we count his occurrence (using two nested loops) .
// if the number of occurrence is superior then array's length / 2 , we return that element  

// const majorityElement = (nums: number[]): any => {
//     let count:number;
//     for(let i:number = 0 ; i<nums.length - 1 ; i++ ){
//         count=1;
//         for(let j:number = i+1 ; j<nums.length ; j++ ){
//             if(nums[i] === nums[j]) count++ ;
//             if(count > nums.length / 2) return nums[i] ;
//         }
//     }
// };

//----------------------------Step 6----------------------------//

// Previous Approach Drawbacks 
// By analysing the previous approach our time sould be O(n²) beacuase of the two nested loops , and the space complexity is constant O(1) .
// Our goal is to solve it in O(n) time complexity and O(1) space complexity .

//----------------------------Step 7 + Step 8----------------------------//

// Alternative Approach ( using Moore's Voting algorithm )

// Phase One
// We the first step to find the Majority Element is to find a candidate that might be the majority element
// To find this element we traverse the array and we follow the step below :
// 1_ We assume that the Majority_Element is the first in the array ( index of 0 => Majority_Element_Index  = 0 ).
// 2_ We set a counter ( count = 1 ) to count the occurrences of Majority_Element , according to the value of the elements in the array  we do the following :
//          I_ If Array_Element is equal to Majority_Element we increment the counter by one .
//          II_ If Array_Element is not equal to Majority_Element we decrement the counter by one .
//              1_If the counter is equal to zero we set the Majority_Element = Array_Element , Majority_Element_Index = Array_Element_index and we reset the counter to 1 . 

// Phase Two
// When the looping ends we end up with the element that has a high chance to be the Majority element.
// We loop again through the array and we count the occurrence of the element previously obtained ,if the element occur more the half the size of the array , we return that element. 


//----------------------------Step 9 + Step 10----------------------------//


const  majorityElement = (nums: number[]): number | undefined =>  {

    // initiating Majority_Element_index and his count 

    let maj_index: number = 0, count: number = 1;

    // Phase One

    // Looping to find the index of the element that maybe the Majority_Element

    for (let i: number = 0; i < nums.length; i++) {

        // Majority_Element repeated => count increment by 1

        if (nums[maj_index] === nums[i])
            count++;

        // Different value then Majority_Element => New Majority_Element_Index count reset to 1

        else {
            count--;
            if(count == 0){
            maj_index = i;
            count = 1;
            }     
        }
    }
    
    count = 0; // count reset for phase two

    // Phase Two

    // Looping to calculate the occurrence of the previous obtained value ( using the index )

    for (let i: number = 0; i < nums.length; i++) {

        // Checking if it's equal to Majority_Element to increment it's count 

        if (nums[maj_index] === nums[i])
            count++; 

        // Checking if it's occurence is superior then the half of the size of the array 

        if (count > nums.length / 2)
            return nums[maj_index];
    }

}
