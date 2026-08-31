/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func nodesBetweenCriticalPoints(head *ListNode) []int {
    counter := 1;
    indexes := []int{};
    current := head.Next;
    previousNode := head;
    for current.Next != nil {
        nextNode := current.Next;
        if current.Val > nextNode.Val && current.Val > previousNode.Val {
            indexes = append(indexes,counter);
        }
        if current.Val < nextNode.Val && current.Val < previousNode.Val {
            indexes = append(indexes,counter);
        } 
        counter++;
        previousNode = current;
        current =  nextNode;
    }

    if len(indexes) > 1 {
        min := indexes[1] - indexes[0];
        for i := 1 ; i < len(indexes) - 1 ; i++ {
            possibleMin := indexes[i+1] - indexes[i];
            if min > possibleMin {
                min = possibleMin;
            }
        }
        max :=  indexes[len(indexes)-1] - indexes[0];
        return []int{min, max};
    }
    return []int{-1,-1};
}
