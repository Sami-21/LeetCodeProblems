//----------------------------Step 1----------------------------//
// We are given an encoded string (string),and we return its decoded string (string).
// We may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// We can also assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
//----------------------------Step 2----------------------------//
// Input :  endcoded string (string)
// Output : decoded string (string) 
// Example:
// input : s = "3[a]2[bc]"
// Output: "aaabcbc"
//----------------------------Step 3----------------------------//
// According to the given problem , why are not constrained by time , space or readabilty . However we will make speed our 1st priority.   
//----------------------------Step 4----------------------------//
//    DON'T ANNOY THE INTERVIEWER !!!!!!!!!!!!!!!!!
//----------------------------Step 5----------------------------//
// Brute force / naive approach
// We simply go through the given string using a loop. 
// If we face a digit , we multiply the string within the next brackets by that digits.
// If we don't face a digit we simply append the character to the output string.  
//----------------------------Step 6----------------------------//
// The code will be a little bit messy which will affect readabilty.
//----------------------------Step 7----------------------------//
// For every charcater in our input:------------------------------------------------
// while it is a digit ---------------------------------
// append it to a empty string                         .
// end while--------------------------------------------










// let s:string = "3[a]2[bc]";
let s:string = "3[a2[c]]";


const decodeString =(s:string):string => {
    let output="";
    for(let i:number=0;i<s.length;i++){
        let factor:string="";
        let substring:string="";
        while(s[i].match(/\d/g)){
            factor+=s[i];
            i++;
        }
        if(s[i]==="["){
            i++;
            while(s[i]!=="]"){
                substring+=s[i];
                i++;
            }
        }
        if(s[i]==="]"){
            output+=substring.repeat(parseInt(factor));
        }
    }   
   return output;
}

    console.log(decodeString(s));