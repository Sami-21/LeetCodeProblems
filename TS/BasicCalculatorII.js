//----------------------------Step 1----------------------------//
// We are given string that represent an expression , we must evaluate the expression and return the result  
//----------------------------Step 2----------------------------//
// The input : string (expression , example '2+1-9*2') 
// The output : the result of evaluation in our case a number [-2^31,(2^31)-1]   
//----------------------------Step 3----------------------------//
// According to the given problem named "Basic Calculator II" , our goal is to solve the problem without using pre-built functions like eval() , we also assume that our goal is to make our program execute fast (time complexity).
//----------------------------Step 4----------------------------//
//              DON'T ANNOY THE INTERVIEWER MAAAAAAAAAAAAAAAN   
//----------------------------Step 5----------------------------//
// Brute force / Naive approach 
// we assume that our input is always valid 
// we traverse through the given string using a loop , we look for arthtmetic operators , we first look for (* or /) , after finding the operator we get the numbers located on the right and left side of the operator by simply using the operator index. 
//----------------------------Step 6----------------------------//
// this isn't the optimal approach because time and stuff
var expression = "142*100";
var calculate = function (s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "*":
                var a = '', b = '';
                var j = i - 1;
                while ((/\d/).test(s[j]) && j >= 0) {
                    a += s[j];
                    j--;
                }
                var k = i + 1;
                while ((/\d/).test(s[k]) && k < s.length) {
                    b += s[k];
                    k++;
                }
                result += parseInt(a) * parseInt(b);
                break;
            case "/":
                break;
            default:
                break;
        }
    }
    return result;
};
console.log(calculate(expression));
