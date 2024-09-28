// 이진 탐색 트리 판별

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let input = new TreeNode(5);
input.left = new TreeNode(1);
input.right = new TreeNode(6);
input.right.left = new TreeNode(3);
input.right.right = new TreeNode(5);

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// left < val, val < right 인지 비교 하면됨.
// 1. l과 r 을 전에있던 node.val을 줘 l은 left쪽 루트 r은 right쪽 루트
var isValidBST = function (root) {
  const dfs = (node, l, r) => {
    if (!node) return true;
    if (node.val >= l || node.val <= r) return false;

    return dfs(node.left, node.val, r) && dfs(node.right, l, node.val);
  };
  return dfs(root, Infinity, -Infinity);
};

console.log(isValidBST(input));
