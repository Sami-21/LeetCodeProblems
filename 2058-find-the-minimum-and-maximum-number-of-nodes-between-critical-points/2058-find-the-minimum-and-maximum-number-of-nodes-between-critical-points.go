/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func nodesBetweenCriticalPoints(head *ListNode) []int {
    current := head.Next
    previousNode := head
    index :=1

    firstCritical := -1
    previousCritical := -1
    minDistance := -1

    for current.Next != nil {
        nextNode := current.Next

        isCritical :=
            (current.Val > previousNode.Val && current.Val > nextNode.Val) ||
            (current.Val < previousNode.Val && current.Val < nextNode.Val)

        if isCritical {
            if firstCritical == -1 {
                firstCritical = index
            } else {
                distance := index - previousCritical

                if minDistance == -1 || distance < minDistance {
                    minDistance = distance
                }
            }

            previousCritical = index
        }

        previousNode = current
        current = nextNode
        index++
    }

    if minDistance == -1 {
        return []int{-1, -1}
    }

    maxDistance := previousCritical - firstCritical

    return []int{minDistance,maxDistance};
}
