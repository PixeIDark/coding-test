// k번째로 작은 값 찾기

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let input = new TreeNode(5);
input.left = new TreeNode(3);
input.left.left = new TreeNode(2);
input.left.right = new TreeNode(4);
input.left.left.left = new TreeNode(1);
input.right = new TreeNode(6);
const k = 3;
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// 걍 다 탐색하고 sort갈기자 안떠오른다
// var kthSmallest = function (root, k) {
//   let arr = [];
//   const dfs = (node) => {
//     if (!node) return;

//     arr.push(node.val);
//     dfs(node.left);
//     dfs(node.right);
//   };
//   dfs(root);
//   arr.sort((a, b) => a - b);

//   return arr[k - 1];
// };

// bst엿네..
// 중위 순회로 풀어야함
// 오름차순으로 방문하니까 k번째 val이 답임
var kthSmallest = function (root, k) {
  let n = 0;
  let result = null;
  const dfs = (node) => {
    if (!node || result !== null) return;

    dfs(node.left);
    n++;

    if (n === k) result = node.val;

    dfs(node.right);
  };
  dfs(root);

  return result;
};
console.log(kthSmallest(input, k));
