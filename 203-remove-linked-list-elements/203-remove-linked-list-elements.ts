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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if(head ===null)
        return head;
    while(head?.val ===val)
        head =head.next;
    
    let currentNode:ListNode | null=head;
    let previousNode:ListNode  | null= head;
    while(currentNode){
 if (currentNode.val === val) {
      previousNode.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
        
        
    };
    return head;
};