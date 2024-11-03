/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function findMode(root: TreeNode | null): number[] {
  let result: number[] = [];
  let previous: number = 0;
  let counter: number = 0;
  let max: number = 0;
  const inOrderTraversal = (root: TreeNode | null) => {
    if (root === null) return;

    inOrderTraversal(root.left);
    if (previous === root.val) counter++;
    else counter=1;

    if (counter === max) result.push(root.val);
    else if (counter > max) {
      max = counter;
      result = [root.val];
    }
    previous = root.val;
    inOrderTraversal(root.right);
  };
  if (root) inOrderTraversal(root);
  return result;
}