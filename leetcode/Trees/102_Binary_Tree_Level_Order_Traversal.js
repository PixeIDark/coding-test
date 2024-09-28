// 걍 배열로 바꾸면됨

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let input = new TreeNode(3);
input.left = new TreeNode(9);
input.right = new TreeNode(20);
input.right.left = new TreeNode(15);
input.right.right = new TreeNode(7);

/**
 * @param {TreeNode} root
 * @return {number}
 */

// 큐와 depth 레벨 개념으로 풀어야함.
// depth가 같은놈들은 다 같은 배열에 들어감.
var levelOrder = function (root) {
  if (!root) return [];
  let arr = [[root.val]];
  const dfs = (node) => {
    if (!node) return;

    let temp = [];
    if (node.left) temp.push(node.left.val);
    if (node.right) temp.push(node.right.val);

    if (temp.length > 0) arr.push([...temp]);
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);
  return arr;
};

console.log(levelOrder(input));
