/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    resultList := &ListNode{Val: 0}
    head := resultList

    currentL1 := l1
    currentL2 := l2
    carry := 0

    for currentL1 != nil || currentL2 != nil || carry != 0 {
        l1Val := 0
        l2Val := 0

        if currentL1 != nil {
            l1Val = currentL1.Val
        }

        if currentL2 != nil {
            l2Val = currentL2.Val
        }

        sum := l1Val + l2Val + carry

        resultList.Val = sum % 10
        carry = sum / 10

        if currentL1 != nil {
            currentL1 = currentL1.Next
        }

        if currentL2 != nil {
            currentL2 = currentL2.Next
        }

        if currentL1 != nil || currentL2 != nil || carry != 0 {
            resultList.Next = &ListNode{Val: 0}
            resultList = resultList.Next
        }
    }

    return head
}