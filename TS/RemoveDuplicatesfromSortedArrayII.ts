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
// We simply remove the element from the array and we decrement our counter by 1 so we don't mess up the traversal  

// let arr:number[]=[0,0,0,0,1,1,1,1,2,2,3,3,3,4,4,8,8,8,9,9,9,9];

// const RDFS =(arr:number[]):number =>{
// let NewValue:number=arr[0],repeated:Boolean=false;

// for(let i:number=1;i<arr.length;i++){
//     if(arr[i]!== NewValue){
//         NewValue=arr[i];
//         repeated=false;
//     }else{
//         if(repeated===true) arr.splice(i,1);
//         else repeated=true;
//     }
// }
// return arr.length;
// }

//----------------------------Step 6 ----------------------------//
// this approach is not the optimal solution , we can try a different approach  
//----------------------------Step 7----------------------------//
// Alternative Approach 
// We loop through the array and we simply compare between an element and the successor of his successor, if they are equal we remove the element and we decremnt our counter by 1 so we don't mess up the traversal


let arr21:number[]=[0,0,0,0,1,1,1,1,2,2,3,3,3,4,4,8,8,8,9,9,9,9];

const RDFS =(arr:number[]):number =>{
for(let i:number=0;i<arr.length-2;i++){
   if(arr[i]===arr[i+2]) {
       arr.splice(i,1)
       i--;
   }
}
return arr.length;
}

console.log(RDFS(arr21));