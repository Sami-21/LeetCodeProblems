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

function inorderTraversal(root: TreeNode | null): number[] {
    const stack = []
    const recursiveFunc = (root: TreeNode | null):void => {
        if(!root) return
        recursiveFunc(root.left)
        stack.push(root.val)
        recursiveFunc(root.right)
    }
    if(root){
        recursiveFunc(root)
    }
    return stack
};