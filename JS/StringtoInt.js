let s = '+-12'
let StringtoInt = (s) => {
    if(s.match(/\s/g)){
    s = s.replace(/\s/g,"")   
}
if(s[0].match(/[a-z,A-Z,+,-]/g)){
    if(!s[0].match(/[+,-]/g)){
        return (0)
    }
     if(s[0].match(/[+,-]/g) && s[1].match(/[+,-]/g)){
        return (01)
    }
}
if(s.match(/[a-z,A-Z]/g)){
    s = s.replace(/[a-z,A-Z]/g,"")   
}
if(Number(s)<((-2)**31)){
    return ((-2)**31)
}
if(Number(s)>(2**31)-1){
    return ((2**31)-1)
}

return (Number(s))
}
console.log(StringtoInt(s))








function mostBalancedPartition(parent, files_size) {  
    let total= new Array(parent.length)
    total =total.fill(0)
    let current_element,diffrence,swap;
    for(let i=0;i<parent.length;i++){
        current_element=i
        while(current_element!=-1){
            total[current_element]+=files_size[i]
            current_element =parent[current_element]
        }         
    }
    diffrence=Math.abs(total[0]-2*total[1])       
    
    
    for(let j=2;j<parent.length;j++){
        swap=Math.abs(total[0]-2*total[j])
        if(diffrence>=swap){
            diffrence=swap
        }
    }
    return diffrence
}