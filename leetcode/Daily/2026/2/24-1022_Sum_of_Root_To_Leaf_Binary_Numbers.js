/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 17분
var sumRootToLeaf = function (root) {
  let count = 0;

  const dfs = (node, bit) => {
    if (!node) {
      return;
    }

    bit += String(node.val);

    if (!node.left && !node.right) {
      count += parseInt(bit, 2);
      return;
    }

    dfs(node.left, bit);
    dfs(node.right, bit);
  };

  dfs(root, "");

  return count;
};