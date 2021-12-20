//----------------------------Step 1----------------------------//
// we are given an array of distinct integer (all elements are unique). we return all pairs that have the minimum absolute difference.
//----------------------------Step 2----------------------------//
// The input : array of DISTINCT integers.
// The output : array of pairs which the absolute difference between each pair is minimum.
//----------------------------Step 3----------------------------//
// According to the given problem , we are not limited to space or memory or readability . However, an average engineer will solve the problem and a great one will make a good use of everything to make the solution as efficient as possible.
//----------------------------Step 4----------------------------//
//    DON'T ANNOY THE INTERVIEWER !!!!!!!!!!!!!!!!!
//----------------------------Step 5----------------------------//
// Brute force / naive approach 
// Using two nested loops to calculate the minimum absolute diffrence.
// after finding the minimum diffrence we loop again to get all the pairs which the absolute difference between them is equal to the calculated difference  
//----------------------------Step 6----------------------------//
// Criticizing the naive approach.
// Our time complexity is O(N²) which pretty bad.
//----------------------------Step 7----------------------------//
// The alternate approach 
//


let arr = [4,2,1,3]

 const minimumAbsDifference = (arr:number[]):any => {
    let result:any=[]
    let min_Dif:number=Math.abs(arr[0]-arr[1]);
    for(let i:number=0;i<arr.length;i++){
        for(let j:number=0;j<arr.length;j++){
            if(i!==j && Math.abs(arr[i]-arr[j])< min_Dif){
                
                    min_Dif = Math.abs(arr[i]-arr[j]);
                
            }
        }
    }
    for(let i:number=0;i<arr.length;i++){
        for(let j:number=0;j<arr.length;j++){
            if(i!==j){
                if( arr[i]- arr[j] === min_Dif ){
                    let element_exists=false;
                    for(let k:number= 0; k<result.length;k++){
                        if(arr[i]===result[k][0]&&arr[j]===result[k][1] ||arr[j]===result[k][0]&&arr[i]===result[k][1]) element_exists=true;
                    }

                 if(element_exists===false) result.push([arr[i],arr[j]]);
                }
            }
        }
    }

    return result;
 }
 console.log(minimumAbsDifference(arr))