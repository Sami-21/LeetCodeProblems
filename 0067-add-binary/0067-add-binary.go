func addBinary(a string, b string) string {
    result := make([]byte,max(len(a),len(b))+1);
    resultIterator := len(result)-1

    iteratorA := len(a) - 1;   
    iteratorB := len(b) - 1 ;
    carry := byte(0);

    for iteratorA >= 0 || iteratorB >= 0 || carry > 0 {
        aChar := byte(0);
        if iteratorA >= 0 {
            aChar = a[iteratorA]  - '0'; 
        }

        bChar := byte(0);
        if iteratorB >= 0 {
            bChar = b[iteratorB] - '0'; 
        }

        sum := aChar + bChar + carry;

        carry = sum / 2;
        result[resultIterator] = (sum % 2)+'0';

        iteratorA--;
        iteratorB--;
        resultIterator--;
    }    

    return string(result[resultIterator+1:])
}