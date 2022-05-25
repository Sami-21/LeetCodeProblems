function fizzBuzz(n: number): string[] {
    let output:string[]=[];
    for(let i:number=1 ;i<n+1;i++){
        if(i%3 === 0 && i%5 ===0 ){
            output[i-1] = "FizzBuzz";
        }else{
            if(i%3 === 0)
            output[i-1] = "Fizz";
            if(i%5 === 0)
            output[i-1] = "Buzz";
            if(i%3 !== 0 && i%5 !==0 )
            output[i-1] = String(i);     
        }
    }
    return output;
};