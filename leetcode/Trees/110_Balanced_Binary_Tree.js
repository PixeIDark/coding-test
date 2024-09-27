// 높이 균형 맞는지 체크

// Input: root = [3,9,20,null,null,15,7]
// Output: true

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

// 노드 끝 기준, depth가 가장 높은 곳과 낮은 곳 차이가 2이상일 시 false
// null 뜰시 바로 리턴 높이
// l, r 이 존재하지 않으면 푸시하는걸로 바꿔야함.
// 1. 재귀 갈기고, null 뜨면 그동안의 높이 값 배열에 푸시
// 2. 최종적으로 max-min > 1 로 판별
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return 0;

    const l = dfs(node.left);
    const r = dfs(node.right);

    if (l === -1) return -1;

    if (r === -1) return -1;

    if (Math.abs(l - r) > 1) return -1;

    return Math.max(l, r) + 1;
  };
  return dfs(root) !== -1;
};

console.log(isBalanced(input));
