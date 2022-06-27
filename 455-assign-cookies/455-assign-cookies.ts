function findContentChildren(g: number[], s: number[]): number {
    let ans:number=0;
    for(let i:number=0;i<g.length;i++){
        let bestChildCookie:number=s[0];
        let bestChildCookieIndex:number =0;
        for(let j:number=0;j<s.length;j++){
            
            if(s[j]>=g[i]){
                if(bestChildCookie<g[i] || s[j]<bestChildCookie){
                    bestChildCookie = s[j];
                    bestChildCookieIndex = j;
                }
                
            
        }
    }
           if(bestChildCookie>=g[i]){
                s.splice(bestChildCookieIndex,1);
                ans++;
            }
    }
    return ans;
};