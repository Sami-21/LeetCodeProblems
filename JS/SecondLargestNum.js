// let array= new Array(Math.floor(Math.random()*10) +5).fill(1);
// array = array.map(n => Math.floor(Math.random()*n*100))
// console.log(array)

// const secondLargestInt = (arr) => {
//  return Math.max(...arr.filter( num => num < Math.max(...arr)))
// }
// console.log(secondLargestInt(array))

///////////////////////////////////////////////////////
let arr = [9,9,9,9,9];

const plusOne = (digits) => {

    for(let i =0;i<digits.length;i++){
        digits[digits.length - i -1]++
        if(digits[digits.length - i -1]<10){
            return digits
        }else{
            digits[digits.length - i -1]=0
        }
    }  
    if(digits[0]===0){
        digits.unshift(1)
    }
    return digits
};
console.log(plusOne(arr))
