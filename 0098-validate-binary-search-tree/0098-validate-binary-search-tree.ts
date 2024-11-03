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

function isValidBST(root: TreeNode | null): boolean {
   let isValid:boolean = true;
   let previous = -Infinity;
    const inOrderTraversal =(root:TreeNode|null):void=>{
        if(root==null || !isValid) return;
        inOrderTraversal(root.left)
        if(previous>=root.val){
            isValid=false
            return
        }
        previous=root.val
        inOrderTraversal(root.right)
    }
        inOrderTraversal(root)
  return isValid;
}