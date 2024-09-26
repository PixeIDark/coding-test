// linked-list묶인 배열 던져주면 오름차순으로 정렬해서 하나의 linked-list로 뱉어내기.

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//    this.next = (next===undefined ? null : next)
// }

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 1. for문을 이용해서 lists.length만큼 돌아
// 2. while문을 이용해서 이것들을 더미배열에 푸시함
// 3. 더미배열을 정렬하고 링크만듬
var mergeKLists = function (lists) {
  let arr = [];

  for (let list of lists) {
    while (list) {
      arr.push(list.val);
      list = list.next;
    }
  }

  arr.sort((a, b) => a - b);
  let result = new ListNode(0);
  let temp = result;
  for (const n of arr) {
    temp.next = new ListNode(n);
    temp = temp.next;
  }

  return result.next;
};
