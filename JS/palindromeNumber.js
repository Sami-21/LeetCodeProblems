let x = -10
if(x<0) return console.log("Oh no!")
if(x>=0 && x<10) return console.log("palindrome")
let reversed_x = x.toString().split("").reverse().join()

while(reversed_x.includes(",")){
    reversed_x =reversed_x.replace(",","")
}

if(x===Number(reversed_x)) return console.log("palindrome")
else return console.log("Oh no!")




