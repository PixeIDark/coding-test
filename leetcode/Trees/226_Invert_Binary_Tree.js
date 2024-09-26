// 왼쪽 오른쪽 자리 바꾸기임.

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// TreeNode(val, left, right) {
//   *     this.val = (val===undefined ? 0 : val)
//   *     this.left = (left===undefined ? null : left)
//   *     this.right = (right===undefined ? null : right)
//   * }
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1, 2);

// ㅋㅋㅋ 너무 쉬운데?
// 재귀함수 각
var invertTree = function (root) {
  if (root == null) {
    return null;
  }

  const temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
};

console.log(invertTree(root));
