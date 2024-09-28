// 노드를 비교 시 해당 노드보다 큰 값이 없으면 좋은 노드. 좋은 노드의 개수 출력.

// Input: root = [3,1,4,3,null,1,5]
// Output: 4
// Explanation: Nodes in blue are good.
// Root Node (3) is always a good node.
// Node 4 -> (3,4) is the maximum value in the path starting from the root.
// Node 5 -> (3,4,5) is the maximum value in the path
// Node 3 -> (3,1,3) is the maximum value in the path.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let input = new TreeNode(3);
input.left = new TreeNode(1);
input.left.right = new TreeNode(3);
input.right = new TreeNode(4);
input.right = new TreeNode(1);
input.right.right = new TreeNode(5);

/**
 * @param {TreeNode} root
 * @return {number}
 */

// 루트에서 x까지 x보다 큰값 없으면 좋은 노드임.
// 1. 최대값을 항상 넣어주고 그거랑 비교해라.
var goodNodes = function (root) {
  if (!root) return 0;
  let n = 0;

  const dfs = (node, maxNode) => {
    if (!node) return;
    if (node.val >= maxNode) {
      n++;
      maxNode = node.val;
    }

    dfs(node.left, maxNode);
    dfs(node.right, maxNode);
  };
  dfs(root, -Infinity);
  return n;
};

console.log(goodNodes(input));
