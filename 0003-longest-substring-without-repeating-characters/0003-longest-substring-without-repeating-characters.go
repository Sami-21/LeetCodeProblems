func lengthOfLongestSubstring(s string) int {
    maxLength := 0 
    chars := NewRuneSet()
    right := 0
    left := 0  
    for right < len(s)  {
        if chars.Contains(rune(s[right])){
            for chars.Contains(rune(s[right])) {
                chars.Remove(rune(s[left]))
                left++
            }
        }
        chars.Add(rune(s[right]))
        maxLength = max(maxLength,chars.Len())
        right++
    }

    return maxLength
}

type RuneSet struct {
    items map[rune]struct{}
}

func NewRuneSet() *RuneSet {
    return &RuneSet{
        items: make(map[rune]struct{}),
    }
}

func (s *RuneSet) Add(r rune) {
    s.items[r] = struct{}{}
}

func (s *RuneSet) Remove(r rune) {
    delete(s.items, r)
}

func (s *RuneSet) Contains(r rune) bool {
    _, exists := s.items[r]
    return exists
}

func (s *RuneSet) Len() int {
    return len(s.items)
}
