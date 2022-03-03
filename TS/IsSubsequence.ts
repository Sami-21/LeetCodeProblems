// Problem Overview 

// We are given two strings s and t, we return true if s is a subsequence of t, or false otherwise.

// s is a subsequense of t if :
//          -all characters in s appears in t  in the same order as in s string. 

// Example : s= "hon" , t= "hadouken"

// First of all the characters in s are in this order "h" --> "o" --> "n" and t are "h" --> "a" --> "d" --> "o" --> "u" --> "k" --> "e" --> "n"

// When traversing through t we notice that the appearence of s characters is the same ( "h" --> ........ --> "o" --> ........"n")

// So true in returned

// Input : s string , t string
// Ouput : boolean

// Main goal

// our main goal is to give the optimal solution ( the best balance between time , space and readability )

// My Approach

// We know that the order of appearence of s characters in t string is the same order in s string itself.

// Which implements, for each  i , j , n , m in N ( natural numbers ) s[i] = t[j] =>  s[i+n] = t[j+m]

// We initiate a __counter__ = 0  and we traverse the t string and for each character within t we apply what's below : 

//          -  if s[__counter__] is equal to t_character , we increment __counter__  by one.
//              ( this means that the character of s exists in t and it's order is correct )

// After the traversal is over , we should have __counter__ equal to s string's length and we return true.
// if not we return false .

// The Code

const IsSubsequence =(s:string , t:string):boolean  => {
    
    let counter:number = 0;

    // t string traversal

    for(let j:number=0;j<t.length;j++){

        if(s[counter] === t[j]) counter-=-1;
    }

    if(counter === s.length) return true;

    return false;
}