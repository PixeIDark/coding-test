// 1~k까지 뒤집는 방식

// const head = [1, 2, 3, 4, 5],
//   k = 2;
// Output: [2,1,4,3,5]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
const k = 2;
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 롤 베인 은화살 스택 쌓이듯이 스택이 쌓이면 뒤집는 알고리즘을 발동시켜봐
// 1. 배열로 만든다
// 2. stack을 선언하고 push로 집어넣은 뒤, pop으로 하나씩 빼서 link한다.
var reverseKGroup = function (head, k) {
  let arr = [];
  let stack = [];
  let curr = head;
  let i = 1;
  let j = 0;
  while (curr) {
    arr.push(curr.val);
    stack.push(curr.val);
    curr = curr.next;
    if (i % k === 0) {
      arr.splice(i - k, i);
      while (j < k) {
        arr.push(stack.pop());
        j++;
      }
      j = 0;
    }
    i++;
  }

  curr = head;
  while (curr) {
    curr.val = arr[j];
    curr = curr.next;
    j++;
  }
  return head;
};

console.log(reverseKGroup(head, k));
