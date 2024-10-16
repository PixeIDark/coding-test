// 최소 출력 구해라.

const tasks = ["A", "A", "A", "B", "B", "B"],
  n = 2;
// Output: 8
// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

// 재귀함수 갈겨서 "유휴" 포함 횟수 도출
// "유휴" 상태를 거치면 index 자유롭게 다시 시작할 수 있음.
// 우선순위 큐에 횟수 담고 최소값으로 ㄱㄱ
// 재귀함수 시작되면 바로 복제체 선언한다음.
// 걍 절대 못품 ㅋㅋ 강해져서와라
var leastInterval = function (tasks, n) {
  let small = Infinity;

  const bt = (k, strs, arr) => {
    while (strs > 0) {
      for (let i = tasks.length; i > 0; i--) {
        arr.push(tasks[i]);
        strs.pop();
      }
    }
  };
  bt(0, tasks, []);
};
