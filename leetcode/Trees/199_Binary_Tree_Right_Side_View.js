// 오른쪽에서 보았을 때 보이는 값들

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let input = new TreeNode(1);
input.left = new TreeNode(2);
input.left.right = new TreeNode(5);
input.right = new TreeNode(3);
input.right.right = new TreeNode(4);

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 기본적으로 오른쪽 트리를 배열에 넣고 오른쪽 트리가 끝난경우, depth 더 깊은놈중에 제일 오른쪽 찾아서 넣어.
// 즉 depth 마다 arr[depth] = node.val, 가장 오른쪽에 있는 하나의 node.val만 넣으면됨.
// 재귀 함수를 돌릴경우, 가장 오른쪽은 가장 늦게 들어감 어차피.
// var rightSideView = function (root) {
//   let arr = [];

//   const dfs = (depth, node) => {
//     if (!node) return;

//     if (arr.length === depth) arr.push(node.val);

//     dfs(depth + 1, node.right);
//     dfs(depth + 1, node.left);
//   };

//   dfs(0, root);
//   return arr;
// };

// bfs
var rightSideView = function (root) {
  if (!root) return [];
  let arr = [];
  let stack = [[root, 0]];
  let maxDepth = -1;

  while (stack.length) {
    const [node, depth] = stack.pop();

    if (depth > maxDepth) {
      arr.push(node.val);
      maxDepth = depth;
    }

    if (node.left) stack.push([node.left, depth + 1]);
    if (node.right) stack.push([node.right, depth + 1]);
  }

  return arr;
};

// stack = 후입선출(LIFO) push로 넣고 pop으로 빼감
// queue = 선입선출(FIFO) unshift로 넣고 pop으로 빼감

console.log(rightSideView(input));
