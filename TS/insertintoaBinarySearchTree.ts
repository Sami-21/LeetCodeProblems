//----------------------------Step 1----------------------------//
// We are given the root of a binary search tree that contains integers in it nodes and a target value that needs to be inserted in the tree (we assume that the value does nto exist in the tree).
// We must keep in mind that the output tree is a binary search tree .
//----------------------------Step 2----------------------------//
// Input : [] root of the the BST pre insertion.
// Output : [] root of the BST post insertion.
//----------------------------Step 3----------------------------//
// According to the given problem , we are not limited to space or memory or readability . However, an average engineer will solve the problem and a great one will make a good use of everything to make the solution as efficient as possible.
//----------------------------Step 4----------------------------//
//    DON'T ANNOY THE INTERVIEWER !!!!!!!!!!!!!!!!!

 class TreeNode {
         val: number
         left: TreeNode | null
         right: TreeNode | null
         constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.left = (left===undefined ? null : left)
             this.right = (right===undefined ? null : right)
         }
     }

class BST {
    root: TreeNode | null
    constructor(){
        this.root = null;
    }
    add(value:number){
         
        if(this.root===null){
            this.root = new TreeNode(value);
            return this.root;
        }
        else{
            let current:TreeNode = this.root; 
            let newNode = new TreeNode(value)
            while(current){
                if(current.val<value){
                    if(current.right===null){
                        current.right = newNode;
                        return this.root;
                    }
                    current = current.right;
                }
                if(current.val>value){
                    if(current.left===null){
                        current.left = newNode;
                        return this.root;
                    }
                    current = current.left;
                }
            }
        }
    }
  
         printInorder(element :TreeNode | null) {

            if (element== null)
                return;
     
            this.printInorder(element.left);
     
            console.log(element.val + " ");
     
            this.printInorder(element.right);
        }
    printPostorder(element : TreeNode | null) {
        if (element == null)
            return;
 
        this.printPostorder(element.left);
 
        this.printPostorder(element.right);
 
        console.log(element.val + " ");
    }
    printPreorder(element : TreeNode | null) {
        if (element == null)
            return;
 
            console.log(element.val + " ");

 
        this.printPreorder(element.left);
 
        this.printPreorder(element.right);
        
    }
}

let tree:BST = new BST();

tree.add(99);
tree.add(19);
tree.add(129);
tree.add(9);
console.log(tree.add(91))
// console.log(tree)
// tree.printInorder(tree.root);
// tree.printPostorder(tree.root);
// tree.printPreorder(tree.root);

