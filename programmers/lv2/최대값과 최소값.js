// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
// str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

const s1 = "10 2 3 -41";
const s2 = "-1 -1";
const s3 = "-1 -2 -3 -4";

// 인덱스로 꺼내면 0, 2 짝수로 꺼내야함. <= -인 경우도 있기 때문에 안됨.
// 걍 포문 돌면서 min max로 찾아내고 만들어면됨.
// 두자리 수일 때 생각해라.
function solution(s) {
  let min = Infinity;
  let max = -Infinity;
  let temp = "";

  for (const idx in s) {
    temp += s[idx];
    if (s[idx] === " " || Number(idx) == s.length - 1) {
      let num = Number(temp);
      min = Math.min(min, num);
      max = Math.max(max, num);
      temp = "";
    }
  }

  return `${min} ${max}`;
}

console.log(solution(s1));
