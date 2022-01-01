let sample = "04250"

const myAtoi = (s: string): string[] => {
    let arr:string[] = s.split("")
    while (s[0]===" " || s[0]==="0"){
        arr.shift()
    }
    
return arr;
};
console.log(myAtoi(sample))