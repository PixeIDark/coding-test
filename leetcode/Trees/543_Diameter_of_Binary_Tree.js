// tree의 지름 구하기

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let input = new TreeNode(1);
input.left = new TreeNode(2, 4, 5);
input.right = new TreeNode(3);

/**
 * @param {TreeNode} root
 * @return {number}
 */

// 재귀함수
// 1. 왼쪽값과 오른쪽값을 구별
// 2. dfs 끝날 때마다 l+r값을 배열에 넣어줌.
// 3. 배열 값중 가장 큰 값 반환
var diameterOfBinaryTree = function (root) {
  let result = 0;
  const dfs = (node) => {
    if (!node) return 0;

    let l = dfs(node.left);
    let r = dfs(node.right);

    result = Math.max(l + r, result);

    return Math.max(l, r) + 1;
  };

  dfs(root);
  return result;
};

console.log(diameterOfBinaryTree(input));
