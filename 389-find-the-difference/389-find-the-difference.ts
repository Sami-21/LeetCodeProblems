const findTheDifference = (s: string, t: string): string => {
    
    let S_Object:any={};
    
    for(let i:number=0;i<s.length;i++){
            if(s[i] in S_Object)
            S_Object[s[i]]++;
        else{
            S_Object[s[i]]=1;
        }
    };
    for(let j:number=0;j<t.length;j++){
        if(!(t[j] in S_Object))
            return t[j];
        if(S_Object[t[j]] === 0)
            return t[j];
        S_Object[t[j]]--
    };
    
};