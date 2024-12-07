// 말 움직여서 target 과 같게하기

const start = "_L__R__R_",
  target = "L______RR";
// Output: true
// Explanation: We can obtain the string target from start by doing the following moves:
//     - Move the first piece one step to the left, start becomes equal to "L___R__R_".
// - Move the last piece one step to the right, start becomes equal to "L___R___R".
// - Move the second piece three steps to the right, start becomes equal to "L______RR".
//     Since it is possible to get the string target from start, we return true.

// start 의 0번부터 돌다가 target 과 다르고, L 이니 L을 찾는 여행을 떠나야함.
// 만약 R 이였으면 바로 false 임
// target 쭉 순회하면서 L 찾아야함. 만약, R 만나면 바로 false
// 관건은 현재 start 탐색중인 인덱스를 기준으로 L 이면 target 의 왼쪽을 살피고 R이면 target 의 오른쪽을 살펴야함.
// target 먼저 살펴야
function canChange(start, target) {
  // R과 L의 이동 가능 횟수를 추적
  let rightMoves = 0; // 양수: R이 오른쪽으로 이동 가능한 횟수
  let leftMoves = 0; // 음수: L이 왼쪽으로 이동 가능한 횟수

  for (let i = 0; i < start.length; i++) {
    // R은 오른쪽으로만 이동 가능
    if (start[i] === "R") rightMoves++;
    // L은 왼쪽에서 와야 함
    if (target[i] === "L") leftMoves--;

    // R과 L이 동시에 있으면 충돌
    if (rightMoves !== 0 && leftMoves !== 0) return false;

    // target의 R에 도달하면 R 이동 횟수 감소
    if (target[i] === "R") {
      rightMoves--;
      if (rightMoves < 0) return false; // R이 왼쪽으로 이동할 수 없음
    }

    // start의 L을 만나면 L 이동 횟수 증가
    if (start[i] === "L") {
      leftMoves++;
      if (leftMoves > 0) return false; // L이 오른쪽으로 이동할 수 없음
    }
  }

  // 모든 L과 R이 올바르게 이동했는지 확인
  return rightMoves === 0 && leftMoves === 0;
}

console.log(canChange(start, target));
