func sumOfSquares(nums []int) int {
    sum := 0
    n := len(nums)

    for y := 1; y*y <= n; y++ {
        if n%y != 0 {
            continue
        }

        z := n / y

        sum += nums[y-1] * nums[y-1]

        if y != z {
            sum += nums[z-1] * nums[z-1]
        }
    }

    return sum
}