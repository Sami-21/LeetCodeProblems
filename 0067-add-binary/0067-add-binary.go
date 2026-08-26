import "slices"

func addBinary(a string, b string) string {
    result := []byte{};
    iteratorA := len(a) - 1;   
    iteratorB := len(b) - 1 ;
    reminder := byte(0);
    for iteratorA >= 0 || iteratorB >= 0 || reminder > 0 {
        aChar := byte('0');
        if iteratorA >= 0 {
            aChar = a[iteratorA]; 
        }
        bChar := byte('0');
        if iteratorB >= 0 {
            bChar = b[iteratorB]; 
        }
        sum := (aChar - '0') + (bChar - '0') + reminder;

        reminder = sum / 2;
        result = append(result,(sum % 2)+'0');
        iteratorA--;
        iteratorB--;
    }    
    slices.Reverse(result)

    return string(result);
}