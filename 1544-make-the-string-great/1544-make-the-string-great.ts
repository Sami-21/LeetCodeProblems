function makeGood(s: string): string {
    if(s.length === 1) return s;
    let output:string = s ;
    let isGreat:boolean = true;
    while(output.length > 1 ){
        isGreat = true;
        for(let i:number=0;i<output.length-1;i++){
             if(Math.abs(output.charCodeAt(i) - output.charCodeAt(i+1)) === 32 ){
                    output = output.substr(0 , i) + output.substr(i+2 , output.length);   
                    isGreat = false;
                   break;
             } 
        }
        if(isGreat)
            break;        
    }    
    return output;
};