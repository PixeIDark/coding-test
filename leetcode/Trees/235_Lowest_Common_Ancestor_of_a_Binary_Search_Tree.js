// 최소 공통 조상 찾기

// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(6);
root.left = new TreeNode(2);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right = new TreeNode(8);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
const p = 2,
  q = 8;

// 이진 "탐색" 트리가 조건인걸 이용
// p,q 각각 부모가 누군지를 가지고 있고, 둘이 부모가 안겹치면 더 할아버지로 비교 <- depth가 같을 경우에
// depth차이가 날 경우, 1이상 차이면 할배 - 아빠 비교 or 증조할배 - 아빠 비교 depth 깊은 쪽이 할배
// 부모 다를때마다 한칸 윗조상으로 이동.
// 만약 p의 부모가 q이면 답은 바로 q <- 가장 먼저 체크할 것
// 1. p, q의 조상을 담는 배열을 만듬. 배열의 길이가 depth, 가까울수록 배열 뒤쪽
// 2. 재귀함수로 순회하면서 담아버림.
// 3. 배열끼리 비교
var lowestCommonAncestor = function (root, p, q) {
  const dfs = (node, target, path) => {
    if (!node) return null;

    path.push(node);

    if (node === target) {
      return [...path];
    }

    const leftResult = dfs(node.left, target, path);
    if (leftResult) return leftResult;

    const rightResult = dfs(node.right, target, path);
    if (rightResult) return rightResult;

    path.pop();
    return null;
  };

  const pArr = dfs(root, p, []) || [];
  const qArr = dfs(root, q, []) || [];

  const check = (pArr, qArr) => {
    let n = Math.min(pArr.length, qArr.length) - 1;
    while (n >= 0) {
      if (pArr[n] === qArr[n]) return pArr[n];
      n--;
    }
    return null;
  };

  return check(pArr, qArr);
};

console.log(lowestCommonAncestor(root, p, q));
