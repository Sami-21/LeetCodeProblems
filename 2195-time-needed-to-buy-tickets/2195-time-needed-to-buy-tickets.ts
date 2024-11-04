function timeRequiredToBuy(tickets: number[], k: number): number {
    let count:number = 0
    let index:number = 0
    while(tickets[k]!=0){
        if(tickets[index] > 0){
            tickets[index]--
            count++
            index =(index+1) % tickets.length
        }else if(tickets[index] === 0)
            index =(index+1) % tickets.length
    }
    return count
};