function sumZero(n: number): number[] {
    let output:number[] = []
    if(n%2==0){
        for(let i:number=1;i<((n/2)+1);i++){
        output.push(i);
        output.push(i*-1);
        }
    }else{
        output.push(0);
        for(let i:number=1;i<(n/2);i++){
        output.push(i);
        output.push(i*-1);
        }
    }
    return output;
};