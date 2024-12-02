// k 진수로 바꿔서 10진법 기준으로 모든 소수 찾기 중복가능

const a = 1,
  n = 10000000,
  k = 2;
// OutPut = 3

// 1 = 1, 2 = 2, 3 = 10, 4= 11, 5 = 12, 6 = 20, 7 = 21, 8 = 22, 9 = 100, 10 = 101, 11 = 102
// 3제곱일 때 마다 자릿수가 늘음. 0 제곱 1자리 1제곱 2자리 ...
const converter = (n, k) => {
  let teen = 1;
  const origin = k;
  while (k) {
    if (k > n) break;
    k *= origin;
    teen++;
  }

  let ruler = k / origin;
  let str = "";
  while (teen) {
    const choice = Math.floor(n / ruler);
    str += choice;
    n %= ruler;
    ruler /= origin;
    teen--;
  }
  return str;
};

const isSosu = (n) => {
  if (n === 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};
// 0 이면 패스하고 숫자를 str+= 로 넣으면서 혹은 배열
// 다음 0 이 나오거나 마지막이면 계산 실행
function solution(n, k) {
  n = converter(n, k);
  let str = "";
  let result = 0;

  for (let i = 0; i < n.length; i++) {
    const num = n[i];
    if (num !== "0") str += num;
    if (str.length && (num === "0" || i === n.length - 1)) {
      if (isSosu(parseInt(str))) {
        result++;
      }
      str = "";
    }
  }
  return result;
}

console.log(solution(n, k));
