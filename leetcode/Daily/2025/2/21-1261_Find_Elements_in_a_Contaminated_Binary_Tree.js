// 오염된 노드를 정화하고 find 의 매개변수가 존재하는지 트루 값을 반환해주자

// Input
//     ["FindElements","find","find","find"]
//     [[[-1,-1,-1,-1,-1]],[1],[3],[5]]
// Output
//     [null,true,true,false]
// Explanation
// FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
// findElements.find(1); // return True
// findElements.find(3); // return True
// findElements.find(5); // return False

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var FindElements = function (root) {
  this.set = new Set();

  // dfs 로 각자의 뿌리로 갈라져야해
  // 거기서 set에다가 담아서 find는 has로 증명
  const dfs = (node) => {
    const x = node.val;
    this.set.add(node.val);
    if (node.left !== null) {
      node.left.val = 2 * x + 1;
      dfs(node.left);
    }
    if (node.right !== null) {
      node.right.val = 2 * x + 2;
      dfs(node.right);
    }
  };
  root.val = 0;
  dfs(root);
};

FindElements.prototype.find = function (target) {
  return this.set.has(target);
};

const root = new TreeNode(-1);
root.left = new TreeNode(null);
root.right = new TreeNode(-1);
console.log(root);
const node = new FindElements(root);
console.log(node);
