// root 이진 트리를 두 개의 서브트리로 나누고,
// 두 서브트리의 합의 곱이 최대 반환
// 1. 탐색하면서 노드의 합을 더한 값을 set에 반환
// 29분
var maxProduct = function (root) {
  const mod = 1e9 + 7;
  const set = new Set();
  let total = 0;

  const dfs = (node) => {
    if (!node) return 0;

    const sum = node.val + dfs(node.left) + dfs(node.right);
    total = Math.max(total, sum);
    set.add(sum);

    return sum;
  };
  dfs(root);

  const nums = [...set];

  return Math.max(...nums.map((e) => (total - e) * e)) % mod;
};