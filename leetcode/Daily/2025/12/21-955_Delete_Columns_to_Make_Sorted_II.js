// 요소의 길이는 모두 같다.
// 베열을 사전순으로 만들기 위해 삭제할 최소한의 열 개수 반환
// 일단, 구상이 안되니까 각 인덱스 별 문자 저장해서 봐보자
// ["ca","bb","ac"] => arr = ['cba', 'abc']
// 사전순이 아니면 첫번째 인덱스부터 제거해 나가야함
// arr의 요소를 순회하면서 요소가 사전순이 아닐경우 count++
// 32분
var minDeletionSize = function (strs) {
  // 원본 strs 을 이용해서 각 요소의 [i]번째 char에 접근한뒤
  // 사전순에 맞지않는게 나오면 요소 만들기 취소하고 이전꺼를 씀
  // 그리고 count++, 다음 i 탐색
  const n = strs.length;
  const m = strs[0].length;
  let arr = Array(n).fill("");
  let result = 0;

  for (let i = 0; i < m; i++) {
    const temp = [...arr];
    let isPass = true;

    for (let j = 0; j < n; j++) {
      const char = strs[j][i];
      temp[j] += char;

      if (j === 0) continue;

      if (temp[j - 1] > temp[j]) {
        result++;
        isPass = false;
        break;
      }
    }

    if (isPass) arr = temp;
  }

  return result;
};