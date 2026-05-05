/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 링크드를 배열로
// k만큼 우측으로 이동해서 배열을 재정렬
// 배열을 링크드로
// 16분
var rotateRight = function (head, k) {
  const arr = [];
  let node = head;

  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  const n = arr.length;
  const rotatedArr = Array(n);

  for (let i = 0; i < n; i++) {
    rotatedArr[(i + k) % n] = arr[i];
  }

  node = head;

  for (const val of rotatedArr) {
    node.val = val;
    node = node.next;
  }

  return head;
};