// 두 개의 linkedList를 오름차 순으로 합쳐라.

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(4);

let head2 = new ListNode(1);
head2.next = new ListNode(3);
head2.next.next = new ListNode(4);

var mergeTwoLists = function (list1, list2) {
  const dummy = { val: 0, next: null };
  let merge = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      merge.next = list1;
      list1 = list1.next;
    } else {
      merge.next = list2;
      list2 = list2.next;
    }
    merge = merge.next;
  }

  if (list1) {
    merge.next = list1;
  } else {
    merge.next = list2;
  }
  return dummy.next;
};

console.log(mergeTwoLists(head, head2));
