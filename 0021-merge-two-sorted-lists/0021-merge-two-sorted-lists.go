/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    resultOutput := &ListNode{Val:0};
    head := resultOutput;

    currentL1 := list1;
    currentL2 := list2;

    for currentL1 != nil && currentL2 != nil {
        if currentL1.Val > currentL2.Val{
            resultOutput.Next = &ListNode{Val:currentL2.Val};
            currentL2 = currentL2.Next;
            resultOutput = resultOutput.Next;  
        }else {
            resultOutput.Next = &ListNode{Val:currentL1.Val};
            currentL1 = currentL1.Next;
            resultOutput = resultOutput.Next;
        }
    }
    
    if currentL1 != nil {
        resultOutput.Next = currentL1;
    } else {
        resultOutput.Next = currentL2;
    }

    return head.Next;
}