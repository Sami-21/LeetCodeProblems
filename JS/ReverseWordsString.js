let s = "   The string reverse Master has arrived   "          
let array = s.split(" ").filter(c =>  c.replace(/\s/g,"")).reverse().join().replace(/,/g ," ")
console.log(array)