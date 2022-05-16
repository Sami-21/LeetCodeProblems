/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head === null || head.next === null) return head;
    let previous:ListNode=head;
    let current:ListNode = head.next;
    while(current){
        if(current.val === previous.val){
            current = current.next;
            previous.next = current
        }else{
        previous = current;
        current = current.next;
        }

    }
    return head;
};