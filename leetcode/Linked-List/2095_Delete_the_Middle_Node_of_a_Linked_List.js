// 올림 기준 중간노드 삭제

const head = [1, 3, 4, 7, 1, 2, 6]
// Output: [1,3,4,1,2,6]
// Explanation:
//     The above figure represents the given linked list. The indices of the nodes are written below.
//     Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
//     We return the new list after removing this node.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 중간노드를 a 를 찾으면 a 의 next 를 저장하고,
// 그 전 노드의 next 에 저장한 next 를 할당
// 중간 노드를 어떻게 특정하느냐? 처음에 한번 다 돌아봐야할듯
// 20분
var deleteMiddle = function (head) {
    if (!head?.next) return null

    let slow = head
    let fast = head
    let temp

    while (fast?.next) {
        temp = slow
        slow = slow.next
        fast = fast?.next?.next
    }

    temp.next = slow.next

    return head
};

console.log(deleteMiddle(head))