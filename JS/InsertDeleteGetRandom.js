class RandomizedSet{
    constructor(){
        this.content = new Set()
        this.size=0
    }
insert(value){
this.content.add(value)
if(this.size===this.content.size){
    return false
}else{
    this.size++
    return false
}
}
remove(value){
    this.content.delete(value)   
    if(this.size===this.content.size){
        return false
    }else{
        this.size--
        return true
    }
    }
getRandomly(){
    console.log(Array.from(this.content)[Math.floor(Math.random()* this.size)])
}
    
}
let TheSet = new RandomizedSet()
TheSet.insert(1)
TheSet.remove(2)
TheSet.insert(2)
TheSet.getRandomly()
TheSet.remove(1)
TheSet.insert(2)
TheSet.getRandomly()

