/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 트리의 가장 깊은 노드들을 포함하는 가장 작은 서브 트리 반환
// 우선 maxDepth 갱신 시 set = new Set()
// maxDepth와 같은 depth 발견시 set.add(val)
// 이후 노드를 다시 탐색하면서 set 을 모두 발견하는 가장 깊은 노드를 탐색
// 34분
var subtreeWithAllDeepest = function (root) {
  let maxDepth = 0;
  let set = new Set();

  const search = (node, depth) => {
    if (!node) return;

    if (maxDepth < depth) {
      maxDepth = depth;
      set = new Set();
    }

    if (maxDepth === depth) set.add(node.val);

    search(node.left, depth + 1);
    search(node.right, depth + 1);
  };
  search(root, 0);

  let result = null;

  const dfs = (node) => {
    if (!node || result) return 0;

    let count = 0;

    if (set.has(node.val)) count++;

    count += dfs(node.left) + dfs(node.right);

    if (count === set.size) {
      result = node;
      return;
    }

    return count;
  };
  dfs(root);
  // dfs 순회중 즉시 반환은 불가능한가? 가능하지 당연히

  return result;
};