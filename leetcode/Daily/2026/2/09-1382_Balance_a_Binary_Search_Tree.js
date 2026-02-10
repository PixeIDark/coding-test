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
// 노드 값을 유지하면서 균형 잡힌 이진 탐색 트리로 만들어서 반환 (서브트리 깊이 차이 1이하)
// 순서 바껴도됨
// 1. null제외하고 요소들 저장
// 2. 읽어서 트리만들기
// 38분
var balanceBST = function (root) {
  const arr = [];

  const search = (node) => {
    if (!node) return;

    search(node.left);
    arr.push(node.val);
    search(node.right);
  };
  search(root);

  // dfs로 순서대로
  // 루트는 만들어두는게 더 좋을듯
  // 1. const node = queue.shift()
  // 2. node.left(new TreeNode(arr.item, new TreeNode, new TreeNode))
  // 3. node.right(new TreeNode(arr.item, new TreeNode, new TreeNode))
  // 2. queue.push(node.left, node.right)
  const build = (left, right) => {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(arr[mid]);
    node.left = build(left, mid - 1);
    node.right = build(mid + 1, right);

    return node;
  };

  return build(0, arr.length - 1);
};