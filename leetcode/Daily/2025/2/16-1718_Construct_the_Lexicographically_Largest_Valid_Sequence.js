// 사전적으로 가장 큰 거 반환

const n = 3;
// Output: [3,1,2,3,2]
// Explanation: [2,3,2,1,3] is also a valid sequence, but [3,1,2,3,2] is the lexicographically largest valid sequence.

var constructDistancedSequence = function (n) {
  const len = n * 2 - 1; // 결과 배열의 길이
  const result = new Array(len).fill(0); // 결과 배열
  const used = new Array(n + 1).fill(false); // 숫자 사용 여부 추적

  const backtrack = (pos) => {
    // 모든 위치를 다 채웠으면 성공
    if (pos === len) return true;

    // 이미 채워진 위치면 다음으로
    if (result[pos] !== 0) {
      return backtrack(pos + 1);
    }

    // n부터 1까지 큰 수부터 시도
    for (let num = n; num >= 1; num--) {
      if (!used[num]) {
        // 아직 사용하지 않은 숫자
        if (num === 1) {
          // 1은 한 번만 사용
          result[pos] = num;
          used[num] = true;
          if (backtrack(pos + 1)) return true;
          result[pos] = 0;
          used[num] = false;
        } else {
          // num만큼 떨어진 위치도 사용 가능한지 확인
          if (pos + num < len && result[pos + num] === 0) {
            // 두 위치에 숫자 배치
            result[pos] = num;
            result[pos + num] = num;
            used[num] = true;
            if (backtrack(pos + 1)) return true;
            // 실패하면 원상복구
            result[pos] = 0;
            result[pos + num] = 0;
            used[num] = false;
          }
        }
      }
    }
    return false;
  };

  backtrack(0); // 0번 위치부터 시작
  return result;
};
