func lengthOfLongestSubstring(s string) int {
    maxLength := 0 
    chars := NewRuneSet()

    for i := 0 ; i < len(s) ; i++ {
        for j := i ; j < len(s) ; j++ {
            if chars.Contains(rune(s[j])){
                break
            }
            chars.Add(rune(s[j]))
        } 
        maxLength = max(maxLength,len(chars.items))
        chars.Clear()
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

func (s *RuneSet) Contains(r rune) bool {
    _, exists := s.items[r]
    return exists
}

func (s *RuneSet) Clear() {
    clear(s.items)
}