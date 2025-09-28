func romanToInt(s string) int {
	chars := []rune(s)
	output := 0

	for i := range chars {
		value := resolveCharToInt(chars[i])
		if i+1 < len(chars) {
			next := resolveCharToInt(chars[i+1])
			if next > value {
				output -= value
				continue
			}
		}
		output += value
	}
	return output
}

func resolveCharToInt(s rune) int {
	switch s {
	case 'I':
		return 1
	case 'V':
		return 5
	case 'X':
		return 10
	case 'L':
		return 50
	case 'C':
		return 100
	case 'D':
		return 500
	case 'M':
		return 1000
	default:
		return 0
	}
}
