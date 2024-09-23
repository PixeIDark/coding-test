// fasdf

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null];

  while (curr) {
    // 다음 노드 저장
    next = curr.next;
    // 현재 노드의 next를 이전 노드로 설정
    curr.next = prev;
    // prev와 curr를 한 단계씩 전진
    prev = curr;
    curr = next;
  }

  // prev가 새로운 head가 됩니다
  return prev;
};

// 테스트
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original list:");
let current = head;
while (current) {
  console.log(current.val);
  current = current.next;
}

let reversed = reverseList(head);

console.log("Reversed list:");
current = reversed;
while (current) {
  console.log(current.val);
  current = current.next;
}
