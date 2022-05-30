function selfDividingNumbers(left: number, right: number): number[] {
    const selfDivided =(num:number):boolean => {
        let numString:string = num.toString();
        for(let j:number=0;j<numString.length;j++)
                {
                    if(num % Number(numString[j]) !== 0) return false;
                }
                    return true;
    }
    let output:number[]=[];
    for(let i:number=left;i<right+1;i++){
        if(i<10) output.push(i);
        else{
            if(selfDivided(i) === true) output.push(i);
        }
    }
    return output;
};