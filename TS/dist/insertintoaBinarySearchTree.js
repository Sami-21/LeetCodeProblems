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
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
var BST = /** @class */ (function () {
    function BST() {
        this.root = null;
    }
    BST.prototype.add = function (value) {
        if (this.root === null) {
            this.root = new TreeNode(value);
            return this.root;
        }
        else {
            var current = this.root;
            var newNode = new TreeNode(value);
            while (current) {
                if (current.val < value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this.root;
                    }
                    current = current.right;
                }
                if (current.val > value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this.root;
                    }
                    current = current.left;
                }
            }
        }
    };
    BST.prototype.printInorder = function (element) {
        if (element == null)
            return;
        this.printInorder(element.left);
        console.log(element.val + " ");
        this.printInorder(element.right);
    };
    BST.prototype.printPostorder = function (element) {
        if (element == null)
            return;
        this.printPostorder(element.left);
        this.printPostorder(element.right);
        console.log(element.val + " ");
    };
    BST.prototype.printPreorder = function (element) {
        if (element == null)
            return;
        console.log(element.val + " ");
        this.printPreorder(element.left);
        this.printPreorder(element.right);
    };
    return BST;
}());
var tree = new BST();
tree.add(99);
tree.add(19);
tree.add(129);
tree.add(9);
console.log(tree.add(91));
// console.log(tree)
// tree.printInorder(tree.root);
// tree.printPostorder(tree.root);
// tree.printPreorder(tree.root);
