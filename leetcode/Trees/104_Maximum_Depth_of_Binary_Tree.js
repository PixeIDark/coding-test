// tree의 height 구하기

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let input = new TreeNode(3);
input.left = new TreeNode(9, null, null);
input.right = new TreeNode(20, 15, 7);

/**
 * @param {TreeNode} root
 * @return {number}
 */

// 흠... 재귀함수각
var maxDepth = function (root) {
  let height = 0;

  const dfs = (depth, node) => {
    if (!node) return;

    height = Math.max(height, depth);

    dfs(depth + 1, node.left);
    dfs(depth + 1, node.right);
  };

  dfs(1, root);
  return height;
};

console.log(maxDepth(input));
