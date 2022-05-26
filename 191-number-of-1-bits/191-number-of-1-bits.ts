function hammingWeight(n: number): number {
    let output:number = 0;
    let arrayOfNumbers:string[]= n.toString(2).split("");
    for(let i:number = 0 ; i<arrayOfNumbers.length ; i++){
        if(arrayOfNumbers[i] === "1") output++;
    }
    return output;
};