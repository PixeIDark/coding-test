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
 * @return {boolean}
 */
// 서브 트리의 높이차이가 2이상 나면 false
// dfs로
// 47분
var isBalanced = function (root) {
  const dfs = (node, depth) => {
    if (!node) return depth - 1;

    const leftDepth = dfs(node.left, depth + 1);
    const rightDepth = dfs(node.right, depth + 1);

    if (leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1) return -1;

    return Math.max(leftDepth, rightDepth);
  };

  return dfs(root, 1) !== -1;
};

// var isBalanced = function(root) {
//   const dfs = (node, depth) => {
//     if(!node) return depth - 1

//     const leftDepth = dfs(node.left, depth + 1)
//     const rightDepth = dfs(node.right, depth + 1)

//     if(Math.abs(leftDepth - rightDepth) > 1) throw {}

//     return Math.max(leftDepth, rightDepth)
//   }
//   try {
//     dfs(root, 0)
//   } catch (e) {
//     return false
//   }


//   return true
// };

// var isBalanced = function(root) {
//   if(root === null) return true

//   let height = 0
//   let maxHeight = Infinity
//   let queue = [root]

//   //         1
//   //       2   2
//   //     3       3
//   //   4           4
//   while(true) {
//     let temp = []

//     for(const node of queue) {
//       if(node.left) {
//         temp.push(node.left)
//       }
//       if(node.right) {
//         temp.push(node.right)
//       }

//       if(!node.left || !node.right) maxHeight = Math.min(height, maxHeight)
//     }

//     if(height > maxHeight + 1) return false

//     if(temp.length > 0) {
//       queue = temp
//       height++
//     } else break
//   }

//   console.log(maxHeight, height)
//   return true
// };