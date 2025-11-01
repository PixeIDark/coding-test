/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// nums 요소와 같은 값을 지닌 노드들 삭제해서 리스트 노드로 반환
// 22분
var modifiedList = function (nums, head) {
  const set = new Set(nums);
  const newNode = new ListNode(-1);
  let newCurr = newNode;
  let curr = head;

  while (curr) {
    if (!set.has(curr.val)) {
      newCurr.next = new ListNode(curr.val);
      newCurr = newCurr.next;
    }

    curr = curr.next;
  }

  return newNode.next;
};