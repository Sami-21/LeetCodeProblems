//after going through the problem we must return the total number of different bits (converting the given numbers from dec to bin)
//exemple :
// we have x=9 and y=3 (x=1001 , y=0011), after comparing x and y we notice the we have 2 different bits the first and the third one , so the output is 2
// potential solution:
// 1.converting the given numbers to binary 
// 2.adding zeros to the smallest number between the two (if needed) to make their length equal (exemple x=9 and y=3 (x=1001 , y=0011) adding two zeros at the beginning to y)
// 3.looping through them and increment a variable each time we get a different value in a specific index
// 4.returning the variable.

let  x = 14, y = 41

let x_bin =x.toString(2),y_bin=y.toString(2)

let output=0

    if(x_bin.length<y_bin.length){
        let xx = "0".repeat(Math.abs(x_bin.length-y_bin.length))
        x_bin = xx.concat(x_bin)
    }
    if(x_bin.length>y_bin.length){
        let yy = "0".repeat(Math.abs(x_bin.length-y_bin.length))
        y_bin = yy.concat(y_bin)
    }
    for(let i=0;i<x_bin.length;i++){
        if(x_bin[i]!=y_bin[i])output++
    }
    console.log(output)
