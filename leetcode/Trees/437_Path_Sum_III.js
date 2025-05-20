// 경로가 targetSum 이 되는게 몇개인지

const root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], targetSum = 8
// Output: 3
// Explanation: The paths that sum to 8 are shown.

// dfs 탐색하면서 targetSum 되는 순간 카운트하면됨
// 4-3-2-1 4-3-2 4-3
// 3-2-1 3-2 2-1
// 88분
var pathSum = function (root, targetSum) {
    const map = new Map()
    let count = 0
    map.set(0, 1)

    const dfs = (node, sum) => {
        //if (!node?.val) return은 조건이 true로 평가되어 함수가 종료
        if (!node) return

        const newSum = sum + node.val
        count += (map.get(newSum - targetSum) ?? 0)
        map.set(newSum, (map.get(newSum) ?? 0) + 1)

        dfs(node.left, newSum)
        dfs(node.right, newSum)

        map.set(newSum, map.get(newSum) - 1)
    }

    dfs(root, 0)

    return count
};

// var pathSum = function (root, targetSum) {
//     // 폐급 코드
//     const dp = []
//     // 2차 배열에 저장함 노드 경로들을
//     // 스택 쌓아서 targetSum 되는 얘를 찾는다
//     const dfs = (node, str) => {
//         if (!node?.left && !node.right) {
//             dp.push(str + node.val)
//             return
//         }
//
//         if (node?.left) {
//             dfs(node.left, str + node.val + ",")
//         }
//
//
//         if (node?.right) {
//             dfs(node.right, str + node.val + ",")
//         }
//
//     }
//
//     dfs(root, "")
//     let count = 0
//
//     for (const str of dp) {
//         const arr = str.split(",")
//         const stack = [targetSum]
//
//         for (const e of arr) {
//             const num = Number(e)
//             const length = stack.length
//             let i = 0
//
//             while (i < length) {
//                 const target = stack[i]
//                 const diff = target - num
//
//                 if (diff === 0) count++
//                 else stack.push(diff)
//             }
//         }
//     }
//
//     console.log(count, dp)
// };