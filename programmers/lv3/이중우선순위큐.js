// 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

// 명령어	수신 탑(높이)
// I 숫자	큐에 주어진 숫자를 삽입합니다.
// D 1	큐에서 최댓값을 삭제합니다.
// D -1	큐에서 최솟값을 삭제합니다.

const input = [
  "I -45",
  "I 653",
  "D 1",
  "I -642",
  "I 45",
  "I 97",
  "D 1",
  "D -1",
  "I 333",
];
// outPut = [0, 0]

// 큐가 비어있는데 삭제 명령은 무시함
// 최대값, 최소값이 두개 이상이면 하나만 삭제함.
// 시간복잡도 n 으로 풀 수 있는법 쌉가능.
// 요소의 첫글자에서 if하나
// 요소의 3번째 글자에서 -냐 걍 숫자냐.
// 1. min값 구하고 indexOf 쓰고 해당 인덱스 삭제.
function solution(operations) {
  let arr = [];
  for (const str of operations) {
    if (str[0] === "I") {
      arr.push(Number(str.slice(2, str.length)));
      arr.sort((a, b) => a - b);
    } else {
      if (str[2] === "-") {
        arr.shift();
      } else {
        arr.pop();
      }
    }
  }
  if (arr.length === 0) return [0, 0];
  let max = arr.pop();
  return [max, arr.length >= 1 ? arr.shift() : max];
}

console.log(solution(input));
// O(n log n) O(n)
// 나중에 클래스 써서 풀어보자.
