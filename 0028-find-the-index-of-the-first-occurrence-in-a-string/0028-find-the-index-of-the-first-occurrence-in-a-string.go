func strStr(haystack string, needle string) int {
    for i := 0 ; i < len(haystack) - len(needle) + 1  ; i++ {
        matched := true;
        if haystack[i] == needle[0] { 
            for j := 1 ; j < len(needle) ; j++ {
                if haystack[i+j] != needle[j] {
                    matched = false;
                    break;
                }  
            }
            if matched {
                return i;
            }
        }
    } 

    return -1;
}