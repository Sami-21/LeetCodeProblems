var sample = "04250";
var myAtoi = function (s) {
    var arr = s.split("");
    while (s[0] === " " || s[0] === "0") {
        arr.shift();
    }
    return arr;
};
console.log(myAtoi(sample));
