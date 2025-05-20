// 트리의 모든 리프 값과 시퀸스가 같은지

// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true

// * Definition for a binary tree node.
// * function TreeNode(val, left, right) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.left = (left===undefined ? null : left)
// *     this.right = (right===undefined ? null : right)
// val 만 존재하고 left, right 가 없으면 리프노드
// 이러한 노드들만 왼쪽 우선 탐색해서 배열에 집어넣고 비교하자
// 17분
var leafSimilar = function (root1, root2) {
    const dfs = (node) => {
        if (!node?.val) return []

        if (!node.left && !node.right) return [node.val]

        return dfs(node.left).concat(dfs(node.right))
    }

    const arr1 = dfs(root1)
    const arr2 = dfs(root2)

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (arr1[i] !== arr2[i]) return false
    }

    return true
};