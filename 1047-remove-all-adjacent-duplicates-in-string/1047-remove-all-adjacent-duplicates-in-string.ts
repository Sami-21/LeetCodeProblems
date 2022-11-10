function removeDuplicates(s: string): string {
 let output:string[]=[];
    for(let i:number=0;i<s.length;i++){
        if((output.length > 0) && (output[output.length-1] === s[i])){
            output.pop();
        }else{
            output.push(s[i]);
        }
    }
            return output.join('');

};