func strStr(haystack string, needle string) int {
    targetIndex := -1;
    for i := 0 ; i < len(haystack) - len(needle) + 1  ; i++ {
        stopCheck := false;
        matchingStart := false;
        if haystack[i] == needle[0] { 
            matchingStart = true;
            for j := 1 ; j < len(needle) ; j++ {
                if haystack[i+j] != needle[j] {
                    stopCheck = true;
                    break;
                }  
            }
            if !stopCheck {
                targetIndex = i;
            }
        }
        if !stopCheck && matchingStart {
            break;
        }
    } 
    return targetIndex;
}