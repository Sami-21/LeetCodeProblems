function maximum69Number (num: number): number {
    let output:string[] = num.toString().split("");
    for(let i:number=0;i<output.length;i++){
        if(output[i] === '6'){
            output[i]= '9';
            i = output.length;
        }
    }
    
    return parseInt(output.join(""));
};