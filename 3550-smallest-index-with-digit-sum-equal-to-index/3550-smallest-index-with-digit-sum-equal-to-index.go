func smallestIndex(nums []int) int {
    for i := 0 ; i < len(nums) ; i ++ {
        digits := splitInt(nums[i])
        if calculateArrayTotal(digits) == i {
            return i 
        }
    }
    return -1;
}

func splitInt(number int) []int{
    	if number < 0 {
		number = -number
	}
	
	if number == 0 {
		return []int{0}
	}

	var digits []int
	for number > 0 {
		digits = append(digits, number%10)
		number /= 10
	}

	return digits
}

func calculateArrayTotal(numbers []int) int {
    sum := 0

    for _, num := range numbers {
        sum += num
    }
    return sum
}