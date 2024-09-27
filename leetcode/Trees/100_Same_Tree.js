// 두 트리가 같은지 판별

// Input: p = [1,2,3], q = [1,null,2]
// Output: true

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let p = new TreeNode(1, 2, 3);
let q = new TreeNode(1, null, 2);

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 재귀함수로 서로 비교해보면 되는거아님?
var isSameTree = function (p, q) {
  const dfs = (p, q) => {
    if (!p && !q) return true;

    if (!p || !q) return false;

    if (p.val !== q.val) return false;

    return dfs(p.left, q.left) && dfs(p.right, q.right);
  };

  return dfs(p, q);
};

console.log(isSameTree(p, q));
