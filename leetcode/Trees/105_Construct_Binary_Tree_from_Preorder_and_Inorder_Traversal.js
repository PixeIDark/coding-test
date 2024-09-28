// 전위 중위 순회 주어진거 2개 조합해서 이진 트리 만들기.

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7], [15, 9, 7, 3, 20]
// Output: [3,9,20,null,null,15,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// 전위는 나-왼쪽-오른쪽 순으로 방문
// 즁위는 왼쪽-나-오른쪽 순으로 방문
//
var buildTree = function (preorder, inorder) {
  // ㅗㅗ 런
};
