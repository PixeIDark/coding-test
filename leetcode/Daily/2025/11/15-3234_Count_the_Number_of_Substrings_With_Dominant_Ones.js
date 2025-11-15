// 지배적인 연속적인 부분 문자열 개수
// 1의 개수 >= 0 의 개수 ^ 2 면 지배적
// "101101" => [1,1,2,3,3,4]
// [0]부터 윈도우 시작. 증가량은 k = 1, 지배적이므로 윈도우 시작가능 result = k
// [1]까지 확장. 지배적이지만, [1] - [0]은 0 >= 1 !부분적으로 지배적이지않음, k += 0, result += k
// [2]까지 확장. 지배적이고, [2] - [1]은 1 >= 1 부분적으로도 지배적, k += 1, result += k
// TODO: 벽, TLE
var numberOfSubstrings = function (s) {
  const n = s.length;
  const gainOne = Array(n + 1).fill(0);
  let count = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "1") count++;
    gainOne[i] = count;
  }

  let result = 0;

  for (let i = 0; i < n; i++) {
    let zero = 0;
    let one = 0;

    for (let j = i; j < n; j++) {
      if (s[j] === "0") zero++;
      else one++;

      if (one >= zero * zero) result++;
      else if (one + gainOne[j + 1] < zero * zero) break;
      // += n - j - 1 이 아닌앞으로 얻을수 있는 one의 개수를 기록한 배열을 보고 판단하게 해보자
      // "101101"
      // gainOne = [1, 1, 2, 3, 3, 4] 3 - 2 ??
      // 지배적이지 않은 구간을 만나면 k = 1로 초기화 그리고, 잠재력 포함해서 지배적일 수 있는지 판정
      // 1이면 k = 현재 윈도우 크기 - 초기화 지점 0이면 k 그대로
    }
  }

  return result;
};