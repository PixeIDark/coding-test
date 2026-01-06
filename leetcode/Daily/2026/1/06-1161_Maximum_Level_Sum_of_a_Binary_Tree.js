// 트리노드의 뎁스 중 합이 가장 높은 뎁스 반환, 루트가 뎁스 1
// 1. bfs를 이용해서 뎁스별 탐색
// 2. 레벨이 오를 때 마다 배열 자체를 재할당해서 구분하기
// 20분 오타 레전드 right rigth
var maxLevelSum = function (root) {
  let stack = [root];
  let temp = [];
  let max = -Infinity;
  let sum = 0;
  let level = 0;
  let maxLevel = 0;

  while (stack.length > 0) {
    const node = stack.pop();
    sum += node.val;

    if (node.left) temp.push(node.left);
    if (node.right) temp.push(node.right);

    if (stack.length === 0) {
      stack = temp;
      temp = [];
      level++;

      if (max < sum) {
        max = sum;
        maxLevel = level;
      }

      sum = 0;
    }
  }

  return maxLevel;
};