// 역순으로 숫자 만들고 서로 더한 값 역순으로 링크 만들기

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// 숫자로 만들어야함
var addTwoNumbers = function (l1, l2) {
  let temp1 = l1;
  let temp2 = l2;
  let arr1 = [];
  let arr2 = [];

  while (temp1) {
    arr1.push(temp1.val);
    temp1 = temp1.next;
  }
  while (temp2) {
    arr2.push(temp2.val);
    temp2 = temp2.next;
  }

  let n1 = "";
  let n2 = "";
  for (let i = arr1.length - 1; i >= 0; i--) {
    n1 = n1 + String(arr1[i]);
  }

  for (let i = arr2.length - 1; i >= 0; i--) {
    n2 = n2 + String(arr2[i]);
  }

  let result = String(n1 * 1 + n2 * 1).split("");
  let a = new ListNode(Number(result[result.length - 1]));
  let b = a;
  for (let i = result.length - 2; i >= 0; i--) {
    b.next = new ListNode(Number(result[i]));
    b = b.next;
  }

  return a;
};
console.log(addTwoNumbers(l1, l2));
