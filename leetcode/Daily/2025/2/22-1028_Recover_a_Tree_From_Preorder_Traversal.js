// 노드 복원

const traversal = "1-401--349---90--88";
// Output: [1,401,null,349,88,90]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
// - 수가 늘어나면 자식임, - 수가 줄어들면 예전 노드의 형제임
// map 객체로 뎁스를 저장해놓고 해보자

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var recoverFromPreorder = function (traversal) {
  const dp = Array.from({ length: 1000 }, () => []);
  const arr = traversal.split("-");
  dp[0].push(arr[0]);
  // 0 레벨은 인덱스 0 요소 고정, 기본이 1레벨. "" 만날 때 마다 레벨 1증가

  let depth = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === "") {
      depth++;
      continue;
    }

    dp[depth].push(arr[i]);
    depth = 1;
  }

  const dfs = (value, depth) => {
    if (!value) return null;

    const node = new TreeNode(Number(value));

    if (dp[depth + 1].length > 0) {
      node.right = dfs(dp[depth + 1].pop(), depth + 1);
      if (dp[depth + 1].length > 0) {
        node.left = dfs(dp[depth + 1].pop(), depth + 1);
      }
    }

    return node;
  };

  return dfs(dp[0][0], 0);
};
console.log(recoverFromPreorder(traversal));
