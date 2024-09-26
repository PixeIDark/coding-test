// 가장작은수 - 가장 큰수 - 두번쨰로 작은수 - 두번째로 큰수 이런 패턴으로 되게해라
// 주어지는 input은 오름차순임

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]

class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);

// i 가 짝수일 경우에 최대값을 넣는 방식으로 ㄱㄱ.
// 최대값을 알방법이 뭐가있냐? 배열로 펼쳐야하냐?
// 1. 배열로 펼치고, 패턴대로 정렬
// 2. 다시 linked list형식으로 변환
var reorderList = function (head) {
  let current = head;
  let arr = [];

  while (current) {
    arr.push(current.val);
    current = current.next;
  }

  let sortArr = [];
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    if (l === r) {
      sortArr.push(arr[l]);
    } else {
      sortArr.push(arr[l]);
      sortArr.push(arr[r]);
    }

    l++;
    r--;
  }
  current = head;
  for (const n of sortArr) {
    current.val = n;
    current = current.next;
  }

  return head;
};

console.log(reorderList(node));
