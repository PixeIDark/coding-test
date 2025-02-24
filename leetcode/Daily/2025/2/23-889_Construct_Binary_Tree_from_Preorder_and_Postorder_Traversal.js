// 전위 순회 및 후위 순회 참고해서 이진 트리 구축하기

// Input: preorder = [1,2,4,5,3,6,7], postorder = [4,5,2,6,7,3,1]
// Output: [1,2,3,4,5,6,7]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
         }
/**`
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    if (!preorder.length) return null

    const root = new TreeNode(preorder[0])

    if(preorder.length === 1) return root

    const leftRootIdx = postorder.indexOf(preorder[1])
    const leftSize = leftRootIdx + 1

    root.left = constructFromPrePost(preorder.slice(1, leftSize + 1), postorder.slice(0,leftSize))
    root.right = constructFromPrePost(preorder.slice(leftSize + 1), postorder.slice(leftSize, -1))

    return root
};

