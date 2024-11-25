// 퍼즐을 오름차로 정렬한다.

const board = [
  [4, 1, 2],
  [5, 0, 3],
];
// Output: 5
// Explanation: 5 is the smallest number of moves that solves the board.
//     An example path:
//     After move 0: [[4,1,2],[5,0,3]]
// After move 1: [[4,1,2],[0,5,3]]
// After move 2: [[0,1,2],[4,5,3]]
// After move 3: [[1,0,2],[4,5,3]]
// After move 4: [[1,2,0],[4,5,3]]
// After move 5: [[1,2,3],[4,5,0]]

// 첫 행을 정렬 하고, 두번째
var slidingPuzzle = function (board) {
  const target = "123450";

  const move = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ];

  const first = board.flat().join("");
  const queue = [[first, 0]];
  const set = new Set();

  while (queue.length) {
    const [state, steps] = queue.shift();

    if (state === target) return steps;

    let zero = state.indexOf("0");

    for (const next of move[zero]) {
      let luring = state.split("");
      [luring[zero], luring[next]] = [luring[next], luring[zero]];

      luring = luring.join("");
      if (!set.has(luring)) {
        set.add(luring);
        queue.push([luring, steps + 1]);
      }
    }
  }
  return -1;
};

console.log(slidingPuzzle(board));
