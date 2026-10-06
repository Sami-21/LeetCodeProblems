func minAddToMakeValid(s string) int {
    open := 0
    missing := 0

    for i := 0 ; i < len(s) ; i++ {
        if s[i] == '(' {
            open++
        }
        if s[i] == ')' && open == 0 {
            missing++
        }        
        if s[i] == ')' && open > 0 {
            open--
        }
    }  

    return open + missing
}



// func minAddToMakeValid(s string) int {
//     stack := []byte{}

//     for i := 0 ; i < len(s) ; i++ {
//         top := byte(0);
//         if len(stack) > 0{
//             top = stack[len(stack)-1]
//         }
//         if (top == '(' && s[i] == ')') {
//             stack = stack[:len(stack)-1]
//         } else {
//             stack = append(stack, s[i])
//         }
//     }  

//     return len(stack)
// }

