// 이진 트리 홀수레벨 고체

const root = [2, 3, 5, 8, 13, 21, 34];
// Output: [2,5,3,8,13,21,34]
// Explanation:
//     The tree has only one odd level.
//     The nodes at level 1 are 3, 5 respectively, which are reversed and become 5, 3.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const node = new TreeNode(2);
node.left = new TreeNode(3);
node.right = new TreeNode(5);
node.left.left = new TreeNode(8);
node.left.right = new TreeNode(13);
node.right.left = new TreeNode(21);
node.right.right = new TreeNode(34);

// 홀수면 [2,1,3,4,7,11,29,18] => [18,29,11,7,4,3,1,2].
// bfs 로 레벨을 맞춰서 내려가면서 짝수 숫자에 도달하고, 자식이 있으면 left 와 right 의 val 만 바꿔주자.
// root 도 짝수에 포함
// 짝수일 때 자식을 deque 에 넣는데, 자식들의 밸류 값도 어따 잘 넣어야함.
// 홀수로 자식 차례가 되면  pop 으로 밸류를 꺼내서 .val 을 바꿔주자.
var reverseOddLevels = function (root) {
  const deque = [[root, 2]];
  const nums = [];

  while (deque.length) {
    const [node, k] = deque.shift();

    if (!node) continue;

    if (k % 2 === 0 && node.left) nums.push(node.left.val, node.right.val);
    else if (nums.length) node.val = nums.pop();

    if (node.left) {
      deque.push([node.left, k + 1], [node.right, k + 1]);
    }
  }

  return root;
};

console.log(reverseOddLevels(node));
