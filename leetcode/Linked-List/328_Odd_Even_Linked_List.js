// 짝수 인덱스를 모두 맨끝으로 옮기기

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// next.val 를 따로 저장 후 next = next.next
// 종점에 이르면 next = new ListNode(저장한 것들), 계속 반복
// 15분
var oddEvenList = function (head) {
    const stack = []
    let node = head

    while (node?.next?.next) {
        stack.push(node.next.val)
        node.next = node.next.next
        node = node.next
    }

    if (node?.next) stack.push(node.next.val)

    for (let i = 0; i < stack.length; i++) {
        node.next = new ListNode(stack[i])
        node = node.next
    }

    return head
};