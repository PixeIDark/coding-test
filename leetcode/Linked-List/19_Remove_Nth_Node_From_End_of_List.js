// 뒤에서 n 번째에 해당하는 노드 제거

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// * function ListNode(val, next) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.next = (next===undefined ? null : next)
// * }

class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

let input = new Node(1),
  n = 2;
input.next = new Node(2);
input.next.next = new Node(3);
input.next.next.next = new Node(4);
input.next.next.next.next = new Node(5);

// 길이 - n 을 해주고 해당하는 길이는 생략해버림.ㄱㄱ
// 1. height 알아내야함.
// 2. n 번째 건너뛰기
var removeNthFromEnd = function (head, n) {
  let current = head;
  let depth = 0;

  while (current) {
    current = current.next;
    depth++;
  }

  const l = depth - n;

  if (l === 0) {
    return head.next;
  }

  current = head;
  for (let i = 0; i < l - 1; i++) {
    current = current.next;
  }
  current.next = current.next.next;

  return head;
};

console.log(removeNthFromEnd(input, n));
