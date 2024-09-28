// 경로 합이 가장 큰 값

// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const input = new TreeNode(-10);
input.left = new TreeNode(9);
input.right = new TreeNode(20);
input.right.left = new TreeNode(15);
input.right.right = new TreeNode(7);

/**
 * @param {TreeNode} root
 * @return {number}
 */

// 배열에 넣어서 쇼부봐라
var maxPathSum = function (root) {
  let max = -Infinity;
  const dfs = (node) => {
    if (!node) return 0;

    const l = Math.max(dfs(node.left), 0);
    const r = Math.max(dfs(node.right), 0);

    const path = l + r + node.val;
    max = Math.max(path, max);

    return node.val + Math.max(l, r);
  };
  dfs(root);

  return max;
};

console.log(maxPathSum(input));
