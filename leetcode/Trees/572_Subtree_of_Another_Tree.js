// root라는 tree에 subroot가 포함있는지 판별

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(3);
root.left = new TreeNode(4, 1, 2);
root.right = new TreeNode(5);
let subRoot = new TreeNode(4, 1, 2);

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 재귀함수 순회하면서 같은게 하나라도 존재하면 true
// 노드랑 비교를 하고 노드의 자식들이 완전히 똑같은지도 비교해야함.
// 1. 하나는 노드 내려가는 함수
// 2. 체크하는 함수 둘 다 재귀 함수임.
var isSubtree = function (root, subRoot) {
  const check = (root, subRoot) => {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false;
    if (root.val !== subRoot.val) return false;

    return check(root.left, subRoot.left) && check(root.right, subRoot.right);
  };

  const dfs = (root) => {
    if (!root) return false;
    if (check(root, subRoot)) return true;

    return dfs(root.left) || dfs(root.right);
  };
  return dfs(root);
};

console.log(isSubtree(root, subRoot));
