// 문자열로 바꾸고 다시 트리로 바꾸셈

// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const input = new TreeNode(1);
input.left = new TreeNode(2);
input.right = new TreeNode(3);
input.right.left = new TreeNode(4);
input.right.right = new TreeNode(5);

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// %앞에 넣어라
// bfs로 ㄱㄱ
var serialize = function (root) {
  if (!root) return ""; // root가 null일 경우 처리

  let queue = [root];
  let arr = [];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      arr.push(node.val);
      queue.push(node.left || null);
      queue.push(node.right || null);
    } else {
      arr.push(null);
    }
  }

  while (arr[arr.length - 1] === null) {
    arr.pop();
  }

  return arr.map((val) => (val === null ? "null" : val)).join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

// for문돌려서 걍 %빼고 넣으면됨.
var deserialize = function (data) {
  if (data === "") return null;

  let arr = data.split(",").map((d) => {
    return (d = d === "null" ? null : Number(d));
  });

  let root = new TreeNode(arr[0]);
  let queue = [root];
  let i = 1;

  while (arr.length > i && queue.length > 0) {
    let node = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
};

console.log(deserialize(serialize(input)));
