let number = 58
let thousands = Math.floor(number/1000)
let hundreds = Math.floor((number-(thousands*1000))/100)
let tens = Math.floor((number-(thousands*1000)-(hundreds*100))/10)
let units = number-(thousands*1000)-(hundreds*100)-(tens*10)
let output=""

output+="M".repeat(thousands)
switch(hundreds){
case 1:
case 2:
case 3:
output+="C".repeat(hundreds)
break;
case 4:
    output+="CD"
    break;
case 5:
    output+="D"
    break;
case 6:
case 7:
case 8:
    output+="D"
    output+="C".repeat(hundreds-5)
    break;
case 9:
output+="CM"
}

switch(tens){
    case 1:
case 2:
case 3:
output+="X".repeat(tens)
break;
case 4:
    output+="XL"
    break;
case 5:
    output+="L"
    break;
case 6:
case 7:
case 8:
    output+="L"
    output+="X".repeat(tens-5)
    break;
case 9:
output+="XC"
}
switch(units){
case 1:
case 2:
case 3:
output+="I".repeat(units)
break;
case 4:
    output+="IV"
    break;
case 5:
    output+="V"
    break;
case 6:
case 7:
case 8:
    output+="V"
    output+="I".repeat(units-5)
    break;
case 9:
output+="IX"
}

 console.log(output)
"MMMCDXXI"