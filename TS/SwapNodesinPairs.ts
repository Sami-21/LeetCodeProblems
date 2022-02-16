//----------------------------Step 1----------------------------//
// We are given a singly linked list , we swap all adjacent pairs (nodes) .
//----------------------------Step 2----------------------------//
// Input : singly linked list (pre-swap)
// Output : singly linked list (post swap)
//----------------------------Step 3----------------------------//
// We need to solve the problem without changing the values within the nodes , we are not restricted about time and space complexity but we will try to give the optimal solution .
//----------------------------Step 4----------------------------//
// Don't be an annoying Fckwit .
//----------------------------Step 5----------------------------//
// Brute force / Naive approach .
// We traverse the given linked list , we save the reference of two adjacent nodes ( previous and current node ) and for each duo we swap the nodes data using an intermediate variable .
// we keep in  mind if the list is empty or contain only one element . In this case we return Null or the list it self ( head ).
//----------------------------Step 6----------------------------//
// The problem with this approach is that we change the data of the nodes and we are restricted to not change the nodes data .
//----------------------------Step 7----------------------------//
// Alternative Approach Changing nodes order (recursive) .
//----------------------------Step 8----------------------------//
// We can simply swap the first pair in the linked list ( which means the 2nd -> 1st -> rest of the list ) and then we call the same function to do the same thing to the rest of the list (swap the first pair and call itself for the rest of list ) .
// We add an exit case when we have only one element is the list we return the element and when the list is empty we return null .   
//----------------------------Step 9----------------------------//
// Coding the solution 

  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

const swapPairs = (head: ListNode | null): ListNode | null =>  {
    
    if(head === null || head.next === null) return head;
    
    let FirstNode:ListNode | null = head,
        SecondNode:ListNode | null = head.next,
        thirdNode = SecondNode.next;
        SecondNode.next = FirstNode;
        FirstNode.next = swapPairs(thirdNode);
        
    return SecondNode;
};