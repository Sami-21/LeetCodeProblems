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
// Alternative Approach (Using XOR)
// Quick reminder : a XOR a = 0
//                  a XOR 0 = 0
//                  XOR is associative ==> a XOR (b XOR (c XOR d)) = a XOR b XOR c XOR d
// XOR operator compare bits, example 100 XOR 001 = 101 (4 XOR 1 = 5) 
//----------------------------Step 8----------------------------//
// We loop through the array and  we use the XOR operator , since all elements appears twice except one , all pairs will equal 0 (a XOR a = 0)
// We also have XOR is associative and  the only element will be left along with zero's from all pairs (a XOR 0 = a)
// We return the result  
//----------------------------Step 9----------------------------//
 let Nums:number[] =[1,2,5,7,8,5,3,14,8,7,1,2,14]

 const singleNumber = (nums:number[]):number =>{

    // where the result is saved

    let result:number=nums[0];

    // array traversal

    for(let i:number=1;i<nums.length;i++){
        
        result^=nums[i]; // result = result ^ nums[i] (^ is the XOR operator in JS + TS)

    } 
    
    return result;
 }