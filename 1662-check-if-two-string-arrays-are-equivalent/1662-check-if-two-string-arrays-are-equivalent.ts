function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let s1:string="";
    let s2:string="";
    for(let i:number=0;i<word1.length;i++){
        s1+=word1[i];
    }
     for(let i:number=0;i<word2.length;i++){
        s2+=word2[i];
    }
    if(s1===s2) return true 
    return  false ;
};