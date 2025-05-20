// 쌍둥이의 최대 합

const head = [4, 2, 2, 3]
// Output: 7
// Explanation:
//     The nodes with twins present in this linked list are:
//     - Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
//     - Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
// Thus, the maximum twin sum of the linked list is max(7, 4) = 7.

// 쌍둥이는 합이 n - 1 임 두개씪만 묶일 수 있음
// 걍 val 모두 배열에 저장하고 해보자
// 12분
var pairSum = function (head) {
    const stack = []
    stack.push(head.val)

    while (head?.next) {
        head = head.next
        stack.push(head.val)
    }

    let max = 0

    for (let i = 0, j = stack.length - 1; i < j; i++, j--) {
        max = Math.max(max, stack[i] + stack[j])
    }

    return max
};